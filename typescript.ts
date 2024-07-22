//its an opensource language maintained and devp by microsoft
//its a superset of js and adds new capabilities to the language
//addtion of static type definations which was not present in JS
//typscript enables type annotations in js 
// example

//function greet(name: string): string {
	    //return `Hello, ${name}!`;
//}

//let result: string = greet("Alice");
//console.log(result);

//another example
//
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: 'Justine',
  age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine)
