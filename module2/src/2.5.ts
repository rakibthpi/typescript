{
    // function with generics 
    const createArry = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    createArrayWithGeneric<string>("Rangladesh is a beautiful country");


    //Object 
    interface User { id: number; name: string };
    const resGenericObj = createArrayWithGeneric<User>({
        id: 322,
        name: "rakib"
    })


    const createWithTuple = <T, S>(param1: T, param2: S): [T, S] => {
        return [param1, param2]
    }

    const result = createWithTuple<string, number>('Bangladesh', 1222);
    const result1 = createWithTuple('Bangladesh', 'Tmi asbe bole');



    const nextLevel = <T>(student: T) => {
        const course = "Next Level programming language";

        return {
            ...student,
            course
        }
    }

    const nextLevelValue = nextLevel({ id: 12, name: "Hello Programmer", email: "rakibhosen@gmail.com" })

    console.log(nextLevelValue)








}
