{
    // mapped types

    const arrOfNumbers: number[] = [12, 892, 44, 33];
    // const arrOfStrings: string[] = ['12', '892', '44', '33'];

    const arrNumber = arrOfNumbers.map((number) => number.toString())
    console.log(arrNumber);


    // area number 
    // type AreaNumber = {
    //     height: number;
    //     width: number;
    // }


    type AreaAny<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaAny<{ height: string; width: number }> = {
        height: '11',
        width: 22
    }



}