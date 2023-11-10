"use strict";
// normal function
// learning function
// arrow function
function adding(number1, number2) {
    return number1 + number2;
}
adding(10, 33);
const arrFunction = (num1 = 33, num2 = 11) => { let number = num1 + num2; };
const poorUser = {
    name: "rakib",
    balance: 199,
    addBalance(balance) {
        return `My new balance is :${this.balance + balance}`;
    }
};
const arr = [12, 4, 6];
const arrStore = arr.map((elem) => elem * elem);
// Spread Operator 
const firstarr = ['rakib', 'rasel', 'rana'];
const secondarr = ['arifa', 'momita', 'sharmin'];
firstarr.push(...secondarr);
console.log(secondarr);
// object spread operator 
const objspread1 = {
    typescriptName: "mejba",
    nextName: "shiraj",
    reduxtName: "mir"
};
const objspread2 = {
    prismaName: "sanjid",
    reactnativeName: "sakib",
    dbmsName: "rakib"
};
const objectList = Object.assign(Object.assign({}, objspread1), objspread2);
// Rest operator lerning 
const greetfriend = (...friends) => {
    friends.forEach((friend) => console.log(`hi ${friend} `));
};
greetfriend('rakib', 'reasel', 'rana');
const student1 = {
    name: 'Rakib hosen',
    age: 85,
    gender: 'male',
    contactNo: '01518496721',
    address: 'dinajpur',
};
const student2 = {
    name: 'Rakib hosen',
    age: 85,
    gender: 'male',
    contactNo: '01518496721',
    email: "rakib@gmail.com",
    address: 'dinajpur',
};
const n1 = 55545;
const n2 = 546;
const added = (n1, n2) => n1 + n2;
const newDeveloper = 'onlyHtml';
const user1 = {
    name: 'rakib',
    email: "rakib@gmail.com",
    gender: 'male',
    bloodGroup: 'A+'
};
const devlopers = {
    skill: ['Html', 'css'],
    designation1: 'FrondendDeveloper',
    designation2: 'fullstackDeveloper'
};
