/*
1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const a = 4;
const b = 6;
const c = 8;

console.log(a, b, c);

const a1 = 'Vardas';
const b1 = 'Pavarde';
const c1 = 'Numeris';

console.log(a1, b1, c1);

console.clear();

/*
Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
*/

const abc = a + b + c;

console.log(abc);

const a1b1c1 = a1 + ' ' + b1 + ' ' + c1;

console.log(a1b1c1);

/*
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą(nurodytą žemiau),
tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama,
išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const a2 = 5;
const b2 = 7;

if (a2 > b2) {
    console.log('pomidoras')
} else {
    console.log('Bandykite kitą kartą')
}


