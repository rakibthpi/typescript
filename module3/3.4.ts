{
    // instanceof guard 
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I am making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log("dog sound area ")
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMeaw() {
            console.log("i am mewaing");
        }
    }

    const dog = new Dog("Dog Vai ", "ghew ghew")
    const cat = new Cat("Cat Vai ", "Meaw meaw")



    //
}