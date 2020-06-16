const str: string = 'Hello';

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello typescript';

const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Andrii', 123456789];

// Any
let variable: any = 42;
// ...
variable = 'new string';

// ====
function sayMyName(name: string): void {
  console.log(name);
}

sayMyName('Hizenberg');

// Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {

  }
}

// Type
type Login = string;

const login: Login = 'admin';
const login2: Login = 2; // => Error

type ID = string | number;
const id1: ID = 12345;
const id2: ID = 12345;
// const id3: ID = true

// Type
type SomeType = string | null | undefined;































