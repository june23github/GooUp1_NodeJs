class MyClass {
    static count: number = 0;

    static displayStaticCount() {
        console.log(`Static Count: ${MyClass.count}`);
    }

    name: string;

    constructor(name: string) {
        this.name = name;
        MyClass.count += 1;
    }

}


let instance1 = new MyClass("Instance1");
//  instance1.count = 1;

MyClass.displayStaticCount();

let instance2 = new MyClass("Instance2");

MyClass.displayStaticCount();

