function Log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${key} returned: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
  }
  
  class Calculator {
    @Log
    add(a: number, b: number): number {
      return a + b;
    }
  }
  
  const calc = new Calculator();
  calc.add(5, 3);