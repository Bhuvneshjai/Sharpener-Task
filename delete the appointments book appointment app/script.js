const API_ENDPOINT = "https://crudcrud.com/api/148e9eddefcd4665a89b45ef6880decf/appointments";  // Replace with your endpoint

// Add appointment
document.getElementById("appointmentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("nameInput");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");

    const name = nameInput.value;
    const date = dateInput.value;
    const time = timeInput.value;
    const appointment = { name, date, time };

    try {
        // Save to cloud (crudcrud)
        const response = await axios.post(API_ENDPOINT, appointment);
        const savedAppointment = response.data;

        // Save to local storage
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push(savedAppointment);
        localStorage.setItem("appointments", JSON.stringify(appointments));

        displayAppointments();

        // Reset form fields after saving the appointment
        nameInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    } catch (error) {
        console.error("Error adding appointment:", error.message);
    }
});

// Display appointments
async function displayAppointments() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let output = '';
    for (let appointment of appointments) {
        output += `
            <li class="list-group-item d-flex justify-content-between">
                ${appointment.name} on ${appointment.date} at ${appointment.time}
                <span onclick="deleteAppointment('${appointment._id}')" style="cursor:pointer;">🗑️</span>
            </li>`;
    }
    document.getElementById("data").innerHTML = output;
}

// Delete appointment
async function deleteAppointment(id) {
    try {
        // Delete from crudcrud
        await axios.delete(`${API_ENDPOINT}/${id}`);

        // Delete from local storage
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments = appointments.filter(app => app._id !== id);
        localStorage.setItem("appointments", JSON.stringify(appointments));

        displayAppointments();
    } catch (error) {
        console.error("Error deleting appointment:", error.message);
    }
}

// Initial load
window.onload = displayAppointments;
