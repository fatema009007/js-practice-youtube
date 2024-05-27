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

//+++++++++
// Stack (Premitive), Heap (Non - Premitive)  

let  myYputubename = "Fatema khatun"
let anotherName = myYputubename;
anotherName = "chai or code"
console.log(anotherName);

console.log(myYputubename);

let user = {
    email: "fatema@chaldal.com",
    name:"fatema"
}

let user1 = user;
user1.name = "suhaila"

console.log(user1);
console.log(user);