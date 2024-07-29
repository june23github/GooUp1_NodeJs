// type GreetFunction = (a: string) => void;

// function greeter(fn: GreetFunction) {
//     fn("Hello, World");
// }
   
// function printToConsole(s: string) {
//     console.log(s);
// }
   
// greeter(printToConsole);



// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
//   };
//   function doSomething(fn: DescribableFunction) {
//     console.log(fn.description + " returned " + fn(6));
//   }
   
//   function myFunc(someArg: number) {
//     return someArg > 3;
//   }
//   myFunc.description = "default description";
   
//   doSomething(myFunc);




  class Printer {
    print(value: number): void;
    print(value: string): void;
    print(value: boolean): void;
    
    print(value: any): void {
      console.log(value);
    }
  }
  
  const printer = new Printer();
  printer.print(123);      
  printer.print("Hello");  
  printer.print(true);    