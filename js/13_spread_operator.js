const names = ["rayan", "joe", "maria"];
const newNames = ["marcos", "mario", "john"];

//OPERADOR SPRED, CONCATENA DOS ARRELOS EN UNO
const spread = [...names, ...newNames];
console.log(spread);

const user = {
  name: "rayan",
  lastname: "ray",
};

const adress = {
  street: "main street 123",
  city: "bogota",
};

const userInfo = {
  ...user,
  ...adress,
};

console.log(userInfo);
