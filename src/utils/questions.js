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
	{
		question: 'Clown fish',
		answer: ['Orange', 'White'],
	},
	{
		question: 'JCB',
		answer: ['Yellow'],
	},
	{
		question: 'Suit that astronauts wear in the cockpit',
		answer: ['Orange'],
	},
	{
		question: 'Subway Logo',
		answer: ['Green', 'Yellow', 'White'],
	},
	{
		question: 'Colour of Smarties in a traditional tube',
		answer: [
			'Brown',
			'Pink',
			'Red',
			'Orange',
			'Yellow',
			'Green',
			'Blue',
			'Purple',
		],
	},
	{
		question: 'Famous dye from the ancient world: Tyrian ___',
		answer: ['Purple'],
	},
	{
		question: 'A period of exceptional success or good luck',
		answer: ['Purple'],
	},
	{
		question: 'Rosa in Spanish and Italian',
		answer: ['Pink'],
	},
	{
		question: 'Hotwheels logo',
		answer: ['Red', 'Yellow'],
	},
	{
		question: 'Tik Tok app logo',
		answer: ['Black', 'White', 'Blue', 'Red'],
	},
	{
		question: 'Luxury chocolate makers',
		answer: ['Green', 'Black'],
	},
	{
		question: 'Strawberry Split ice lolly (without the stick)',
		answer: ['Red', 'Yellow'],
	},
	{
		question: 'Pepsi logo',
		answer: ['Red', 'White', 'Blue'],
	},
	{
		question: 'Lego logo',
		answer: ['Black', 'White', 'Yellow', 'Red'],
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
