class Warehouse {
    public _name: string;
    public _storage: number;
    public _address: string;
    public _owner: string;


    constructor(name: string, storage: number, address: string, owner: string){
        this._name = name;
        this._storage = storage;
        this._address = address;
        this._owner = owner;
    }


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get storage(): number {
        return this._storage;
    }
    public set storage(value: number) {
        this._storage = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get owner(): string {
        return this._owner;
    }
    public set owner(value: string) {
        this._owner = value;
    }

    public displayInfo() {
        console.log(`Warehouse: ${this._name}, Storage: ${this._storage}, Address: ${this._address}, Owner: ${this.owner}`);
      }
}

const myWarehouse = new Warehouse('Central Warehouse', 1500, '123 Main St', 'John Doe');


console.log(myWarehouse.name);    
console.log(myWarehouse.storage); 
console.log(myWarehouse.address); 

myWarehouse.name = 'New Warehouse';
myWarehouse.storage = 2000;
myWarehouse.address = '456 Elm St';

console.log(myWarehouse.name);    
console.log(myWarehouse.storage); 
console.log(myWarehouse.address);

myWarehouse.displayInfo();