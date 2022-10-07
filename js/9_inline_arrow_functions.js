const showText = () => {
  return "Hola Mundo";
};

// console.log(showText());

const showTextInline = () => "Hola Mundo";
const showNumber = () => 22;
const showArray = () => [1, 2, 3, 4];
const add = (x, y) => x + y;
const showObject = () => ({ name: "joe" });

console.log(showTextInline());
console.log(showNumber());
console.log(showArray());
console.log(add(10, 20));
console.log(showObject());
