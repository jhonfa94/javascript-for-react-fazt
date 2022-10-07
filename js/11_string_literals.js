const background = "green";
const color = "white";
const isAuthorized = true;

const button = document.createElement("button");
button.innerText = "Click me";
button.style = `background:${
  isAuthorized ? background : "red"
}; color:${color};`;

button.addEventListener("click", () => {
  if (isAuthorized) {
    return alert("Esta autorizado");
  }
  alert("No esta autorizado");
});

document.body.append(button);
