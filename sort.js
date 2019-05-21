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

    // Sort all the inventors in alphabetical order, A-Z.
    function comparator(nameA, nameB) {
        if (nameA < nameB) {
        return -1;
        }
        if (nameA > nameB) {
        return 1;
        }
        return 0;
    }

    let sortedArray = inventors.sort(comparator);
    console.log(sortedArray);

    // Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
    function comparatorReverse(nameA, nameB) {
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    }

    let sortedArrayReverse = inventors.sort(comparatorReverse);
    console.log(sortedArrayReverse);


    // Sort all the inventors by length of name, shortest name first. (First name or last name? or total name including whitespace. There might be more than 1 whitespace)
    //let nameLength = inventors.map(element => element.replace(/\s+/g, "".toString().length));

    function LengthComparator (nameA, nameB) {
        if (nameA.length < nameB.length) {
          return -1;
        }
        if (nameA.length > nameB.length) {
          return 1;
        }
        return 0;   
    }

        let sortedNameShort = inventors.sort(LengthComparator);
        console.log(sortedNameShort);


    // Sort all the inventors by length of name, longest name first. Do not use the reverse method.
    function LengthComparatorReverse(nameA, nameB) {
      if (nameA.length < nameB.length) {
        return 1;
      }
      if (nameA.length > nameB.length) {
        return -1;
      }
      return 0;
    }

    let sortedNameLong = inventors.sort(LengthComparatorReverse);
    console.log(sortedNameLong);

    // Sort the numbers until you see the following: [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9].
 console.log(numbers.sort());   
