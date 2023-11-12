{

    // type assertion 
    let anything: any;

    anything = "Next Level web Development";

    anything = 3423;

    (anything as number)

    const kgToGm = (value: string | number) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        else {
            return value * 1000;
        }
    }

    const result = kgToGm(1000) as number;
    const result1 = kgToGm('2000') as string;

    console.log({ result }, { result1 })


    type CustomError = {
        message: string
    }

    try {

    }
    catch (error) {
        console.log((error as CustomError).message)
    }








}