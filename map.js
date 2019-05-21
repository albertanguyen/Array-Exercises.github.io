const inventors = [
  'Albert Einstein',
  'Issac Newton',
  'Galileo Galilei',
  'Marie Curie',
  'Johannes Kepler',
  'Nicolaus Copernicus',
  'Max Planck',
  'Katherine Blodgett',
  'Ada Lovelace',
  'Sarah E. Goode',
  'Lise Meitner',
  'Hanna Hammarstrom'
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];


    // Print out an array of all the inventors' names in uppercase.
console.log(inventors.map(element => element.toUpperCase()));


    // Print out an array of all the first names of each inventor.
console.log(inventors.map(element => element.split(' ',2)[0]));  // split by white space, get the first index 0

    // Print out an array of the length of every name.
let name = inventors.map(element => element.replace(/\s+/g, '')); // \s whitespace + means all    
console.log(name.map(element => element.length));

    // Print out an array of every number multiplied by 100.
console.log(numbers.map(element => 100 * element));    

    // Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
console.log(numbers.filter(element => Math.log2(element) % 1 === 0 && element > 1));
    