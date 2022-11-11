const sideInputs = document.querySelectorAll(".side-input");
const calculateAreaBtn = document.querySelector("#calculateArea");

const outputArea = document.querySelector("#output");

function calculateArea(){
    const area = (Number(sideInputs[0].value)*Number(sideInputs[1].value))/2
    outputArea.innerText = "The area of triangle is "+ area + " cm²";
}

calculateAreaBtn.addEventListener("click", calculateArea)
