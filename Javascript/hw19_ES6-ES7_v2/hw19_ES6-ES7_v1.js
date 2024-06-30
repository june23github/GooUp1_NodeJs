const user = {
    name : 'Linh',
    age: '20',
    gender: 'Male',
    university: 'DUT'
}

const address = {
    city: 'DN',
    district: 'Lien Chieu'
}

const result = {...user, ...address};
console.log(result);

const animal = {
    name: "Lion",
    gender: null,
    weight: null,
    color: 'yellow',    
    isEndangered: false,
  };

function getNewObject(object) {
    let newObject = {}
    for (let [key, value] of Object.entries(object)){
        if (value != null){
            newObject = {...newObject, [key]: value}
        }
    }
    return newObject;
}

console.log(getNewObject(animal));

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`Name: ${this.name}, Age = ${this.age}`);
    }
}

class Student extends Person {
    constructor(id, name, age){
        super(name, age);
        this.id = id;
    }

    get getName(){
        return this.name;
    }

    get getAge(){
        return this.age;
    }

    get getId(){
        return this.id;
    }
    show() {
        console.log(`Id: ${this.id}, Name: ${this.name}, Age = ${this.age}`);
    }
}

const student1 = new Student('102210213', 'Le Hoang Linh', 20);

console.log(student1.getId);
console.log(student1.getName);
console.log(student1.getAge);

student1.show();