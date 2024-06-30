function validarRut() {
    const rut = document.getElementById("rut").value;
    const rutPattern = /\d{7,8}-[\d|kK]{1}/;
    if (!rutPattern.test(rut)) {
        document.getElementById("rut-error").innerHTML = "RUT inválido";
    } else {
        document.getElementById("rut-error").innerHTML = "";
    }
}

function validarNombre() {
    const nombre = document.getElementById("nombre").value;
    if (nombre.length < 3) {
        document.getElementById("nombre-error").innerHTML = "Nombre debe tener al menos 3 letras";
    } else {
        document.getElementById("nombre-error").innerHTML = "";
    }
}

function validarApellidos() {
    const apellidos = document.getElementById("apellidos").value;
    if (apellidos.length < 3) {
        document.getElementById("apellidos-error").innerHTML = "Apellidos deben tener al menos 3 letras";
    } else {
        document.getElementById("apellidos-error").innerHTML = "";
    }
}

function validarDireccion() {
    const direccion = document.getElementById("direccion").value;
    if (direccion.length < 6) {
        document.getElementById("direccion-error").innerHTML = "Dirección debe tener al menos 6 letras";
    } else {
        document.getElementById("direccion-error").innerHTML = "";
    }
}

function validarNumTarjeta() {
    const numTarjeta = document.getElementById("num-tarjeta").value;
    const numTarjetaPattern = /\d{16}/;
    if (!numTarjetaPattern.test(numTarjeta)) {
        document.getElementById("num-tarjeta-error").innerHTML = "Número de tarjeta debe ser de 16 dígitos";
    } else {
        document.getElementById("num-tarjeta-error").innerHTML = "";
    }
}

function validarCvv() {
    const cvv = document.getElementById("cvv").value;
    const cvvPattern = /\d{3}/;
    if (!cvvPattern.test(cvv)) {
        document.getElementById("cvv-error").innerHTML = "CVV debe ser de 3 dígitos";
    } else {
        document.getElementById("cvv-error").innerHTML = "";
    }
}

function validarFormulario() {
    validarRut();
    validarNombre();
    validarApellidos();
    validarDireccion();
    validarNumTarjeta();
    validarCvv();
}

// Llamada a la función de validación al cambiar el valor de cualquier campo
document.getElementById("rut").addEventListener("input", validarFormulario);
document.getElementById("nombre").addEventListener("input", validarFormulario);
document.getElementById("apellidos").addEventListener("input", validarFormulario);
document.getElementById("direccion").addEventListener("input", validarFormulario);
document.getElementById("num-tarjeta").addEventListener("input", validarFormulario);
document.getElementById("cvv").addEventListener("input", validarFormulario);