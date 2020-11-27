var readlineSync = require('readline-sync')

const user_name = readlineSync.question("What is your name: ")
console.log("Welcome " + user_name + " to, do you know Vinay's quiz\n" )

// stores the score
var score = 0;

var question1 = { 
  question: "What is my full name",
  answer: "Vinay Dangwal"
}

var question2 = { 
  question: "What is my favourite game?",
  answer: "Chess"
}

var question3 = { 
  question: "What is my favourite movie?",
  answer: "Border"
}

var question4 = { 
  question: "What is my favourite color?",
  answer: "Red"
}

var question5 = { 
  question: "What is my school name?",
  answer: "KVJK"
}

var questions = [question1, question2, question3, question4, question5];


function check_answer(answer, user_answer) {
  if(answer.toLowerCase() === user_answer.toLowerCase()) {
    console.log("You are right!\n");
    return true;
  }
  else {
    console.log("You are wrong!\n");
    return false;
  }

}

function ask_question(question) {
  const user_answer = readlineSync.question(question.question + " : ");
  return user_answer;
}

for(var i=0; i<questions.length; i++) {
  var user_answer = ask_question(questions[i]);
  if(check_answer(questions[i].answer, user_answer))
    score++;
}

console.log("\nYour final score: ", score);