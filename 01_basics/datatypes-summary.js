// Primitive

// 7  types: String, Number, Bollean, null, undefined , Symbol,BigInt

//Reference  (Non Primitive)
//Array, Objects Functions 

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
console.log(typeof id, typeof anotherId);

const myFunction = function() {
    console.log("hi");
}
console.log(typeof myFunction);