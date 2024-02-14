
let a = 21;

let b = 12;

let c = 7;

let ab = a + b;

let abc = a + b + c;

ab = ab + c;



console.log(abc);
console.log('ab = ', ab);

ab -= 30;

ab *= 2;

ab /= 4;

ab %= 3;

ab **= 2;

console.log(ab);

//------------------------------------------------------------------------

const text = 'pomidoras';

const text1 = text[0].toUpperCase();

console.log(text1);

//-------------------------------------------------------------------------

const profesija = 'Barmenas';
let klientas = '';
const amzius = 11;
const amziausLimitas = 21;
const aa = 'studentas';
const bb = 'ponas';
const cc = 'senioras';

if (amzius < amziausLimitas) {
    klientas = aa;
} else if (amzius >= amziausLimitas && amzius < 70) {
    klientas = 'ponas';
} else {
    klientas = 'senioras';
}

let msg = '';
if (klientas === aa) {
    msg = profesija + ': ' + aa + ' gal tu keliauk į paskaitas';
} else if (klientas === bb) {
    msg = profesija + ': ' + bb + ' sakykite ko norėtumėte užsakyti';
} else {
    msg = profesija + ': ' + cc + ' man garbė Jus pavaišinti gėrimu';
}

console.log(msg);

//----------------------------------------------------------------------

const mokinioPazymejimas = false;
const mokytojoPazymejimas = false;
const leidimasPraeiti = false;
const neraLeidimo = true;
let leidimas = mokinioPazymejimas || mokytojoPazymejimas || leidimasPraeiti;

let msgMokykla = '';
if (leidimas === true) {
    msgMokykla = 'Praėjimas galimas';
} else {
    msgMokykla = 'Praėjimas uždraustas';
}

console.log(msgMokykla);

console.clear();

const win = '95';

let msgWin = '';

if (win === '95') {
    msgWin = 'Windows 95';
} else if (win === '98') {
    msgWin = 'Windows 98';
} else if (win === 'xp') {
    msgWin = 'Windows XP';
} else if (win === 'vista') {
    msgWin = 'Windows Vista';
} else if (win === '10') {
    msgWin = 'Windows 10';
} else {
    msgWin = 'Neatpazinta OS...';
}

console.log(msgWin);

console.clear();

const kalendorinėDiena = 8;
let savaitesDiena = kalendorinėDiena % 7;
laikas = 10;


if (savaitesDiena <= 1) {
    savaitesDiena = 'Pirmadienis';
} else if (savaitesDiena === 2) {
    savaitesDiena = 'Antradienis';
} else if (savaitesDiena === 3) {
    savaitesDiena = 'Trečiadienis';
} else if (savaitesDiena === 4) {
    savaitesDiena = 'Ketvirtadienis';
} else if (savaitesDiena === 5) {
    savaitesDiena = 'Penktadienis';
} else if (savaitesDiena === 6) {
    savaitesDiena = 'Šeštadienis';
} else {
    savaitesDiena = 'Sekmadienis';
}

let meniuMsg = '1';
const ryto = 'ryto meniu'
const dienos = 'dienos meniu'
const vakaro = 'vakaro meniu'
console.log(meniuMsg, savaitesDiena);

if (savaitesDiena === 'pirmadienis' && laikas < 11) {
    meniuMsg = `${savaitesDiena} +  ${ryto}`;
} else if (savaitesDiena === 'pirmadienis' && laikas < 16) {
    meniuMsg = `${savaitesDiena} +  ${dienos}`;
} else if (savaitesDiena === 'pirmadienis') {
    meniuMsg = `${savaitesDiena} +  ${vakaro}`;
}

console.log(meniuMsg);


console.clear();

const tekstas = 'Multiplikatorius';
const tekstasUpper = tekstas.toUpperCase();
const raide = tekstasUpper[0];

console.log(raide + '.');
const textukas = 'Pomidorinis';
const lower = textukas.toLowerCase();
const upper = textukas.toUpperCase();


console.log(upper);

const firstLetter = textukas[0];
console.log(firstLetter);

const secondLetter = textukas[1];
console.log(secondLetter);

console.clear();

const aaa = {
    a: 10,
    b: 16
}
console.log(aaa);

const aaaCopy = aaa;
console.log(aaaCopy);

aaaCopy.a = 20;

console.log(aaaCopy);
