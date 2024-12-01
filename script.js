let happiness = 100;

function updateStatus() {
    const statusText = document.getElementById('statusText');
    const tamaImage = document.getElementById('tamaImage');

    if (happiness > 75) {
        statusText.textContent = 'Muito Feliz';
        tamaImage.src = 'desenho.png';  // Imagem quando feliz
    } else if (happiness > 50) {
        statusText.textContent = 'Feliz';
        tamaImage.src = 'desenho.png';  // Imagem quando feliz
    } else if (happiness > 25) {
        statusText.textContent = 'Triste';
        tamaImage.src = 'desenho(1).png';  // Imagem quando triste
    } else {
        statusText.textContent = 'Muito Triste';
        tamaImage.src = 'desenho(1).png';  // Imagem quando triste
    }
}

function feed() {
    happiness += 10;
    if (happiness > 100) happiness = 100;
    updateStatus();
}

function clean() {
    happiness += 5;
    if (happiness > 100) happiness = 100;
    updateStatus();
}

function play() {
    happiness += 15;
    if (happiness > 100) happiness = 100;
    updateStatus();
}
