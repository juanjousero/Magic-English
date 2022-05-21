//const vocabulary = require('./vocabulary');

// Ocultamos la pantalla inicial y mostramos la pantalla del juego
// Primero asignamos variables a cada gran bloque div
const headerStart = document.getElementById('headerStartPage');
const mainStart = document.getElementById('mainStartPage');
const footerStart = document.getElementById('footerStartPage');

const headerGame = document.getElementById('headerGamePage');
const mainGame = document.getElementById('mainGamePage');
const footerGame = document.getElementById('footerGamePage');

const headerFinal = document.getElementById('headerFinalPage');
const mainFinal = document.getElementById('mainFinalPage');
const footerFinalPage = document.getElementById('footerFinalPage');

let word = '';
let answer = '';
let i = 3;
let j = 0;

// Definimos otras variable de interés
const vocabulary = [
    {guapa : "cute"},
	{alta: "tall"},  
	{rubia: "blonde"}
];


// Función que toma el nombre de usuario y lo printa en la página del juego
function userName() {
    const usuario = document.getElementById('user').value;
    console.log(usuario);
    document.getElementById('userVariable').innerHTML = `Good luck, ${usuario}!!`;
    document.getElementById('userVariable').style.marginLeft = "2%";
    document.getElementById('userVariable').style.fontSize = "20px";
    document.getElementById('userVariable').style.color = "#DEE0D3";

};

// Función que genera una palabra aleatoriamente
function generateWord () {
    let index = Math.floor(Math.random()*vocabulary.length);
    word = Object.values(vocabulary[index]);
    return word;
};

// Función que comprueba si la palabra es correcta
function checkWord(wor, ans) {
    if (ans === wor) {
        j += 1;
        document.getElementById('puntuacion').innerHTML = `Puntuación: ${j}`;
        return j;
    } else {
        i -= 1;
        //document.querySelector('image')[i].src = "../Images/Corazon negro.png";
        console.log('Estoy aquí')
        return i;
    }
}

// Comenzamos el juego
function firstGame() {
    word = '';
    answer = '';
    word = generateWord();
    document.getElementById('questionH2').innerHTML = `How do you say ${word} in Spanish?`;
    let answer = document.getElementById('answer').value;
    const arr = [answer];
    console.log(arr);
    console.log(word);
};

// Empezamos las iteraciones
function secondGame() {
    while (i > 0) {
        word = generateWord();
        document.getElementById('questionH2').innerHTML = `How do you say ${word} in Spanish?`;
        let answer = document.getElementById('answer').value;
        const arr = [answer];
        console.log(arr);
        console.log(word);
    }
    
}

// Declaramos la función que cambia de página principal a página de juego
function changeStartToGame () {
    headerStart.style.display = 'none';
    mainStart.style.display = 'none';
    footerStart.style.display = 'none';


    headerGame.style.display = 'flex';
    mainGame.style.display = 'flex';
    footerGame.style.display = 'flex';

    userName();
    firstGame();
    secondGame();
};

