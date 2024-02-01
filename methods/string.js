

const text = 'Pomidorinis';
const lower = text.toLowerCase();
const upper = text.toUpperCase();


console.log(upper);

const firstLetter = text[0];
console.log(firstLetter);

const secondLetter = text[1];
console.log(secondLetter);

const lastLetter = text[8];
console.log(lastLetter);

const crazyLetter1 = text[2.5];
console.log(crazyLetter1);

// Pomidoras turi 9 raides.

const sakinys = `"${text} turi ${text.length} raides."`;
console.log(sakinys);

const ilgis = `kiek cia simboliu?`.length;
console.log(ilgis);

const name1 = 'Jonas';
const surname1 = `Jonaitis`;
const name2 = `Maryte`;
const surname2 = `Marytaite`;
const name3 = `Petras`;
const surname3 = `Petraitis`;
const name4 = `Ona`;
const surname4 = `Onaite`;

// Vardo Jonas ilgis yra 5 simboliai
// Asmens Jonas Jonaitis inicialai yra J.J.

const uzduotis1 = `Vardo "${name1}" ilgis yra ${name2.length} raides.`;
console.log(uzduotis1);

const uzduotis12 = 'Vardo "' + name1 + '" ilgis yra ' + name2.length + ' raides.';
console.log(uzduotis12);



const uzduotis2 = `Asmens ${name1} ${surname1} inicialai yra ${name1[0]}. ${surname1[0]}.`;
console.log(uzduotis2);