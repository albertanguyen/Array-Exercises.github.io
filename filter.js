/* Filter is a combination of condition and map so normally you won't need to declare a condition inside, 

just return (the test condition), it will give all  elements that pass that test

numbers.filter(num => num.toString().length == 2);
*/
const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];


// Print out an array of the inventors whose name starts with 'A'.

/* 1st way: */
let Ainventor = inventors.filter(element => {
  if (element.startsWith("A")) {
    return element;
  }
})

// 2nd way
let Ainventor = inventors.filter(element => element.startsWith('A'));
console.log(Ainventor);

// 3rd way:
let Ainventor = inventors.filter(element => element.match(/^A/g));
console.log(Ainventor);


// Print out an array of the inventors whose name contains 'n'.
/* 1st way: */
let ninverntor = inventors.filter(element => element.indexOf('n') !== -1);
console.log(ninverntor);


// Bonus: print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).

 /* Testing these */
// let duplicatedCharacters = inventors.filter(element => element.toLocaleLowerCase().match(/[\s\S/^nn].{1,2}/g));
// console.log(duplicatedCharacters);

//str.match(/[\s\S]{1,2}/g) || [];

// function Findingduplicate(array) {
//   return array.fileter( element => );
//   }


//let indexAll = inventors.filter(element => {
//  return element.toLowerCase().indexOf(/\S(\w)\1/g) !== -1 })

// let indexAll = inventors.filter(element => {
//   return element.toLowerCase().indexOf('nn') !== -1 })

//console.log(indexAll);

/* 1st way */
// let duble = inventors.filter(inventor => {
//   const inventorNameCharacters = inventor.split("");
//   console.log(inventorNameCharacters);
//   for (let i = 0; i < inventorNameCharacters.length; i++) {
//     if (inventorNameCharacters[i] === inventorNameCharacters[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// });
// console.log(duble);

// Print out an array of the numbers which are odd.
console.log(numbers.filter(num => num % 2 !== 0));

// Print out an array of the numbers that have two digits.
console.log(numbers.filter(num => num.toString().length == 2));

// Bonus: print out an array of the numbers which are prime.
/* 1st way. this way I will need to check the base values later: 2,3,5,7. This is true for num > 7 */
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
console.log(
  numbers.filter(
    num =>
      num % 1 === 0 &&
      num % num === 0 &&
      num % 2 !== 0 &&
      num % 3 !== 0 &&
      num > 1 &&
      num % 5 !== 0 &&
      num % 7 !== 0
  )
);

/* 2nd way, need to take into account not whole number later. need to check this again */
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

let primeNumbers = numbers.filter(num => {
//  if (num < 2) {return false};
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {return false
    } else  {
      return true;
    }
  }
});
console.log(primeNumbers);