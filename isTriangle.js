const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#isTriangle-btn");
const outputResult = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
 const sumOfAngles = angle1 + angle2 + angle3;
 return sumOfAngles;

}

function isTriangle(){

    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    
    if (sumOfAngles == 180){
        outputResult.innerText = "Yay! The angles form a triangle.";
    } else {
        outputResult.innerText = "Oh! The angles don't form a triangle.";
    }
    // console.log(sumOfAngles)
   
}

isTriangleBtn.addEventListener("click", isTriangle);
