const API_ENDPOINT = "https://crudcrud.com/api/148e9eddefcd4665a89b45ef6880decf/appointments";  // Replace with your endpoint

window.addEventListener("DOMContentLoaded", fetchAndDisplayAppointments);

document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("nameInput").value;
    const date = document.getElementById("dateInput").value;
    const time = document.getElementById("timeInput").value;
    const appointment = { name, date, time };

    try {
        await axios.post(API_ENDPOINT, appointment);
        fetchAndDisplayAppointments();
    } catch (error) {
        console.error("Error adding appointment:", error.message);
    }
});

async function fetchAndDisplayAppointments() {
    try {
        const response = await axios.get(API_ENDPOINT);
        const appointments = response.data;
        let output = '';
        for (let appointment of appointments) {
            output += `
            <div class="card mb-3">
                <div class="card-body">
                    ${appointment.name} on ${appointment.date} at ${appointment.time} 
                    <button onclick="editAppointment('${appointment._id}')" class="btn btn-sm btn-warning ms-2">Edit</button>
                    <button onclick="deleteAppointment('${appointment._id}')" class="btn btn-sm btn-danger">Delete</button>
                </div>
            </div>`;
        }
        document.getElementById("data").innerHTML = output;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

async function editAppointment(id) {
    const appointment = (await axios.get(`${API_ENDPOINT}/${id}`)).data;
    const newName = prompt("Edit Name:", appointment.name);
    const newDate = prompt("Edit Date (YYYY-MM-DD):", appointment.date);
    const newTime = prompt("Edit Time (HH:MM):", appointment.time);

    if (newName && newDate && newTime) {
        try {
            await axios.put(`${API_ENDPOINT}/${id}`, {
                name: newName,
                date: newDate,
                time: newTime
            });
            fetchAndDisplayAppointments();
        } catch (error) {
            console.error("Error editing appointment:", error.message);
        }
    }
}

async function deleteAppointment(id) {
    try {
        await axios.delete(`${API_ENDPOINT}/${id}`);
        fetchAndDisplayAppointments();
    } catch (error) {
        console.error("Error deleting appointment:", error.message);
    }
}
