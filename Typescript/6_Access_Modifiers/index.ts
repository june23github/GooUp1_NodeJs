class Person {
    private _id: string;
    protected _name: string;
    public _age: number;

    constructor(id: string, name: string, age: number) {
        this._id = id;
        this._name = name;
        this._age = age;
    }

    public get_id(): string {
        return this._id;
    }
    public set_id(value: string) {
        this._id = value;
    }
    public get_name(): string {
        return this._name;
    }
    public set_name(value: string) {
        this._name = value;
    }
    public get_age(): number {
        return this._age;
    }
    public set_age(value: number) {
        this._age = value;
    }
}


class Student extends Person {
    public _school: string;

    constructor(id: string, name: string, age: number, school: string) {
        super(id, name, age);   
        this._school = school;
    }

    displayInfo(): string {
        return `name: ${this._name}, age: ${this._age}, school: ${this._school}`
    }
}

const person1 = new Person('12345', 'Linh', 21);

person1.set_id('23456');

// person1._id = '23456';

person1.set_age(20);
person1._age = 20;

// person1._name = 'Linhh';
const student1 = new Student('12345', 'Linh', 21, 'PCC');


console.log(student1.displayInfo());





