/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function mostrarFormularioReservacion() {
    var tipoReservacion = document.getElementById("tipo-reservacion").value;
    var computoContainer = document.getElementById("computo-container");
    var mesaContainer = document.getElementById("mesa-container");

    if (tipoReservacion === "computo") {
        computoContainer.style.display = "block";
        mesaContainer.style.display = "none";
    } else if (tipoReservacion === "mesa") {
        computoContainer.style.display = "none";
        mesaContainer.style.display = "block";
    }
}
        
function calcularTotal(event) {
    event.preventDefault();

    var tipoReservacion = document.getElementById("tipo-reservacion").value;
    var total = 0;

    if (tipoReservacion === "computo") {
        var tiempoReservacion = parseFloat(document.getElementById("tiempo-computo").value);
        total = calcularTotalComputo(tiempoReservacion);
    } else if (tipoReservacion === "mesa") {
        var cantidadPersonas = parseInt(document.getElementById("cantidad-personas").value);
        total = calcularTotalMesa(cantidadPersonas);
    }

    document.getElementById("total").value = "$" + total.toFixed(2);
}

function calcularTotalComputo(tiempo) {
    var costoHora = 12;
    var costoMediaHora = 6;

    if (tiempo <= 1) {
        return costoHora * tiempo;
    } else {
        var horasCompletas = Math.floor(tiempo);
        var minutosAdicionales = tiempo % 1;

        var costoHorasCompletas = costoHora * horasCompletas;
        var costoMinutosAdicionales = costoMediaHora * Math.ceil(minutosAdicionales * 2);

        return costoHorasCompletas + costoMinutosAdicionales;
    }
}

function calcularTotalMesa(cantidadPersonas) {
    var costoPorPersona = 50;
    var costoPorPersonaAdicional = 10;

    if (cantidadPersonas <= 1) {
        return costoPorPersona;
    } else {
        var costoTotal = costoPorPersona + (costoPorPersonaAdicional * (cantidadPersonas - 1));
        return costoTotal;
    }
}