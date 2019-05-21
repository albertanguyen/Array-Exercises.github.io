/* some sytax is like filter, it goes with a built-in condition*/

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

// Does any inventor have the letter 'y' in their name? = if just found 1 out of all, meaning yes => some()
/* First way */
console.log(inventors.filter(element => element.toLowerCase().indexOf('y') !== -1).length); // return empty array, length 0 means No

/* 2nd way. False means no */
console.log(inventors.some( element => 
    {return (element.toLowerCase().indexOf("y") !== -1); })
);

// Does every inventor have the letter 'e' in their name? 
/* => every() method or function check if all satisfy the condition (return true)
if even one does not satisfies the condition, it will return False
*/
/* 1st way */
console.log(inventors.filter(element => element.toLowerCase().indexOf('e') !== -1).length); // return empty array, length 10 means not every
console.log(inventors.length);

/* 2nd way*/
console.log(inventors.every(element => element.toLocaleLowerCase().indexOf('e') !== -1));

// Does every inventor have first name that's longer than 4 characters? 
console.log(inventors.every(element => element.split(' ', 2)[0].length > 4 ));