class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
    public get_name() {
        return this.name;
    }
    public makeSound(): void {
      console.log("Some generic animal sound");
    }
  }
  
class Dog extends Animal {
    public makeSound(): void {
        console.log("Go Go Go");
    }
}
  
class Cat extends Animal {
    public makeSound(): void {
        console.log("Meow Meow Meow");
    }
}
  
const animals: Animal[] = [new Dog('A'), new Cat('B')];

console.log(animals[0].get_name());

animals.forEach((animal) => {
    animal.makeSound();
});
  