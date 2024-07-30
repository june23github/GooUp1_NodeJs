// function sealed(constructor: Function) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }

function addProperty<T extends { new (...arg: any[]) : {} }>(id: number){
    return function (constructor: T) {
        return class extends constructor {
            id: number = id;
        }
    }
}

  
@addProperty(23)
class Student {
    name: string;   
    constructor(name: string) {
        this.name = name;
    }
}
  
const studentTest = new Student("Test");
console.log(studentTest);
