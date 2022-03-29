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
	{
		question: 'Welsh mountains that spread across Powys and Monmouthshire',
		answer: ['Black'],
	},
	{
		question: `Dick Turpin's horse`,
		answer: ['Black'],
	},
	{
		question: `Coats worn by Pontin's in-house entertainers`,
		answer: ['Blue'],
	},
	{
		question: 'Room where actors rest before performances',
		answer: ['Green'],
	},
	{
		question: 'Golden Gate Bridge',
		answer: ['Orange'],
	},
	{
		question: 'The Creeper in Minecraft',
		answer: ['Black', 'Green'],
	},
	{
		question: 'A goldfish if left in the dark for too long',
		answer: ['White'],
	},
	{
		question: 'The most common colour of Lego brick of the last 5 years',
		answer: ['Grey'],
	},
	{
		question: '20-Euro Note',
		answer: ['Blue'],
	},
	{
		question: 'Snapchat logo',
		answer: ['Yellow', 'White', 'Black'],
	},
	{
		question: 'According to research, colours that make people feel hungry',
		answer: ['Red', 'Yellow'],
	},
	{
		question: 'Original Playstation 1',
		answer: ['Grey'],
	},
	{
		question: 'Real Madrid home shirt',
		answer: ['Purple', 'White'],
	},
	{
		question: 'Flag of South Korea',
		answer: ['Red', 'White', 'Blue', 'Black'],
	},
	{
		question: 'Baby Zebra stripes',
		answer: ['White', 'Brown'],
	},
	{
		question: 'Litmus paper when dipped in alkali',
		answer: ['Blue'],
	},
	{
		question: 'DeWALT power tools',
		answer: ['Yellow', 'Black'],
	},
	{
		question: 'Most common colours of bell pepper',
		answer: ['Red', 'Yellow', 'Orange', 'Green'],
	},
	{
		question: 'Flag waved in motor racing indicating danger ahead',
		answer: ['Yellow'],
	},
	{
		question: 'London Underground District Line',
		answer: ['Green'],
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
