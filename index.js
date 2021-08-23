const readLineSync = require('readline-sync');
const chalk = require('chalk');

var points = 0;

function playQuestion(questionObject) {
	// Display question acc to Type.
	var question = questionObject.question;
	question += '\n';

	// Mapping for option to array indexing.
	var options = ['a', 'b', 'c', 'd'];

	if (questionObject.questionType === 'Options') {
		question += 'Choose the correct option. \n';
		for (var i = 0; i < questionObject.options.length; ++i) {
			question +=
				chalk.white(options[i]) + '. ' + questionObject.options[i];
			question += '\n';
		}
	}

	var givenAnswer = readLineSync.question(chalk.blueBright(question));
	givenAnswer = givenAnswer.toLowerCase();

	console.log('\n');

	// Give results
	if (
		questionObject.questionType === 'Options' &&
		options[questionObject.answer] === givenAnswer
	) {
		console.log(chalk.green("Great, That's Correct!"));
		points += 1;
	} else if (
		questionObject.questionType === 'Subjective' &&
		givenAnswer === questionObject.answer.toLowerCase()
	) {
		console.log(chalk.green("Great, That's Correct!"));
		points += 1;
	} else {
		console.log(chalk.red('Wrong!!!'));
	}
	console.log(chalk.yellowBright('Your score: ') + chalk.cyan(points));
	console.log('======== \n');
}

var questionsToAsk = [
	{
		question: 'Agent which cannot heal himself?',
		questionType: 'Options',
		options: ['Sage', 'Phoenix', 'Skye'],
		answer: 2,
	},
	{
		question: 'Agent which can heal teammates?',
		questionType: 'Options',
		options: ['Sage', 'Phoenix', 'Cypher', 'Kayo'],
		answer: 0,
	},
	{
		question: 'Agent that can fly in air?',
		questionType: 'Options',
		options: ['Skye', 'Sage', 'Yoru', 'Jett'],
		answer: 3,
	},
	{
		question: 'Country in which Sage was raised?',
		questionType: 'Subjective',
		answer: 'China',
	},
	{
		question: 'Which is not a duelist?',
		questionType: 'Options',
		options: ['Kayo', 'Phoenix', 'Yoru', 'Jett'],
		answer: 0,
	},
];

var userScores = [
	{
		userName: 'Parth',
		score: 3,
	},
	{
		userName: 'Puru',
		score: 2,
	},
];

// Welcome
var userName = readLineSync.question("Hi! What's your name?\n");

console.log(
	'\nWelcome,' + userName + '!!! To ' + chalk.red('Valorant Game Quiz\n')
);

// Play the quiz
for (var i = 0; i < questionsToAsk.length; ++i) {
	playQuestion(questionsToAsk[i]);
}

// Their score
console.log(
	'Thank you!! Just know I always ' +
		chalk.redBright('LOVE YOU') +
		' xD.\n' +
		chalk.yellow('SCORE') +
		': ' +
		chalk.cyanBright(points) +
		'\n'
);

// Let them know of scores of my friends.
console.log(
	'Best scores of my friends are here, ping me to add yours with a screenshot!'
);
for (var i = 0; i < userScores.length; ++i) {
	console.log(
		chalk.yellow(userScores[i].userName) +
			': ' +
			chalk.cyanBright(userScores[i].score)
	);
}
