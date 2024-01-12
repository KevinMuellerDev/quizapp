let currentQuestion = 0;
let highscore = 0;


function init() {
    document.getElementById('question-start').textContent = '1';
    document.getElementById('question-end').textContent = `${questions.length}`;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        document.getElementById('cardcontainer').innerHTML = '';
        document.getElementById('cardcontainer').innerHTML = tempEndscreen(highscore);
    } else {
        document.getElementById('question-head').innerHTML = `${question['question']}`;

        for (let i = 1; i < Object.keys(question).length - 1; i++) {
            const answer = question[`answer_${i}`];

            document.getElementById(`answer${i}`).innerHTML = `${answer}`;
            document.getElementById(`answer${i}`).parentNode.classList.remove('bg-danger', 'bg-success');
        }
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedAnswer = Number(selection.slice(-1));

    if (selectedAnswer === question["right_answer"]) {
        document.getElementById(`answer${question["right_answer"]}`).parentNode.classList.add('bg-success')
        highscore++;
    } else {
        document.getElementById(`answer${selectedAnswer}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${question["right_answer"]}`).parentNode.classList.add('bg-success')
    }
    document.getElementById('btn-nextquestion').disabled = false;
}

function nextQuestion() {
    currentQuestion++;

    showQuestion();
    if (currentQuestion < questions.length) {
        document.getElementById('question-start').textContent = `${currentQuestion + 1}`;
        document.getElementById('btn-nextquestion').disabled = true;
    }
}

function newGame() {
    currentQuestion = 0;
    highscore = 0;
    document.getElementById('cardcontainer').innerHTML = tempNew();
    init();
}
