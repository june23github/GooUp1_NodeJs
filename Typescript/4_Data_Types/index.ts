let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let str: string = 'linh';

let boo: boolean = true;


const animals: Array<string> = ['dog', 'cat', 'pig'];
let list: number[] = [1, 2, 3];


let x: [string, number];
x = ["hello", 10];
console.log(x);

enum Color { Red, Green, Blue }
let c: Color = Color.Green;
console.log(c);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;


function warnUser(): void {
    alert("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;



let notSure2: unknown = 4;
notSure2 = "maybe a string instead";
notSure2 = false;

if (typeof notSure === "boolean") {
  console.log(notSure); 
}

let user: { name: string, age: number } = { name: "John", age: 30 };
console.log(user);



