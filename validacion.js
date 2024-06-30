document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('register-form').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        var nameError = document.getElementById('name-error');
        var emailError = document.getElementById('email-error');
        var passwordError = document.getElementById('password-error');

        var isValid = true;

        // Validación del nombre
        if (name === '') {
            nameError.textContent = 'Por favor ingrese su nombre';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validación del correo electrónico
        if (email === '') {
            emailError.textContent = 'Por favor ingrese su correo electrónico';
            isValid = false;
        } else {
            // Utiliza una expresión regular para validar el formato del correo electrónico
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                emailError.textContent = 'Por favor ingrese un correo electrónico válido';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
        }

        // Validación de la contraseña
        if (password === '') {
            passwordError.textContent = 'Por favor ingrese su contraseña';
            isValid = false;
        } else {
            // Validación de la longitud mínima de la contraseña
            if (password.length < 6) {
                passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }
        }

        // Si alguno de los campos no es válido, evita que se envíe el formulario
        if (!isValid) {
            event.preventDefault();
        }
    });
});
