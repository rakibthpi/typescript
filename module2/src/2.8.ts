{
    // promise
    type PromiseData = { name: string }
    // simulate    
    const createPromise = (): Promise<PromiseData> => {
        return new Promise<PromiseData>((resolve, reject) => {
            const data: PromiseData = { name: "apple" }
            if (data) {
                resolve(data)
            }
            else {
                reject("failed to load data")
            }
        })
    }

    const showData = async (): Promise<PromiseData> => {
        const data: PromiseData = await createPromise();
        return data;
    }

    showData()


    // practice 2 
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }
    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = response.json();
        return data;
    }

    const Createpromise2 = () => {
        return new Promise((resolve, reject) => {
            const data: string = "Bangladesh";
            if (data) {
                resolve(data)
            }
            else {
                reject(data)
            }
        })
    }

    const showData2 = async () => {
        const data2 = await Createpromise2();
        console.log(data2);
    }

    //
}