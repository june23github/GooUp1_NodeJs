function upperCase(value: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(target[propertyKey]);
         
      descriptor.value = function(): string {
        return value.toUpperCase();
      }

    };
  }
  
class Car {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  
    @upperCase('abc')
    get_name(): string {
      return "Hello, " + this.name;
    }
}


const car = new Car('BMW');

console.log(car.get_name());
