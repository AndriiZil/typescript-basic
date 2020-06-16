function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface IMyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends IMyPosition {
  default: string;
}

function position(): IMyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): IMyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {x: undefined, y: undefined}
  }

  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }

  return {x: a, y: b}
}

console.log('Empty:', position()); // => Empty: { x: undefined, y: undefined }
console.log('One params:', position(42)); // => One params: { x: 42, y: undefined, default: '42' }
console.log('Two params:', position(10, 15)); // => Two params: { x: 10, y: 15 }
