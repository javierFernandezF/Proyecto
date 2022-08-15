const modal = document.getElementById("modalID");
const boton = document.getElementById("botonID");
const span = document.getElementsByClassName("close") [0];
const pantallaGris = document.getElementById("app")

// Si el usuario toca el botón se abre ventana:

boton.onclick = function() {
    modal.style.display = "block";
    pantallaGris.style.filter =  "grayscale(100%)";

}

// Si el usuario toca x, cierra la ventana

span.onclick = function() {
    modal.style.display = "none";
    pantallaGris.style.filter =  "none";
}


