//Your quiz functionality goes here
document.addEventListener('DOMContentLoaded', e => {

    const startButton = document.getElementById('startBtn');
    const questionContainer = document.getElementById('questionContainer');
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answerBtns');
    const nextBtn = document.getElementById('nextBtn');
    const ansBtn1 = document.getElementById('btn1');
    const ansBtn2 = document.getElementById('btn2');
    const ansBtn3 = document.getElementById('btn3');
    const ansBtn4 = document.getElementById('btn4');
    const scoreText = document.getElementById('scoreText');
    const currentScore = document.getElementById('score');

    startButton.addEventListener('click', gameStart)

    let shuffledQ, currentQ, score = 0;

    nextBtn.addEventListener('click', () => {
        currentQ++;
        setNextQuestion();

    })

    function gameStart() {
        //console.log("game has started")
        startButton.classList.add('hide');
        questionContainer.classList.remove('hide');
        scoreText.classList.remove('hide');
        shuffledQ = questions.sort(() => Math.random() - .5); //gives us a number +/- 0
        //console.log(shuffledQ)
        currentQ = 0;
        setNextQuestion()
    }

    function setNextQuestion() {
        showQuestion(shuffledQ[currentQ])
        nextBtn.classList.add('hide');
    }

    function showQuestion(question) {
        if (currentQ > questions.length - 1) {
            nextBtn.innerText = 'GAME OVER!'
        }

        questionElement.innerText = question.question;
        currentScore.innerText = score;
        for (let i = 0; i < 4; i++) {
            let button = document.getElementById(`btn${i + 1}`);
            button.innerText = question.answers[i].text;
            //console.log(button)
            //console.log(question.answers[i].text)
        }


        ansBtn1.addEventListener('click', () => {
            if (question.answers[0].correct === true) {
                score++;
                ansBtn1.classList.add('correct')
            }
            nextBtn.classList.remove('hide');
        })
        ansBtn2.addEventListener('click', () => {
            if (question.answers[1].correct === true) {
                score++;
                //ansBtn1.classList.add('correct')
            }
            nextBtn.classList.remove('hide');
        })
        ansBtn3.addEventListener('click', () => {
            if (question.answers[2].correct === true) {
                score++;
                //ansBtn1.classList.add('correct')
            }
            nextBtn.classList.remove('hide');
        })
        ansBtn4.addEventListener('click', () => {
            if (question.answers[3].correct === true) {
                score++;
                //ansBtn1.classList.add('correct')
            }
            nextBtn.classList.remove('hide');
        })
        console.log(currentQ);
        console.log(`Score: ${score} / ${questions.length}`)
    }

})