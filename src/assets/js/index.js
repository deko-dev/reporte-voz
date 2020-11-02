const pFooter = document.querySelector('footer p');

const year = new Date().getFullYear();

pFooter.innerHTML = `&copy; ${year} - Universidad de Cordoba`

const botongrabar = document.getElementById("botongrabar"); // obtenemos las variables que estan en el html 
const botonpausar = document.getElementById("botonpausar"); // obtenemos las variables que estan en el html 
const texto = document.getElementById("texto"); // obtenemos las variables que estan en el html 


let recocimiento = new webkitSpeechRecognition(); //creamos un objeto para el reconocimiento de voz
recocimiento.lang = "es-ES";
recocimiento.continuous = true;
recocimiento.interimResults = false;

recocimiento.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript; // aqui esta la frase 
    texto.value += frase;
}
recocimiento.onend = (event) => {

}

botongrabar.addEventListener("click", () => {
    recocimiento.start();
});

botonpausar.addEventListener("click", () => {
    recocimiento.abort();
});