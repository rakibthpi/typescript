{
    // oop - Class 

    class Animale {
        // name: string;
        // species: string;
        // sound: string;

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animale('Bangladesh ali vai', 'dog', 'ghew ghew');
    const cat = new Animale('Persian bhai', 'cat', 'meaw meaw');
    dog.makeSound()





    //
}