function toggleCard(card) {
    card.classList.toggle("clicked");
}



function toggleCard(card) {
   
    card.classList.toggle("expanded");
}



const carruselInner = document.querySelector('.carrusel-inner');
const pasos = document.querySelectorAll('.paso');
let currentIndex = 0;

function mostrarPaso(index) {
    const offset = -index * 300; 
    carruselInner.style.transform = `translateY(${offset}px)`;
}

function siguientePaso() {
    currentIndex = (currentIndex + 1) % pasos.length; 
    mostrarPaso(currentIndex);
}


setInterval(siguientePaso, 3000);