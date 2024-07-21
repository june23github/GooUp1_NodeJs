interface Person {
    name: string;
    age: number;
  }
  
  interface Employee extends Person {
    employeeId: number;
    department: string;
  }
  
  const employee: Employee = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
  };
  
  console.log(employee);

  interface A {
    prop1: string;
  }
  
//   interface A {
//     prop2: number;
//   }
  
//   const obj: A = { prop1: "hello", prop2: 123 }; // This is valid
  
//   type B = {
//     prop1: string;
//   };
  
//   type B = {
//     prop2: number;
//   };



  
