let currentQuestion = 1;


function init(){
    document.getElementById('question-start').textContent = '1';
    document.getElementById('question-end').textContent = `${questions.length}`;    
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-head').innerHTML = `${question['question']}`;

    for (let i = 1; i < Object.keys(question).length - 1; i++) {
        const answer = question[`answer_${i}`];
        
        document.getElementById(`answer${i}`).innerHTML = `${answer}`;
    }
}