function Memoize(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();
    
    descriptor.value = function(...args: any[]) {
      const cacheKey = JSON.stringify(args);
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }
      const result = originalMethod.apply(this, args);
      cache.set(cacheKey, result);
      return result;
    };
    return descriptor;
  }
  
  class Fibonacci {
    @Memoize
    fib(n: number): number {
      if (n <= 1) return n;
      return this.fib(n - 1) + this.fib(n - 2);
    }
  }
  
  const fib = new Fibonacci();
  console.time('First call');
  console.log(fib.fib(40));
  console.timeEnd('First call');
  
  console.time('Second call');
  console.log(fib.fib(40));
  console.timeEnd('Second call');