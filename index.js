const colorBtn = document.querySelector("button");
const body = document.querySelector("body");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function changeColor() {
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  console.log(Math.floor(Math.random() * colors.length));
  console.log(randomColor1);
  console.log(randomColor2);
  body.style.backgroundImage = `linear-gradient(to left ,${randomColor1}, ${randomColor2})`;
}

colorBtn.addEventListener("click", changeColor);
