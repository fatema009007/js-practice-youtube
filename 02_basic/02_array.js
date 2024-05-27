const marvel= ["thor", "Ironman", "spiderman"];
const dc_hero =["superman", "batman"];

// marvel.push(dc_hero)
// console.log(marvel)

const allHeroes= marvel.concat(dc_hero)
console.log(allHeroes)

const all_new_heroes = [...marvel, ...dc_hero]

console.log(all_new_heroes)

const anotherArray= [1,2,3,[4,5,6], 7,8,[6,7,[4,5]]]
const usableAnotherArray=  anotherArray.flat(Infinity)
console.log(usableAnotherArray)
console.log(Array.isArray("Fatema"))
console.log(Array.from("Fatema"))
console.log(Array.from({name:"Fatema"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3 ));

