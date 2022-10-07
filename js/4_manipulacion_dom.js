const title = document.createElement("h1");
title.innerText = "Hola mundo desde JS";
// console.log(title);

const button = document.createElement("button");
button.innerText = "Mi botón JS";

// Añadiendo un event handlers o manejadores de enventos
button.addEventListener("click", () => {
  console.log("Hola desde el botón js");
  title.innerText = "Texto actualizado con JS";
});

document.body.append(title);
document.body.append(button);
