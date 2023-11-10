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
