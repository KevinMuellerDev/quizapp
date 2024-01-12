function tempEndscreen(score) {
    return `
        <div class="card-body d-flex flex-column justify-content-center align-items-center position-relative">
            <div class="result-img">
                <img src="./img/brainresult.png" alt="result">
            </div>
            <h3 class="mt-4" id="question-head">Completed Quiz!</h3>
            <div class="d-flex align-items-center gap-3 fs-3">
                <span class="fw-bold">YOUR SCORE:</span>
                <span><b id="score">${score}</b> / <b>5</b></span>
            </div>
            <button class="btn btn-primary mt-5 px-5" onclick="newGame()">REPLAY</button>
            <img class="position-absolute top-50 end-0 translate-middle-y" src="./img/tropy.png" alt="">
        </div>
    `;
}

function tempNew(){
    return`
        <div class="card-body d-flex flex-column justify-content-around">
            <h5 class="card-title" id="question-head">Frage</h5>
            <div>
                <div class="card mb-2 quiz-answer-card" onclick="answer('answer_1')">
                    <div class="card-body" id="answer1">
                        Antwort
                    </div>
                </div>

                <div class="card mb-2 quiz-answer-card" onclick="answer('answer_2')">
                    <div class="card-body" id="answer2">
                        Antwort
                    </div>
                </div>

                <div class="card mb-2 quiz-answer-card" onclick="answer('answer_3')">
                    <div class="card-body" id="answer3">
                        Antwort
                    </div>
                </div>

                <div class="card mb-2 quiz-answer-card" onclick="answer('answer_4')">
                    <div class="card-body" id="answer4">
                        Antwort
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-around">
                <div class="text-center">
                    <span><b id="question-start"></b> von <b id="question-end"></b> Fragen</span>
                </div>
                <button class="btn btn-primary" id="btn-nextquestion" disabled="true" onclick="nextQuestion()">Nächste Frage</button>
            </div>
        </div>
    `
}