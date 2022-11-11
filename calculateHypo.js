const sideInputs = document.querySelectorAll(".side-input");
const calculateHypotenuseBtn = document.querySelector("#calulate-hypo-btn");

const outputHypotenuse = document.querySelector("#output-hypo");


function sumOfSquares(a,b){
   const sum = a*a + b*b;
    return sum;
    // console.log(sum)
}

function calculateHypotenuse(){
   const sumOfSquareSides = sumOfSquares(Number(sideInputs[0].value) , Number(sideInputs[1].value));

   const lengthOfHypotenuse = Math.sqrt(sumOfSquareSides)
    outputHypotenuse.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
}
calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse)
