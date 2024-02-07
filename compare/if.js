/*
IF - reiksmiu palyginimas

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} else {} ...
if () {} else if () {} else {} ... {}

Palyginimo operatoriai:
- visi: >,<,>=,<=,==,===,!=,!==;
- naudotini: >,<,>=,<=,==,===,
- nenaudotini: ==,!=;


*/

const profesija = 'Studentas';
const amzius = 22;
const amziausLimitas = 21;

console.log('START');

if (amzius >= amziausLimitas) {
    console.log(profesija + ' Ko noresi? ');
} else {
    console.log(profesija + ' Sry ... Per mazai metuku :D');
}

let msg = profesija + ' eina i barą...';

if (amzius >= amziausLimitas) {
    msg = profesija + ' Tai ko noresi uzsisakyti?';
} else {
    msg = profesija + ' ... Tu gi vistiek neturi pinigu...';
}

console.log(msg);

console.log('END');


console.clear();

const win = 'vista';
let msgWin = 'Tu neturi Windowsu???';

/*
if (win === '95') {
    msgWin = ('Windows 95');
} else {
    msgWin = 'Neatpazinta OS...';
}
*/

/*
if (win === '95') {
    msgWin = ('Windows 95');
} else if (win === '98') {
    msgWin = 'Windows 98';
}
*/

if (win === '95') {
    msgWin = 'Windows 95';
} else if (win === '98') {
    msgWin = 'Windows 98';
} else if (win === '98') {
    msgWin = 'Windows 98';
} else if (win === 'xp') {
    msgWin = 'Windows XP';
} else if (win === 'vista') {
    msgWin = 'Windows Vista';
} else {
    msgWin = 'Neatpazinta OS sistema';
}

console.log(msgWin);

console.clear();

if ('4' == 4) {
    console.log('Taip');
} else {
    console.log('Ne');
}
if ('4' === 4) {
    console.log('Taip');
} else {
    console.log('Ne');
}

let a = 7;
const b = 5;
let msgAB = 'Default...';
a += 1;

if (a = b) {
    msgAB = 'Lygus';
} else {
    msgAB = 'Skirtingi';
}

console.log(msgAB, a, b);

console.clear();

// code nesting


const diena = 2;
// iki 11 val - pusryciu meniu
// iki 16 val - pusryciu meniu
// Po 16 val - pusryciu meniu

const laikas = 17;


if (diena === 1) {
    if (laikas < 11) {
        console.log('Pirmadienio meniu: rytas');
    } else if (laikas < 16) console.log(
        'Pirmadienio meniu: diena');
} else {
    if (laikas < 11) {
        console.log('Standartinis meniu: rytas');
    } else if (laikas < 16) {
        console.log('Standartinis meniu: diena')
    } else {
        console.log('Standartinis meniu: vakaras');
    }
}

if (diena === 1) {
    if (laikas < 11) {
        console.log('Pirmos menesio dienos meniu: rytas');
    } else if (laikas < 16) {
        console.log('Pirmos menesio dienos meniu: diena');
    } else {
        console.log('Pirmos menesio dienos meniu: vakaras');
    }
} else if (diena === 24 || diena === 25) {
    console.log('Kaledinis meniu');
} else {
    if (laikas < 11) {
        console.log('Standartinis meniu: rytas');
    } else if (laikas < 16) {
        console.log('Standartinis meniu: diena');
    } else {
        console.log('Standartinis meniu: vakaras');
    }
}   
