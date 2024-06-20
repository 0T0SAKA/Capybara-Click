let contador = 0;

function incrementarContador() {
contador++;
document.getElementById('click-count').innerText = contador;

}   

document.addEventListener("DOMContentLoaded", function() {
    let contador = 0;
    const imagem = document.getElementById('personImage');

    function pularImagem() {
        contador++;
        const deslocamento = contador % 2 === 0 ? 10 : -10; 
        imagem.style.transform = `translateX(${deslocamento}px)`;
    }

    imagem.addEventListener('click', pularImagem);
});
