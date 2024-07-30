function can_get(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.get = function() {
        if (value){
          return 'can get this property';
        }else{
          return 'Can not get this property';
        }
      }
    };
}
  
class Point {
    private _x: number;
    private _y: number;
  
    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }
  
    @can_get(false)
    get x() {
      return this._x;
    }
  
    @can_get(true)
    get y() {
      return this._y;
    }
}
  
const point = new Point(10, 20);
console.log(point.x);
console.log(point.y);
  