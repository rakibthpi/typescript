"use strict";
var _a;
{
    const age = 13;
    // if (age >= 18) {
    //     console.log("adult")
    // }
    // else {
    //     console.log("not adult")
    // }
    const aduls = age >= 17 ? 'adult' : 'not adult';
    // console.log(aduls);
    const IsAuthticated = " ";
    const result1 = IsAuthticated !== null && IsAuthticated !== void 0 ? IsAuthticated : "guest";
    const result2 = IsAuthticated ? IsAuthticated : "Guest";
    console.log({ result1 }, { result2 });
    const address = {
        name: "rakib hosen",
        address: {
            village: "sakoir",
            addss: "dinajpur, birol",
            upozila: "birol"
        }
    };
    const permanentaddress = (_a = address.address.permanentaddress) !== null && _a !== void 0 ? _a : "rakib rakib";
    console.log(permanentaddress);
    const nullFunction = (value) => {
        if (value) {
            // console.log(typeof value)
            console.log("not null value");
        }
        else {
            console.log("null value");
        }
    };
    nullFunction(null);
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const converterSpeed = (value * 1000) / 3600;
            // console.log(`The speed is ${converterSpeed} ms^-1`);
        }
        if (typeof value === "string") {
            const valueInNumber = value.split(" ");
            console.log(valueInNumber);
        }
    };
    getSpeedInMeterPerSecond(`1000 ms^-1`);
    // tuple 
    const manush = ['Mr. x', 'Ms. y'];
}
