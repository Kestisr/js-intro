const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];


for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student);
}

for (const student of students) {
    console.log(`${student.name}: ${student.age}`);
}


const text = 'Pomidoras';
for (const raides of text) {
    console.log(raides);
}