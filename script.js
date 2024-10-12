// Función para mostrar la ventanita flotante
function showInfo(event) {
    // Crear el div de la ventana flotante
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');
    infoBox.innerHTML = `
        <p><strong>Edad:</strong> 16 años</p>
        <p><strong>Peso:</strong> 150 lb</p>
        <p><strong>Tamaño:</strong> 1.80 m</p>
        <p><strong>Nacionalidad:</strong> Guatemalteco</p>
    `;

    // Posicionar la ventana flotante cerca del puntero del mouse
    infoBox.style.left = `${event.pageX + 10}px`;
    infoBox.style.top = `${event.pageY + 10}px`;

    // Agregar el div al cuerpo del documento
    document.body.appendChild(infoBox);

    // Almacenar el elemento para eliminarlo cuando se mueva el mouse
    event.target.infoBox = infoBox;
}

// Función para ocultar la ventanita flotante
function hideInfo(event) {
    if (event.target.infoBox) {
        document.body.removeChild(event.target.infoBox);
        event.target.infoBox = null;
    }
}

// Añadir los eventos para mostrar y ocultar la ventanita flotante
document.querySelector('h1').addEventListener('mouseover', showInfo);
document.querySelector('h1').addEventListener('mouseout', hideInfo);


