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

// Find the sum of all the even numbers.

/* 1st way*/
console.log(numbers.filter(element => element % 2 === 0).reduce( (accumulator, currentvalue) => accumulator + currentvalue));

/* 2nd way*/
function oddnumbers (array) {
    return array.filter(element => element % 2 === 0)
}

console.log(oddnumbers(numbers).reduce((accumulator, currentvalue) => accumulator + currentvalue));


// Create a string that has the first name of every inventor.
console.log(inventors.map(element => element.split(' ', 2)[0]).join(', '));

// sum of Fibonacci sequence
function Fib(array) {
    if (n = 0) {return 0;}
    if (n = 1) {return 1;}
    return array.reduce((accumulator, currentvalue) => accumulator+currentvalue);
}

console.log(Fib(numbers));