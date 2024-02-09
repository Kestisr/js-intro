

function betterPrice(amount) {
    // validacijos
    if (typeof amount !== 'number') {
        return 'ERROR: duok skaiciaus tipo reiksme';
    }
    if (amount < 0) {
        return 'ERROR: duok teigiama skaiciu';
    }
    if (amount === Infinity) {
        return 'ERROR: skaicius negali buti Infinity';
    }
    if (isNaN(amount)) {
        return 'ERROR: duok normalu skaiciu';
    }

    // logika
    let result = '';

    if (amount < 100) {
        result = amount + ' Eur';
    } else {
        result = (amount * 0.5) + ' Eur';
    }

    // rezultato validacija
    if (result === '') {
        return 'ERROR: kazkas negerai su logika....';
    }

    // rezultato grazinimas
    return result;
}

console.log(betterPrice(0), '->', '0 Eur');
console.log(betterPrice(10), '->', '10 Eur');
console.log(betterPrice(50), '->', '50 Eur');
console.log(betterPrice(90), '->', '90 Eur');
console.log(betterPrice(99), '->', '99 Eur');
console.log(betterPrice(100), '->', '50 Eur');
console.log(betterPrice(102), '->', '51 Eur');
console.log(betterPrice(200), '->', '100 Eur');
console.log(betterPrice(200.01), '->', '100.00 Eur');

console.log(betterPrice(true), '->', 'ERROR');
console.log(betterPrice('dasfd'), '->', 'ERROR');
console.log(betterPrice(undefined), '->', 'ERROR');
console.log(betterPrice(), '->', 'ERROR');
console.log(betterPrice(betterPrice), '->', 'ERROR');

console.log(betterPrice(-200), '->', 'ERROR');
console.log(betterPrice(Infinity), '->', 'ERROR');
console.log(betterPrice(-Infinity), '->', 'ERROR');
console.log(betterPrice(NaN), '->', 'ERROR');