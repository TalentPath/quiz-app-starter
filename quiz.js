//Your quiz functionality goes here
let rightChoices = 0;
let quesoNum = 0;

function startGame()
{
    quesoNum = 0;
    //displayQuestions();
    let quizQuestions = getQuestions();
    console.log(quizQuestions[0]);
    let form = document.querySelector('#quiz')
    let startButton = document.querySelector('#start-button');
    let loopButton = document.getElementById('loop-button');
    let endMessage = document.getElementById('end-message');
    startButton.style.display = 'none'
    loopButton.style.display = 'none'
    endMessage.innerHTML = "";
    endMessage.style.display = 'none';

    displayQuestion(0);

    form.style.display = "flex";
}

function submitAndNext()
{
    let choice = document.querySelector('input[name="quiz-queso"]:checked').value;
    let quizQuestions = getQuestions();

    if(choice == quizQuestions[quesoNum].rightAns)
    {
        rightChoices += 1;
        quesoNum += 1;
        console.log(`${rightChoices} correct of ${quizQuestions.length}`);
        if(quesoNum == quizQuestions.length)
        {
            endGame();
        }
        else
            displayQuestion(quesoNum);
    }
    else if(choice != quizQuestions[quesoNum].rightAns)
    {
        quesoNum += 1;
        console.log(`${rightChoices} correct of ${quizQuestions.length}`);
        if(quesoNum == quizQuestions.length)
        {
            endGame();
        }
        else
        displayQuestion(quesoNum)
    }
}

function displayQuestion(index)
{
    let quizQuestions = getQuestions();

    //This is where it will pull from the list of questions;
    let ques = document.querySelector('#ques');
    let choiceA = document.querySelector('label[for="a1"]');
    let choiceB = document.querySelector('label[for="a2"]');
    let choiceC = document.querySelector('label[for="a3"]');
    let choiceD = document.querySelector('label[for="a4"]');

    ques.innerHTML = quizQuestions[index].q;
    choiceA.innerHTML = quizQuestions[index].answer;
    choiceB.innerHTML = quizQuestions[index].answer2;
    choiceC.innerHTML = quizQuestions[index].answer3;
    choiceD.innerHTML = quizQuestions[index].answer4;
}

function endGame()
{
    let loopButton = document.getElementById('loop-button');
    let form = document.getElementById('quiz');
    let endMessage = document.getElementById('end-message');

    form.style.display = "none";
    loopButton.style.display = "flex";
    endMessage.style.display = "flex";
    endMessage.innerHTML = `You got ${rightChoices} out of ${quesoNum} questions right!`
}