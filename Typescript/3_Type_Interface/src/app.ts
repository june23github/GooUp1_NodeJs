interface User {
    name: string,
    age: number,
    address: string,
    readonly email: string,
    phone?: string
}

function printDetailUser(user: User) : void {
    console.log("🚀 ~ name:", user.name);
    console.log("🚀 ~ age:", user.age);
    console.log("🚀 ~ address:", user.address);
    console.log("🚀 ~ email:", user.email);
    console.log("🚀 ~ phone:", user.phone);
}

const user1 : User = {
    name: "Hoang Linh",
    age: 21,
    address: "QN",
    email: 'Abc@gmail.com'
}
printDetailUser(user1);