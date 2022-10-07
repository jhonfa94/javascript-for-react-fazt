// function start() {
//   return "Starting...";
// }

// console.log(start());

console.log(
  (function () {
    return "starting....";
  })()
);

const button = document.createElement("button");
button.innerText = "Click me";

// button.addEventListener("click", () => {
//   console.log("Clicked");
// });

const handleClick = () => {
  console.log("Clicked...");
};

button.addEventListener("click", handleClick);

document.body.append(button);
