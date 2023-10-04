const questions = [
{
    question: "National  game of India is?",
    answers:[
        {Text: "Hockey", correct:true},
        {Text: "Cricket", correct:false},
        {Text: "Football", correct:false},
        {Text: "Not  decided", correct:false}
    ]
},
{
    question: "finance committee manages________of the  event?",
    answers:[
        {Text: "organisation", correct: false},
        {Text: "Managment", correct: false},
        {Text: "Budget", correct: true},
        {Text: "implementation", correct: false}
    ]
},
{
    question: "What is  the role of the committee for publicity ?",
    answers:[
        {Text: "Organise", correct:false},
        {Text: "Finance", correct:false},
        {Text: "Advertise", correct:true},
        {Text: "Selection", correct:false},
    ]
},
{
    question: "________ is not the form of League type tournament.National  game of India is?",
    answers:[
        {Text: "Cyclic", correct:false},
        {Text: "Double League", correct:false},
        {Text: " Round Robin", correct: true},
        {Text: "Single  League", correct:false},
    ]
},
{
    question: "In which year start the volleyball game?",
    answers:[
        {Text: "1995", correct:false},
        {Text: "1895", correct:true},
        {Text: "1896", correct:false},
        {Text: "1891", correct:false},
    ]
},
{
    question: "When is sports day celebrated?",
    answers:[
        {Text: "30 August", correct:false},
        {Text: "29 August", correct:true},
        {Text: "28 August", correct:false},
        {Text: "27 August", correct:false},
    ]
},
{
    question: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
    answers:[
        {Text: "1st", correct:false},
        {Text: "2nd", correct:false},
        {Text: "3rd", correct:true},
        {Text: "None of the above", correct:false}
    ]
},
{
    question: "How many months have 28 days?",
    answers:[
        {Text: "2", correct:false},
        {Text: "1", correct:false},
        {Text: "All of Them", correct:true},
        {Text: "Depends if there's a leap year or not", correct:false}
    ]
},
{
    question: "How many 0.5cm slices can you cut from a bread that is 25cm long?",
    answers:[
        {Text: "50", correct:true},
        {Text: "25", correct:false},
        {Text: "39", correct:false},
        {Text: "Non of the above ", correct:false}
    ]
},
{
    question: "There are two clocks of different colors: The green clock is broken and doesn't run at all, but the yellow clock loses one second every 24 hours. Which clock is more accurate?",
    answers:[
        {Text: "The green clock", correct:true},
        {Text: "The yellow clock", correct:false},
        {Text: "Neither", correct:false},
        {Text: "Both", correct:false}
    ]
}

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const NEXTButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    NEXTButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;
    answerButtons.innerHTML = ' ';
    currentQuestion.answers.forEach((answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    }
        
        ));
}
function resetstate(){
NEXTButton.style.display = "none";
answerButtons.innerHTML = ' ';
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = "true";
});
NEXTButton.style.display = "block";
}
function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    NEXTButton.innerHTML = "Play Again";
    NEXTButton.style.display = "block";
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
} else{
    showScore();
}

}

NEXTButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}else{
    startQuiz();
}
});


startQuiz();
















