let button = document.createElement("button");
button.innerHTML = "Click Me";

button.style.color = "white";
button.style.backgroundColor = "blue";

document.querySelector("body").prepend(button);

let p = document.querySelector("p");