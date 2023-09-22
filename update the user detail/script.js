const API_ENDPOINT = "https://crudcrud.com/api/148e9eddefcd4665a89b45ef6880decf/appointments";  // Replace with your endpoint

// Function to add or update the appointment
document.getElementById("appointmentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("nameInput");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");
    const editIdInput = document.getElementById("editId");  // Check if we're in edit mode

    const name = nameInput.value;
    const date = dateInput.value;
    const time = timeInput.value;
    const appointment = { name, date, time };

    try {
        let savedAppointment;

        if (editIdInput && editIdInput.value) {  // If we're editing an existing appointment
            await axios.put(`${API_ENDPOINT}/${editIdInput.value}`, appointment);
            savedAppointment = { ...appointment, _id: editIdInput.value };
            
            let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            const index = appointments.findIndex(app => app._id === editIdInput.value);
            appointments[index] = savedAppointment;
            localStorage.setItem("appointments", JSON.stringify(appointments));

            editIdInput.value = '';  // Clear the editId input value
        } else {  // If we're adding a new appointment
            const response = await axios.post(API_ENDPOINT, appointment);
            savedAppointment = response.data;

            let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            appointments.push(savedAppointment);
            localStorage.setItem("appointments", JSON.stringify(appointments));
        }

        displayAppointments();

        // Reset form fields after saving the appointment
        nameInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    } catch (error) {
        console.error("Error processing appointment:", error.message);
    }
});

// Function to display appointments
async function displayAppointments() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let output = '';
    for (let appointment of appointments) {
        output += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <span onclick="editAppointment('${appointment._id}')" style="cursor:pointer; margin-right: 10px;" class="badge bg-primary">✎</span>
                    <span onclick="deleteAppointment('${appointment._id}')" style="cursor:pointer; margin-right: 20px;" class="badge bg-danger">🗑️</span>
                </div>
                ${appointment.name} on ${appointment.date} at ${appointment.time}
            </li>`;
    }
    document.getElementById("data").innerHTML = output;
}

// Function to delete appointment
async function deleteAppointment(id) {
    try {
        await axios.delete(`${API_ENDPOINT}/${id}`);

        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments = appointments.filter(app => app._id !== id);
        localStorage.setItem("appointments", JSON.stringify(appointments));

        displayAppointments();
    } catch (error) {
        console.error("Error deleting appointment:", error.message);
    }
}

// Function to edit appointment
function editAppointment(id) {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const appointment = appointments.find(app => app._id === id);

    if (appointment) {
        document.getElementById("nameInput").value = appointment.name;
        document.getElementById("dateInput").value = appointment.date;
        document.getElementById("timeInput").value = appointment.time;

        let editIdInput = document.getElementById("editId");
        if (!editIdInput) {
            editIdInput = document.createElement("input");
            editIdInput.type = "hidden";
            editIdInput.id = "editId";
            document.getElementById("appointmentForm").appendChild(editIdInput);
        }
        editIdInput.value = appointment._id;
    }
}

// Initial load
window.onload = displayAppointments;
