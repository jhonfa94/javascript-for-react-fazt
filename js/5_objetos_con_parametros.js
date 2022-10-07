const user = {
  name: "joe",
  age: 30,
};

const printInfo = (user) => {
  return `<h1>Hola ${user.name} </h1>`;
};

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);
