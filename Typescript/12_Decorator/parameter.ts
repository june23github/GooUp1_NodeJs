function logParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(target, propertyKey, parameterIndex);
}
  
  class Phone {
    namePhone: string;
    
    constructor(name: string) {
      this.namePhone = name;
    }
  
    owner(@logParameter name: string) {
      return `This phone belongs to ${name} `;
    }
  }
  
  const phone = new Phone("world");
  console.log(phone.owner('June'));
  