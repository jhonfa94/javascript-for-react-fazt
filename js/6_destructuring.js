const user = {
  name: "joe",
  age: 30,
};

// const printInfo = ({ name }) => {
const printInfo = (user) => {
  const { name, age } = user;
  return `<h1>Hola ${name} tienes ${age}</h1>`;
};

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);
