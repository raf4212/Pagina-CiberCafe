/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function agregarServicio() {
            var serviciosContainer = document.getElementById('servicios-container');
            var nuevoServicio = document.createElement('div');
            nuevoServicio.innerHTML = `
                <div class="mb-3">
                    <label for="nombre-servicio" class="form-label">Nombre del servicio</label>
                    <input type="text" class="form-control" id="nombre-servicio" placeholder="Nombre del servicio" name="nombre-servicio[]">
                </div>
                <div class="mb-3">
                    <label for="costo-servicio" class="form-label">Costo del servicio</label>
                    <input type="number" class="form-control" id="costo-servicio" placeholder="Costo" name="costo-servicio[]">
                </div>
            `;
            serviciosContainer.appendChild(nuevoServicio);
        }

        function calcularTotal(event) {
            event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            var servicios = document.querySelectorAll('input[name="costo-servicio[]"]');
            var total = 0;

            servicios.forEach(function(servicio) {
                if (servicio.value !== '') {
                    total += parseFloat(servicio.value);
                }
            });

            var totalField = document.getElementById('total');
            totalField.value = total.toFixed(2); // Muestra el total con dos decimales
        }