document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Basic validation
        if (password !== confirmPassword) {
            alert('Las contraseñas no son iguales!');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        // You can add more complex validation here (e.g., email format, username availability)

        // If all validation passes, you would typically send the data to a server
        alert('Te Registraste Correctamente');
        console.log('Username:', username);
        console.log('Email:', email);
        // In a real application, you would send this data to a backend API
    });
});