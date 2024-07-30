abstract class User {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public abstract getRole(): string;
}
  
class Admin extends User {
    public getRole(): string {
        return "Admin";
    }
}
  
class Guest extends User {
    public getRole(): string {
        return "Guest";
    }
}


const admin = new Admin("A");
const guest = new Guest("B");

console.log(`${admin.getName()} is an ${admin.getRole()}`);
console.log(`${guest.getName()} is a ${guest.getRole()}`);
  