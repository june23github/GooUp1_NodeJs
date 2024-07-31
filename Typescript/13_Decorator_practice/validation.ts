function ValidatePositive(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        if (args.some(arg => typeof arg !== 'number' || arg <= 0)) {
            console.log('All arguments must be positive numbers!');
        }else{
            return originalMethod.apply(this, args);
        }
    };
    return descriptor;
  }
  
class Rectangle {
    @ValidatePositive
    calculateArea(width: number, height: number): number {
        return width * height;
    }
}
  
const rect = new Rectangle();
console.log(rect.calculateArea(5, 3));
console.log(rect.calculateArea(-5, 3));