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

 
// Find the inventor that has a middle name.
function middlenameFinder(array) {
    let name = array.map(element => element.split(" ", 3));
    return name.filter( element => element.length > 2).join('');
}

console.log(middlenameFinder(inventors));


// Bonus: Return a new array without inventor with a middle name. 
function Rest(array) {
    return array.filter(element => element.split(" ", 3).length < 3);
}

console.log(Rest(inventors));
