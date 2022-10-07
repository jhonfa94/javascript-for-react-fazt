// funciones normales
function hello() {
  console.log("Hello");
}
// ejecutamos la funcion hello
hello();

// funciones con retorno
function retorno() {
  return "Hello";
}
console.log(retorno());

//funciones con parametros
function parametros(name) {
  return "Hello " + name;
}

console.log(parametros("Rayan"));

function add(x, y) {
  return x + y;
}
console.log(add(10, 20));
// console.log(add(1));

// Funciones con parametros por defecto
function addD(x = 0, y = 0) {
  return x + y;
}

console.log(addD(1));
