const user = {
  name: "Rayan",
  lastname: "Perez",
  age: 20,
  addres: {
    county: "Colombia",
    city: "Bogota",
    street: "AV Simon Bolivar",
  },
  friends: ["brandon", "elena"],
  active: true,
  sendMain() {
    return "sending email...";
  },
};

console.log(user);
console.log(user.sendMain());
