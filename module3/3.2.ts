{
    // oop inheritance 
    class Parent {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }
    const Student1 = new Student('rakib hosen', 33, 'birol dinajpur')
    Student1.getSleep(12)

    // Teacher area start 
    class Teacher extends Parent {

        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass() {
            console.log(`This is your address: ${this.address}`);
        }
    }


    const Teacher1 = new Teacher('rakib hosen', 33, 'birol dinajpur', 'Bsc engneear')
    Teacher1.getSleep(12)



    //
}