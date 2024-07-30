// import "reflect-metadata";
// const formatMetadataKey = Symbol("format");

// function format(formatString: string) {
//   return Reflect.metadata(formatMetadataKey, formatString);
// }
// function getFormat(target: any, propertyKey: string) {
//   return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }


// class Greeter3 {
//     @format("Hello, %s")
//     greeting: string;
//     constructor(message: string) {
//       this.greeting = message;
//     }
//     greet() {
//       let formatString = getFormat(this, "greeting");
//       return formatString.replace("%s", this.greeting);
//     }
// }


// const instance = new Greeter3('Hoang Linh');

// console.log(instance.greet());



function checkMin(atLeast: number) {
  return function(target: any, propertyKey: string) {
    let value: string;
    const getter = function(){
      return value;
    }
    const setter = function(newVal: string) {
      if (newVal.length < atLeast) {
        console.log(`${propertyKey} must be at least ${atLeast} characters long.`)
      }else{
        value = newVal;
      }
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}
class User {
  public username: string;

  @checkMin(7)
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

const user1 = new User('Linh', 'aaaaa');


