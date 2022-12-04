const sideInputs = document.querySelectorAll(".side-input");
const calculateAreaBtn = document.querySelector("#calculateArea");

const outputArea = document.querySelector("#output");

function calculateArea() {
  if (
    sideInputs[0].value == "" ||
    sideInputs[1].value == "" ||
    sideInputs[0].value < 0 ||
    sideInputs[1].value < 0
  ) {
    outputArea.innerText = "Invalid Input!";
  } else {
    const area =
      (Number(sideInputs[0].value) * Number(sideInputs[1].value)) / 2;
    outputArea.innerText = "The area of triangle is " + area + " cm²";
  }
}

calculateAreaBtn.addEventListener("click", calculateArea);
