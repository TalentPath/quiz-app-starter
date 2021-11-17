/* your quiz builder functionality goes here */

let buildForm = document.querySelector('#quiz-builder');

buildForm.addEventListener("submit", function(event) {
    event.preventDefault();

    //Now we will create a new object out of the question and different answers:
    let ques = document.getElementById('question').value;
    let ans1 = document.getElementById('answer1').value;
    let ans2 = document.getElementById('answer2').value;
    let ans3 = document.getElementById('answer3').value;
    let ans4 = document.getElementById('answer4').value;

    makeNewQuestion(ques, ans1, ans2, ans3, ans4);
    displayQuestions()
    buildForm.reset()
})

