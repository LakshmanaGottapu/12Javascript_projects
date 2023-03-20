var num1 = Math.ceil(Math.random()*10);
var num2 = Math.ceil(Math.random()*10);

var formEl = document.getElementById('form');
var scoreEl = document.getElementById('score');
var questionEl = document.getElementById('question');
var inputEl = document.getElementById('input');
//var submitEl = document.getElementById();

var score = JSON.parse(localStorage.getItem('score'));

if(!score){
    score=0;
}
scoreEl.innerHTML = `score: ${score}`;

questionEl.innerHTML = `What is ${num1} multiply ${num2} ?`;

var correctAns = num1*num2;

formEl.addEventListener("submit", () => {
    var userAns = +inputEl.value;
    if(userAns==correctAns) {
        score++;
        localStorage.setItem('score',JSON.stringify(score));
    }
    else{
        score--;
        localStorage.setItem('score',JSON.stringify(score));
    }
});



