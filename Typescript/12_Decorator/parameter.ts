function logParameter(target: any, propertyKey: string, parameterIndex: number) {
    const metadataKey = `log_${propertyKey}_parameters`;
  
    if (Array.isArray(target[metadataKey])) {
      target[metadataKey].push(parameterIndex);
    } else {
      target[metadataKey] = [parameterIndex];
    }
  }
  
  class Greeter4 {
    greeting: string;
    
    constructor(message: string) {
      this.greeting = message;
    }
  
    greet(@logParameter name: string) {
      return `Hello, ${name} and ${this.greeting}`;
    }
  }
  
  const greeter2 = new Greeter4("world");
  console.log(greeter2.greet("John"));
  