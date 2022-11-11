const formData = document.querySelector(".quiz-form");
const submitAnswer = document.querySelector("#submit-answer");
const outputScore = document.querySelector("#output");
const correctAnswers = ["90°","right angled","one right angle","12, 16, 20","Equilateral triangle","85°","40°","a + b + c","no","45°"];


function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(formData);
    for ( let data of formResults.values()){
       
        if (data === correctAnswers[index]){

            score=score+1;
        }

        index++;
    }
 outputScore.innerText = "Your score is " + score;
}

submitAnswer.addEventListener("click",calculateScore)