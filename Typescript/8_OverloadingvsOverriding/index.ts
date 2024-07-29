// class Calculator {
//     add(a: number, b: number): number;
//     add(a: string, b: string): string;
  
//     add(a: any, b: any): any {
//       if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//       } else if (typeof a === "string" && typeof b === "string") {
//         return a.concat(b);
//       }
//     }
//   }
  
//   const calculator = new Calculator();
//   console.log(calculator.add(1, 2));   
//   console.log(calculator.add("Hello, ", "world!"));


  class Animal {
    sound(): void {
      console.log("Some generic animal sound");
    }
  }
  
  class Dog extends Animal {
    sound(): void {
      console.log("Go Go Go");
    }
  }
  
  const myDog = new Dog();
  myDog.sound();
  
  