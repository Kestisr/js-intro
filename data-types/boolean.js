/*
BOOLEAN - logine reiksme


Galimos reiksmes:
- true
- false

Loginiai operatoriai:
- && (and)
- || (or)
- ! (invert)

*/


const arSninga = true;
const arLyja = false;

const dabartineTemp = -1;
const siltaNuoTemp = 20;

const arSilta = false;

const vardas = '';

const arNurodytasVardas = false;

console.clear();

// SPORTAS
// varzybos vyksta tik dienos metu
// varzybos vyksta tik jei turime bent 2 komandos


const arDiena = false;
const arYraDviKomandos = true;

// varzybos vyksta kai tenkinamos VISOS salygos

const arVykstaVarzybos = arDiena && arYraDviKomandos;
console.log('Varzybos', arVykstaVarzybos);

// KERMOSIUS
// - vaikas noretu gaidelio
// - vaikas noretu lazdeles
// - vaikas noretu grybuko

const arTuriGaidelio = false;
const arTuriLazdeles = true;
const arTuriGrybuko = true;

//Saldaini gauna, kai tenkina bent viena salyga
const arVaikasGausSaldaini = arTuriGaidelio || arTuriGrybuko || arTuriLazdeles;
console.log('Kermosius:', arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

console.log();

console.log(!true);

console.log(!'Labas');
console.log(!'');
console.log(!!-5);
console.log(!!0);