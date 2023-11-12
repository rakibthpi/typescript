"use strict";
{
    // nullable type 
    const searchName = (value) => {
        if (typeof value === 'string') {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const converterSpeed = value * 200;
            // console.log(`The speed is ${value}`)
        }
    };
    getSpeedInMeterPerSecond(133);
    const throwEror = (msg) => {
        throw new Error(msg);
    };
    throwEror("mushkil se error hogaya");
}
