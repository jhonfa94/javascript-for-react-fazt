const names = ["rayan", "joe", "maria"];
const newNames = ["marcos", "mario", "john"];

//foreach
names.forEach((name) => {
  //   console.log(name);
});

//map
const namesMap = names.map((name) => {
  //   console.log(name);
  return `Hola ${name}`;
});

// console.log(namesMap);

// find => buscar elementos
const nameFound = names.find((name) => {
  if (name == "joe") {
    return name;
  }
});
// console.log(nameFound);

// filter => nos retorna o crea un nuevo arreglo con los elementos encontrados
const nameFilter = names.filter((name) => {
  if (name != "joe") {
    return name;
  }
  //   if (name == "joe") {
  //     return name;
  //   }
});
// console.log(nameFilter);

//concatenar arreglos
console.log(names.concat(newNames));

// TODO: LEER DOCUMENTACION: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
