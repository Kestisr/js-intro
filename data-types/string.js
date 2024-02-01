/*
string - tekstas, simbolių grandinėlė

iniciavimo simboliai/budai: vienguba :('), dviguba ("), backtick kabutes


*/


const text1 = 'Kęstas';
const text2 = 'Razgaitis';
const text3 = '"Autoblikas"'
console.log(text1);
console.log(text2);
console.log(text1 + ' ' + text2);


console.clear();

const as = 'Aš turiu ';
const gele = 'tulpe ';
const kuri = 'kuri yra ';
const spalva = 'geltona';
const sakinys = as + gele + kuri + spalva;
console.log(sakinys);

console.clear();
const backtick12 = 'vienguba (\'), dviguba (")';
console.log(backtick12);

const backtickGelytes = `as turiu ${gele} kuri yra ${spalva}`;
console.log(backtickGelytes);

const n1 = 7;
const n2 = 5;
// 7 + 5 = 12;
const pliusas = `${n1} + ${n2} = ${n1 + n2};`;
console.log(pliusas);

console.clear();
// Stai sarasas:
// - pirmas
// - antras
// - trecias

// \r - return
// \n - new line
// \t - tab

const eilutes = 'Stai sarasas:\r\n\
- pirmas\r\n\
- antras\r\n\
- trecias';

console.log(eilutes);
/*

*/




