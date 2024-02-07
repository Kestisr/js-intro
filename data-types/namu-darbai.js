

const vardas = true;
const pavarde = true;
const telNumeris = true;
const email = false;
const adresas = true;


const uzklausosSiuntimas = vardas && pavarde && telNumeris && email || adresas;
console.log('Išsiųsta:', uzklausosSiuntimas);


const uzklausosSiuntimas1 = vardas && pavarde && telNumeris || email || adresas;
console.log('Išsiųsta1:', uzklausosSiuntimas1);


const uzklausosSiuntimas2 = vardas && pavarde || telNumeris || email || adresas;
console.log('Išsiųsta2:', uzklausosSiuntimas2);


const uzklausosSiuntimas3 = vardas && pavarde || telNumeris || email && adresas;
console.log('Išsiųsta3:', uzklausosSiuntimas3);


const uzklausosSiuntimas4 = vardas && pavarde || telNumeris && email && adresas;
console.log('Išsiųsta4:', uzklausosSiuntimas4);


const uzklausosSiuntimas5 = vardas && pavarde || telNumeris && email || adresas;
console.log('Išsiųsta5:', uzklausosSiuntimas5);

const uzklausosSiuntimas6 = vardas && pavarde && telNumeris || email && adresas;
console.log('Išsiųsta6:', uzklausosSiuntimas6);

const uzklausosSiuntimas7 = vardas || pavarde || telNumeris || email && adresas;
console.log('Išsiųsta7:', uzklausosSiuntimas7);

const uzklausosSiuntimas8 = vardas || pavarde || telNumeris && email && adresas;
console.log('Išsiųsta8:', uzklausosSiuntimas8);

const uzklausosSiuntima9 = vardas || pavarde && telNumeris && email && adresas;
console.log('Išsiųsta9:', uzklausosSiuntima9);

const uzklausosSiuntimas10 = vardas || pavarde && telNumeris && email || adresas;
console.log('Išsiųsta10:', uzklausosSiuntimas10);

const uzklausosSiuntimas11 = vardas || pavarde && telNumeris || email || adresas;
console.log('Išsiųsta11:', uzklausosSiuntimas11);

const uzklausosSiuntimas12 = vardas || pavarde && telNumeris || email && adresas;
console.log('Išsiųsta12:', uzklausosSiuntimas12);

const uzklausosSiuntimas13 = vardas || pavarde || telNumeris && email && adresas;
console.log('Išsiųsta13:', uzklausosSiuntimas13);

const uzklausosSiuntimas14 = vardas && pavarde && telNumeris && email && adresas;
console.log('Išsiųsta14:', uzklausosSiuntimas14);
