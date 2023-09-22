const API_ENDPOINT = "https://crudcrud.com/api/148e9eddefcd4665a89b45ef6880decf/appointments";  // Replace with your endpoint

document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("nameInput").value;
    const date = document.getElementById("dateInput").value;
    const time = document.getElementById("timeInput").value;

    const appointment = { name, date, time };

    // Save to local storage
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    
    // Save to cloud
    try {
        await axios.post(API_ENDPOINT, appointment);
    } catch (error) {
        console.error("Error adding appointment to cloud:", error.message);
    }

    // Refresh display
    displayData();
});

function displayData() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let output = '';
    for (let appointment of appointments) {
        output += `
        <div class="card mb-3">
            <div class="card-body">
                ${appointment.name} on ${appointment.date} at ${appointment.time} 
                <button onclick="editAppointment('${appointment.name}')" class="btn btn-sm btn-warning ms-2">Edit</button>
                <button onclick="deleteAppointment('${appointment.name}')" class="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>`;
    }
    document.getElementById("data").innerHTML = output;
}

function editAppointment(name) {
    let newName = prompt("Enter new name:", name);
    if (newName) {
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        let index = appointments.findIndex(app => app.name === name);
        if (index !== -1) {
            appointments[index].name = newName;
            localStorage.setItem("appointments", JSON.stringify(appointments));
            displayData();
        }
    }
}

function deleteAppointment(name) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments = appointments.filter(app => app.name !== name);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    displayData();
}

// Initial data fetch
displayData();
