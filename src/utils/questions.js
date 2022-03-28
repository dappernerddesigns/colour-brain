const questions = [
	{
		question: 'Lemon',
		answer: ['Yellow'],
	},
	{
		question: 'Lime',
		answer: ['Green'],
	},
	{
		question: 'Pac-Man Ghosts',
		answer: ['Red', 'Pink', 'Blue', 'Orange'],
	},
	{
		question: `Deadpool's costume`,
		answer: ['Red', 'Black'],
	},
	{
		question: `Batman's costume`,
		answer: ['Black'],
	},
	{
		question: 'Vault-tec jumpsuit',
		answer: ['Blue', 'Yellow'],
	},
	{
		question: 'Worms',
		answer: ['Pink'],
	},
	{
		question: 'Canadian flag',
		answer: ['Red', 'White'],
	},
	{
		question: 'Sylvester',
		answer: ['Black', 'White'],
	},
	{
		question: 'McDonalds Logo',
		answer: ['Yellow'],
	},
	{
		question: 'Coffee',
		answer: ['Brown'],
	},
	{
		question: 'Stop sign',
		answer: ['Red', 'White'],
	},
	{
		question: 'Lime',
		answer: ['Green'],
	},
	{
		question: 'UK number plates',
		answer: ['Yellow', 'White'],
	},
	{
		question: 'Pride Flag',
		answer: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],
	},
	{
		question: 'Google Chrome logo',
		answer: ['Red', 'Green', 'Yellow', 'Blue'],
	},
	{
		question: 'Pedestrian crossing',
		answer: ['White', 'Black'],
	},
	{
		question: 'Creme Egg wrapper',
		answer: ['Red', 'Yellow', 'Blue'],
	},
	{
		question: 'Young Bell Pepper',
		answer: ['Green'],
	},
	{
		question: 'Mooli',
		answer: ['White'],
	},
	{
		question: `__ sky at night, shepherd's delight,`,
		answer: ['Red'],
	},
	{
		question: 'Bugs Bunny',
		answer: ['Grey', 'White'],
	},
];

const questionGenerator = (questions) => {
	let random = Math.floor(Math.random() * questions.length + 1);
	let randomQuestion = questions[random];

	return randomQuestion;
};

const answerCheck = (question, answer) => {
	let cardAnswer = question.answer.sort();
	let userAnswer = answer.sort();
	return cardAnswer.every((colour, index) => colour === userAnswer[index]);
};

const resolveTurn = (check, score, lives) => {
	if (check) {
		score += 1;

		return score;
	} else {
		lives -= 1;
		return lives;
	}
};
module.exports = { questionGenerator, questions, answerCheck, resolveTurn };
