interface Person {
    name: string;
    age?: number;
    [propName: string]: string |number;
}
let tom: Person = {
    name: 'Amay',
    age: 25,
    gender: 'male1'
};
console.log(tom.name,tom.age,tom.gender)