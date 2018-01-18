//require inquirer 
var inquirer = require('inquirer'); 
// require basicCard 
var basic = require('.BasicCard.js'); 
// require ClozeCard 
var cloze = require('.ClozeCard.js');
// require questions  
var questions = require('.questions.js'); 


// Populate the cloze-deleted questions list 

// need to review if this is right, ClozeCard.ClozeCard 

for (var i = 0; i < questions.length; i++){ 
	var q = new ClozeCard.ClozeCard(questions[i].full, questions[i].clone); 
	closeQuestions.push(q); 

}


// Question user is on 
var currentQuestion = 0; 
//correct answers 
var answerRight = 0; 
// wrong answrrs 
var answerWrong = 0; 


//ask question prompt to user to answer specific cloze-deleted question 

function askQuestion(){ 
	inquirer.prompt([ 

		{ 
			type: 'input', 
			message: closeQuestions[currentQuestion].partial + '\nAnswer:', 
			name: 'userGuess'
		}

		]).then(function (answers){ 
			console.log('\n'); 

			// check if the user has guessed correctly 
			if (answes.userGuess.toLowerCase()=== closeQuestions [currentQuestion].cloze.toLowerCase()){ 
				console.log('You so smart!!'); 
				answerRight++; 
			} else { 
				console.log('You pretty dumb!')
				answerWrong++; 
			}
			console.log(closeQuestions[currentQuestion].full); 
			console.log('-------------------------------------\n'); 

			if (currentQuestion < closeQuestions.length - 1) { 
				currentQuestion++; 
				askQuestion(); 

			} else { 
				console.log('GAME OVER LOSER!'); 
				console.log('Correct Answers:' answerRight); 
				console.log('Wrong answers:' answerWrong); 
				console.log('------------------------------------------\n'); 


// user wants to play again? 
				inquirer.prompt([

					{ 
						type: 'confirm', 
						message: 'Would you like to play again?', 
						name: playAgain
					}

					]).then(function(answer){ 
					 if(answer.playAgain){ 
					 	currentQuestion = 0; 
					 	answerRight = 0; 
					 	answerWrong = 0; 

//questions start again
					askQuestion();

					 } else { 
// game ends 
					console.log(' You werent going to win ANYWAYS!'); 

					 }


					})
			}	


		})

}
// game starts 

askQuestion();
