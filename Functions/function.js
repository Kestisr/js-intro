
/*
FUNCTION - funkcija
Perpanaudojamas logikos blokas
*/
// DRY dont repeat

const a1 = 7;
const a2 = 5;
const a3 = 1 + a1 * 2 + a2 * 3 + 3;
console.log(a3);

const b1 = 12;
const b2 = 17;
const b3 = 1 + b1 * 2 + b2 * 3 + 3;
console.log(b3);

function empty() {
}

const x1 = empty();
console.log(x1);

function boolFalse() {
    return false;
}

const x2 = boolFalse();
console.log(x2);

const x3 = boolFalse();
console.log(x3);

function giveMeNumber() {
    return 42069;
}

const x4 = giveMeNumber();
console.log(x4);

function labas(name) {
    return `Labas, as ${name}`;
}

const x7 = labas('Krabas');
console.log(x7);

const x8 = labas('Jonas');
console.log(x8);

const x9 = labas('Maryte');
console.log(x9);

function dvigubai(number) {
    return number * 2;
}

const x10 = dvigubai(12);
console.log(x10);
console.clear();

// 0 -> 0 Eur
// 10 -> 10 Eur
// 50 -> 50 Eur
// 90 -> 90 Eur
// 99 -> 99 Eur
// 100 -> 50 Eur
// 200 -> 100 Eur

function price(amount) {
    if (amount < 100) {
        return amount + ' Eur';
    } else {
        return 'mokėti: ' + (amount / 2) + ' Eur nuolaida ' + (amount / 2) + ' Eur';
    }
}
console.log(price(0), '->', '0 Eur');
console.log(price(10), '->', '10 Eur');
console.log(price(50), '->', '50 Eur');
console.log(price(90), '->', '90 Eur');
console.log(price(99), '->', '99 Eur');
console.log(price(100), '->', '50 Eur');
console.log(price(102), '->', '51 Eur');
console.log(price(200), '->', '100 Eur');