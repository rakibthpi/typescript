{
    // interface

    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }

    const user1: User1 = {
        name: "rakib hosen",
        age: 2015421214
    }

    interface Help extends User2 {
        life: string
    }

    const help2: Help = {
        name: "Shila",
        age: 18,
        life: "Please my life support help you"
    }


    // js --> Object , array --> object function -> object 

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }
    const roll1: Roll1 = [12, 33, 43, 15];

    interface Result2 {
        (num1: number, num2: number): number;
    }

    type Result = (num1: number, num2: number) => number;
    const result: Result2 = (num1, num2) => num1 + num2;



}