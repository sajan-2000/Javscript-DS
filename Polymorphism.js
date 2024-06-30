class Animal {
    speak() {
        console.log("The animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat Meows");
    }
}

function animalSpeak(animal) {
    animal.speak();
}

let animal = new Animal();
let myDog = new Dog();
let myCat = new Cat();

animalSpeak(animal);
animalSpeak(myDog);
animalSpeak(myCat);