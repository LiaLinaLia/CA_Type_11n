const add = (a: number, b: number): number => a + b;

let a: number = 7;
let b: number = 8;

//const add = (a:number, b:number): number => a + b;
//console.log(add(a,b));
//console.log(add(3, 10));

console.log({ a, b });
console.log({
  'add(a, b)': add(a, b),
  'add(3, 10)': add(3, 10),
});

console.log('labas');