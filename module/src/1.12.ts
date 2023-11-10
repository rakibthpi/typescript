{
    // nullable type 
    const searchName = (value: string | null) => {
        if (typeof value === 'string') {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    }

    searchName(null)


    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const converterSpeed =
                // console.log(`The speed is ${value}`)
        }
    }

    getSpeedInMeterPerSecond(133)

    const throwEror = (msg: string): never => {
        throw new Error(msg);
    }

    throwEror("mushkil se error hogaya");


}