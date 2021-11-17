//Your quiz questions array of objects goes here
document.addEventListener("load", function(event) {
    getQuestions();
});


let questions = []
//PLEASE REMEMBER TO CHANGE THIS TO 0 AT ONE POINT
let numOfQuestions = 0;

//Place the item inside of the storage, turning it into JSON
//sessionStorage.setItem(`question1`, JSON.stringify(questions));

//Get the item from the storage, and parse it out of the JSON
//console.log(JSON.parse(sessionStorage.getItem(`questions`)));

function makeNewQuestion(ques, ans1, ans2, ans3, ans4)
{
    numOfQuestions += 1;
    //Right here is where reading from a form is gonna go

    //Right here is where creating the question and pushing it to the questions list is going to go
    let newObject = {question : ques, answer : ans1, answer2 : ans2, answer3 : ans3, answer4 : ans4};
    questions.push(newObject);

    //console.log(questions);

    //Righ here is where I will push it to the sessionStorage
    sessionStorage.setItem(`questions`, JSON.stringify(questions));

    /*for(let i = 1; i <= numOfQuestions; i++)
    {
        console.log(JSON.parse(sessionStorage.getItem(`question${i}`)));
    }*/
}

function getQuestions(){
    questions = JSON.parse(sessionStorage.getItem(`questions`));
}

function displayQuestions()
{
    //console.log(JSON.parse(sessionStorage.getItem(`questions`)));
    //questions = JSON.parse(sessionStorage.getItem(`questions`));
    for(let ques of questions)
    {
        console.log(ques)
    }
}

//makeNewQuestion();