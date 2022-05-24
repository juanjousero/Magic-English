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

// Definimos otras variable de interés
const vocabulary = [
    {'no obstante': 'notwithstanding'},
    {'congestionado': 'stuffy'},
    {'desalinado': 'scruffy'},
    {'tambalearse': 'wooble'},
    {'nervioso': 'worked up'},
    {'propenso': 'prone'},
    {'trabajo de campo': 'fieldwork'},
    {'aprecio': 'esteem'},
    {'autoestima': 'self-esteem'},
    {'por lo tanto': 'hence'},
    {'temblar': 'shiver'},
    {'hacer algo que estaba planeado': 'go ahead'},
    {'superar la verguenza de algo': 'live it down'},
    {'perseguir': 'chase'},
    {'descubierto bancareo': 'overdraft'},
    {'alentar': 'boost'},
    {'muerte': 'demise'},
    {'cerciorarse': 'ascertain'},
    {'descarado': 'blatant'},
    {'cernirse': 'hover'},
    {'desecandenar': 'trigger'},
    {'engreido': 'conceited'},
    {'conceder': 'grant'},
    {'euforico': 'exhilarated'},
    {'entusiasta': 'eager'},
    {'perspicaz': 'perceptive'},
    {'hacer referencia a': 'refer to'},
    {'en lugar de alguien': 'in someones stead'},
    {'puesto que': 'inasmuch'},
    {'conjuntamente': 'conjointly'},
    {'retorcerse': 'wriggle'},
    {'superar': 'endure'},
    {'vivaz': 'lively'},
    {'confundir': 'confuse'},
    {'moraton': 'bruise'},
    {'de parte de': 'on behalf'},
    {'encorvado': 'bowed'},
    {'entrometido': 'nosy'},
    {'escalera': 'staircase'},
    {'espeso': 'thick'},
    {'feliz': 'blissful'},
    {'humo': 'fume'},
    {'jadear': 'puff'},
    {'metomentodo': 'busybody'},
    {'monotono': 'drab'},
    {'monumento': 'landmark'},
    {'despedir': 'sack'},
    {'innumerables': 'countless'},
    {'paso de cebra': 'crosswalk'},
    {'peaton': 'pedestrian'},
    {'peluca': 'wig'},
    {'presumir': 'show off'},
    {'rigido': 'stiff'},
    {'rogar': 'beg'},
    {'justificar': 'account for'},
    {'viabilidad': 'feasibility'},
    {'sala de hospital': 'ward'},
    {'cintura': 'waist'},
    {'dolorido': 'aching'},
    {'representar': 'depict'},
    {'beneficiarse': 'profit'},
    {'tieso': 'uptight'},
    {'sonreir': 'grin'},
    {'ganarte la vida': 'earn a living'},
    {'tabla de cortar': 'cutting board'},
    {'candidato': 'applicant'},
    {'pasadizo': 'passeageway'},
    {'tararear': 'hum'},
    {'atraer': 'appeal'},
    {'dolar': 'buck'},
    {'novia': 'bride'},
    {'rueda': 'wheel'},
    {'estrecho': 'narrow'},
    {'retroceder': 'flinch'},
    {'irregular': 'fitful'},
    {'repelente': 'obnoxious'},
    {'fluidamente': 'smoothly'},
    {'carbon': 'coal'},
    {'materia': 'matter'},
    {'banco': 'bench'},
    {'candidato': 'nominee'},
    {'dirigir': 'lead'},
    {'formarse': 'educate'},
    {'aprovechar': 'take advantage of'},
    {'reducir': 'lessen'},
    {'reunion': 'gathering'},
    {'trazar': 'chart'},
    {'frotar': 'rub off'},
    {'accesible': 'approachable'},
    {'mueca': 'grimace'},
    {'tener en cuenta': 'bear in mind'},
    {'cadera': 'hip'},
    {'remordimiento': 'remorse'},
    {'punado': 'clump'},
    {'esperanza de vida': 'life expectancy'},
    {'irritante': 'nagging'},
    {'resbalarse': 'slide off'},
    {'sadico': 'sadistic'},
    {'seda': 'silk'},
    {'sepulturero': 'undertaker'},
    {'mitad': 'halves'},
    {'postre': 'dessert'},
    {'brincar': 'spring'},
    {'animar': 'enliven'},
    {'aptitud': 'flair'},
    {'asentir': 'nod'},
    {'dirigir': 'steer'},
    {'engloba': 'encompasses'},
    {'escaso': 'scarce'},
    {'alarmante': 'startling'},
    {'confirmar': 'bear out'},
    {'conseguir': 'achieve'},
    {'descabellado': 'far-fetched'},
    {'enfurecido': 'enraged'},
    {'enganoso': 'misleading'},
    {'enjuiciar': 'prosecute'},
    {'idea general': 'gist'},
    {'inquietante': 'unnerving'},
    {'monton': 'heap'},
    {'pertenecer': 'belong'},
    {'pinchar': 'prod'},
    {'repartir': 'share out'},
    {'sin cesar': 'relentlessly'},
    {'sonarse': 'blow'},
    {'incidente': 'incident'},
    {'unido': 'attached'},
    {'desmayarse': 'faint'},
    {'fingir': 'feign'},
    {'conciencia': 'awareness'},
    {'obligatorio': 'compulsory'},
    {'improvisar': 'improvise'},
    {'legal': 'lawful'},
    {'juventud': 'youth'},
    {'moneda': 'currency'},
    {'enganar a alguien para hacer algo': 'deceive'},
    {'entrecerrar los ojos': 'squint up'},
    {'roble': 'oak'},
    {'enchufe': 'plug'},
    {'mision': 'quest'},
    {'hincharse': 'swell'},
    {'azar': 'fate'},
    {'coartada': 'alibi'},
    {'influyente': 'influential'},
    {'inquilino': 'tenant'},
    {'insoportable': 'unbearable'},
    {'investigacion': 'enquiry'},
    {'soportar': 'bear'},
    {'vagar': 'roam'},
    {'vestimenta': 'attire'},
    {'resbaladizo': 'slippery'},
    {'codicioso': 'greedy'}
];

let word = '';
let answer = '';
let usuario = ''
let j = 0;
let i = 3;
let type = '';
const urlFallo = "/Images/Corazon negro.png";

const gameButton = document.getElementById('gameButton');
const firstHeart = document.getElementById('firstHeart');
const secondHeart = document.getElementById('secondHeart');
const thirdHeart = document.getElementById('thirdHeart');



// Función que toma el nombre de usuario y lo printa en la página del juego
function userName() {
    usuario = document.getElementById('user').value;
    document.getElementById('userVariable').innerHTML = `Good luck, ${usuario}!!`;
    document.getElementById('userVariable').style.marginLeft = "2%";
    document.getElementById('userVariable').style.fontSize = "20px";
    document.getElementById('userVariable').style.color = "#DEE0D3";
    return usuario;
};


// Fin del juego, se muestra la pantalla de puntuación
function finalScreen () {
    headerGame.style.display = 'none';
    mainGame.style.display = 'none';
    footerGame.style.display = 'none';

    headerFinal.style.display = 'flex';
    mainFinal.style.display = 'flex';
    footerFinalPage.style.display = 'flex';

    console.log(usuario);
    document.getElementById('finalTitle').innerHTML = `Bien hecho ${usuario}!`;
    if (j == 0) {
        document.getElementById('finalPunctuation').innerHTML = `Has acertado ${j} palabras, más estudiar y menos telefonito, que estás todo el día con el telefonito en la mano`;    
    } else if (j == 1 || j == 2) {
        document.getElementById('finalPunctuation').innerHTML = `Has acertado ${j} palabras, si estudiaras la mitad de tiempo que pasas con el yutube ese...`;
    } else {
        document.getElementById('finalPunctuation').innerHTML = `Has acertado ${j} palabras, crack, figura`;
    }
};

// Función que genera una palabra aleatoriamente y la muestra en español para adivinarla en inglés
function generateSpanishWord () {
    let index = Math.floor(Math.random()*vocabulary.length);
    word = Object.values(vocabulary[index]);
    wordSolution = Object.keys(vocabulary[index]);
    type = 'spanish';
    document.getElementById('questionH2').innerHTML = `Cómo se dice ${wordSolution} en inglés?`;
    return [word, wordSolution, index, type];
};

// Función que genera una palabra aletoriamente y la muestra en inglés para adivinarla en español
function generateEnglishWord () {
    let index = Math.floor(Math.random()*vocabulary.length);
    word = Object.values(vocabulary[index]);
    wordSolution = Object.keys(vocabulary[index]);
    type = 'english';
    document.getElementById('questionH2').innerHTML = `How do you say ${word} in Spanish?`;
    return [word, wordSolution, index, type];
};

// Función que comprueba si la palabra es correcta
function checkWord(worS, wor, ans) {
    if (ans == worS || ans == wor) {
        j += 1;
        document.getElementById('puntuacion').innerHTML = `Puntuación: ${j}`;
        return j;
    } else {
        i -= 1;
        document.getElementById('respuestaCorrecta').innerHTML = `PD: ${worS} es ${wor}, apunta anda, apunta`;
        if (i == 2) {
            firstHeart.src = urlFallo;
        } else if (i == 1) {
            secondHeart.src = urlFallo;
        } else if (i == 0) {
            thirdHeart.src = urlFallo;
            finalScreen();
        }
        return i;
    };
};

// Función que genera una pista sobre la palabra que ha tocado
function deleteHint(){
    document.getElementById('pista').innerHTML = '';
};

function generateHint() {
    let wordHint = String(word).toUpperCase();
    let wordSolutionHint = String(wordSolution).toUpperCase();
    if (type == 'spanish') {
        document.getElementById('pista').innerHTML = `Pistilla: la letra por la que empieza la palabra es ${wordHint[0]}`;
    } else {
        document.getElementById('pista').innerHTML = `Pistilla: la letra por la que empieza la palabra es ${wordSolutionHint[0]}`;
    }
    setTimeout(deleteHint, 4000);
};

// Función que lee el valor de la respuesta
function deleteAnswer() {
    document.getElementById('answer').value = '';
}

function response () {
    answer = document.getElementById('answer').value.toLowerCase();
    checkWord(wordSolution, word, answer);
    setTimeout(deleteAnswer, 100);
    return i;
};

// Declaramos la función que cambia de página principal a página de juego
function changeStartToGame () {
    headerStart.style.display = 'none';
    mainStart.style.display = 'none';
    footerStart.style.display = 'none';


    headerGame.style.display = 'flex';
    mainGame.style.display = 'flex';
    footerGame.style.display = 'flex';

    userName();
};

// Función que limpia el campo de respuestas
function cleanAnswer() {
    document.getElementById('answer').innerHTML = 'Test';
}

// Función que pronuncia la palabra que hay que adivinar
function readWord() {
    let synth = window.speechSynthesis;
    const speaker = document.getElementById('speaker');
    
    
    
    
    
    speechSynthesis.speak(word);
}