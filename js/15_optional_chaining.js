const person = {
  name: "rayan",
  adress: {
    city: "london",
  },
};

// console.log(person.adress.city);
console.log(person.adress.city);
// if (person.location) {
//   console.log(person.location.city);
// }

/**
 * Optional Chaining es un simbolo de interrogación ?
 */
console.log(person.location?.city);
