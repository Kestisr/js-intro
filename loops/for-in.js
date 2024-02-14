const student = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(student.name);
console.log(student.age);
console.log(student.isMarried);

const noriuSuzinoti = 'name';

const name = student[noriuSuzinoti];
console.log(name);

const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    price: 300,
}

const carKeys = Object.keys(car);
console.log(carKeys);

for (let i = 0; i < carKeys.length; i++) {
    console.log(i, carKeys[i]);
}

for (const raktas in car) {
    const reikšmė = car[raktas];
    console.log(raktas, reikšmė);
}