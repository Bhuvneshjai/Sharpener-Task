document.getElementById('appointmentForm').addEventListener('submit',function(e){
    e.preventDefault();

    // Get Input Values Name
    const name = document.getElementById('username').value;
    const task = document.getElementById('task').value;

    // Create Appointment Objects
    const appointment = {
        name: name,
        task: task
    };

    // Save To Local Storage
    let appointments = JSON.parse(localStorage.getItem('appointments'));
    appointments.push(appointment);

    localStorage.setItem('appointments',JSON.stringify(appointments));

    // Clear Form
    document.getElementById('appointmentForm').reset();

    displayAppointments();
});

function displayAppointments() {
    let appointments = JSON.parse(localStorage.getItem('appointments'));
    let output = '';

    appointments.forEach(function(appointment) {
        output += `<li class="list-group-item">${appointment.name} - ${appointment.task}</li>`;
    });

    document.getElementById('appointmentsList').innerHTML = output;
}

// Display stored appointments on initial load
displayAppointments();