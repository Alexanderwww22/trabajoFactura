let subtotalGeneral = 0; 

document.getElementById("btnAgregarProducto").addEventListener("click", agregarFila);

function calcularSubtotal(cantidadProducto, precioProducto) {  
    return cantidadProducto * precioProducto;
}

function calcularIVA(subtotal) {     
    return subtotal * 0.15; 
}

function calcularTotalesFinales(subtotalFila) {  
    subtotalGeneral += subtotalFila;

    let ivaTotal = calcularIVA(subtotalGeneral); 
    let totalFinal = subtotalGeneral + ivaTotal;

    document.getElementById("subtotalFinal").innerText = "Subtotal: " + "$" + subtotalGeneral; 
    document.getElementById("impuesto").innerText = "IVA: " + "$" + ivaTotal; 
    document.getElementById("totalFinal").innerText = "Total: " + "$" + totalFinal; 
}

function agregarFila() {  
    const nombreProducto = document.getElementById("producto").value; 
    const cantidadProducto = parseFloat(document.getElementById("cantidad").value);  
    const precioProducto = parseFloat(document.getElementById("precio").value); 

    let subtotal = calcularSubtotal(cantidadProducto, precioProducto); 

    const filaNueva = document.createElement("tr"); 
    filaNueva.innerHTML = `  
        <td>${nombreProducto}</td>
        <td>${cantidadProducto}</td>
        <td>$${precioProducto}</td>
        <td>$${subtotal}</td>
    `;

    document.getElementById("detalleFactura").appendChild(filaNueva);

    calcularTotalesFinales(subtotal);

}