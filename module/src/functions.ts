// normal function
// learning function
// arrow function


function adding(number1: number, number2: number) {
    return number1 + number2;
}

adding(10, 33)

const arrFunction = (num1: number = 33, num2: number = 11) => { let number: number = num1 + num2 }

const poorUser = {
    name: "rakib",
    balance: 199,
    addBalance(balance: number): string {
        return `My new balance is :${this.balance + balance}`;
    }
}

const arr: number[] = [12, 4, 6];

const arrStore: number[] = arr.map((elem: number): number => elem * elem)


// Spread Operator 
const firstarr: string[] = ['rakib', 'rasel', 'rana'];
const secondarr: string[] = ['arifa', 'momita', 'sharmin'];

firstarr.push(...secondarr)

console.log(secondarr);

// object spread operator 

const objspread1: {
    typescriptName: string;
    nextName: string;
    reduxtName: string;
} = {
    typescriptName: "mejba",
    nextName: "shiraj",
    reduxtName: "mir"
}

const objspread2: {
    prismaName: string;
    reactnativeName: string;
    dbmsName: string;
} = {
    prismaName: "sanjid",
    reactnativeName: "sakib",
    dbmsName: "rakib"
}

const objectList = {
    ...objspread1,
    ...objspread2
}


// Rest operator lerning 
const greetfriend = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi ${friend} `))
}

greetfriend('rakib', 'reasel', 'rana')


// Type alian 

type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    email?: string;
    address: string;
}


const student1: Student = {
    name: 'Rakib hosen',
    age: 85,
    gender: 'male',
    contactNo: '01518496721',
    address: 'dinajpur',
}

const student2: Student = {
    name: 'Rakib hosen',
    age: 85,
    gender: 'male',
    contactNo: '01518496721',
    email: "rakib@gmail.com",
    address: 'dinajpur',
}

type N1 = number;

const n1: N1 = 55545;
const n2: N1 = 546;

const added = (n1: number, n2: number): number => n1 + n2

// union type 

type FronendDevelopment = "onlyHtml" | "reactjs";
type FullstackDeveloper = "nodejs" | "python";

type Developer = FronendDevelopment | FullstackDeveloper;

const newDeveloper: FronendDevelopment = 'onlyHtml'

type User = {
    name: string;
    email: string;
    gender: 'male' | 'femail';
    bloodGroup: 'A+' | 'B+';
}

const user1: User = {
    name: 'rakib',
    email: "rakib@gmail.com",
    gender: 'male',
    bloodGroup: 'A+'
}


// inersection operation 

type FronendDeveloper = {
    skill: string[];
    designation1: 'FrondendDeveloper'
}
type BackendDeveloper = {
    skill: string[];
    designation2: 'fullstackDeveloper'
}

type Developers = FronendDeveloper & BackendDeveloper;

const devlopers: Developers = {
    skill: ['Html', 'css'],
    designation1: 'FrondendDeveloper',
    designation2: 'fullstackDeveloper'

}




