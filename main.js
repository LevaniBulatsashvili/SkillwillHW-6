// Task N1
const openModalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const closeModalBtn = modal.querySelector("button");

openModalBtn.addEventListener("click", () => (modal.style.display = "block"));
closeModalBtn.addEventListener("click", () => (modal.style.display = "none"));

// Task N2
// Gets Container Input and Button
const getContainerElements = (containerClassName) => {
  const container = document.querySelector(containerClassName);
  const containerInput = container.querySelector("input");
  const containerBtn = container.querySelector("button");

  return [containerInput, containerBtn];
};

const body = document.body;
const [colorInput, colorBtn] = getContainerElements(".bg-color-container");
const validColors = ["RED", "BLUE", "GREEN", "BLACK", "WHITE"];

const colorIsValid = (color, validColors) =>
  validColors.includes(color.toUpperCase());

colorBtn.addEventListener("click", () => {
  if (colorIsValid(colorInput.value, validColors))
    body.style.background = colorInput.value;
  else alert("Please enter a valid color (red, blue, green, black, white)");

  colorInput.value = "";
});

// Task N3
const [calcInput, calcBtn] = getContainerElements(".calc-avg-container");

calcBtn.addEventListener("click", () => {
  if (!calcInput.value) return alert("Please enter a value (1:2:3:4:5)");

  const strArr = calcInput.value.split(":");

  const avgNum =
    strArr.reduce((prevNum, strNum) => (prevNum += +strNum), 0) / strArr.length;

  if (isNaN(avgNum) || calcInput.value.endsWith(":"))
    return alert("Please enter valid value (1:2:3:4:5)");

  alert(`Avarage Number is ${avgNum}`);
});
