{

    const age: number = 13;

    // if (age >= 18) {
    //     console.log("adult")
    // }
    // else {
    //     console.log("not adult")
    // }

    const aduls = age >= 17 ? 'adult' : 'not adult'
    // console.log(aduls);


    const IsAuthticated = " ";

    const result1 = IsAuthticated ?? "guest"
    const result2 = IsAuthticated ? IsAuthticated : "Guest"

    console.log({ result1 }, { result2 })

    type Address = {
        name: string;
        address: {
            village: string;
            addss: string;
            upozila: "birol";
            permanentaddress?: string;
        }
    }

    const address: Address = {
        name: "rakib hosen",
        address: {
            village: "sakoir",
            addss: "dinajpur, birol",
            upozila: "birol"
        }
    }

    const permanentaddress = address.address.permanentaddress ?? "rakib rakib";
    console.log(permanentaddress)



    const nullFunction = (value: number | null) => {
        if (value) {
            // console.log(typeof value)
            console.log("not null value")
        }
        else {
            console.log("null value")
        }
    }

    nullFunction(null)

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const converterSpeed = (value * 1000) / 3600;
            // console.log(`The speed is ${converterSpeed} ms^-1`);

        }
        if (typeof value === "string") {
            const valueInNumber = value.split(" ")
            console.log(valueInNumber)
        }
    }


    getSpeedInMeterPerSecond(`1000 ms^-1`)




}