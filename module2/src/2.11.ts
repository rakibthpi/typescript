{
    //utility types
    //Pick type 
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name = Pick<Person, "name">

    //Omit 
    type ContactInfo = Omit<Person, "name" | "age">

    // Required
    type personRequired = Required<Person>;

    // partial 
    type PersonPartial = Partial<Person>

    // ReadOnly 
    const person1: Person = {
        name: "Rakib Hosen",
        age: 223,
        contactNo: "333"
    }

    // ReadOnly 
    type PersonReadOnly = Readonly<Person>

    const person3: PersonReadOnly = {
        name: "rakib hosen",
        age: 333,
        contactNo: "555"
    }
    // person3.name = "rakib hosen"

    // Record 
    // type MyObj = {
    //     a: string;
    //     b: string;
    // };
    const extraObj: Record<string, undefined> = {}
    type MyObj = Record<string, string>

    const obj1: MyObj = {
        a: "rakib",
        b: "lfjf",
        c: "fldld"
    }



    //
}