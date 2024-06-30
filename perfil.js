// Función para cargar las regiones desde la API
function cargarRegiones() {
    fetch("https://apis.modernizacion.cl/dpa/regiones")
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener las regiones');
            }
            return response.json();
        })
        .then(data => {
            const regionSelect = document.getElementById('region');
            data.forEach(region => {
                const option = document.createElement('option');
                option.value = region.codigo;
                option.textContent = region.nombre;
                regionSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al cargar las regiones:', error);
            document.getElementById('region-error').textContent = 'Error al cargar las regiones';
        });
}

// Función para cargar las comunas de una región seleccionada
function cargarComunas() {
    const regionCode = document.getElementById('region').value;
    const comunasSelect = document.getElementById('comunas');
    comunasSelect.innerHTML = ''; // Limpiar opciones anteriores

    fetch(`https://apis.digital.gob.cl/dpa/comunas?reg_id=${regionCode}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener las comunas');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(comuna => {
                const option = document.createElement('option');
                option.value = comuna.codigo;
                option.textContent = comuna.nombre;
                comunasSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al cargar las comunas:', error);
            document.getElementById('comunas-error').textContent = 'Error al cargar las comunas';
        });
}

// Cargar las regiones al cargar la página
window.onload = cargarRegiones;

