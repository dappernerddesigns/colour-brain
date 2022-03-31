const questions = [
	{
		id: 1,
		question: 'Lemon',
		answer: ['Yellow'],
	},
	{
		id: 2,
		question: 'Lime',
		answer: ['Green'],
	},
	{
		id: 3,
		question: 'Pac-Man Ghosts',
		answer: ['Red', 'Pink', 'Blue', 'Orange'],
	},
	{
		id: 4,
		question: `Deadpool's costume`,
		answer: ['Red', 'Black'],
	},
	{
		id: 5,
		question: `Batman's costume`,
		answer: ['Black'],
	},
	{
		id: 6,
		question: 'Vault-tec jumpsuit',
		answer: ['Blue', 'Yellow'],
	},
	{
		id: 7,
		question: 'Worms',
		answer: ['Pink'],
	},
	{
		id: 8,
		question: 'Canadian flag',
		answer: ['Red', 'White'],
	},
	{
		id: 9,
		question: 'Sylvester',
		answer: ['Black', 'White'],
	},
	{
		id: 10,
		question: 'McDonalds Logo',
		answer: ['Yellow'],
	},
	{
		id: 11,
		question: 'Coffee',
		answer: ['Brown'],
	},
	{
		id: 12,
		question: 'Stop sign',
		answer: ['Red', 'White'],
	},
	{
		id: 13,
		question: 'Lime',
		answer: ['Green'],
	},
	{
		id: 14,
		question: 'UK number plates',
		answer: ['Yellow', 'White'],
	},
	{
		id: 15,
		question: 'Pride Flag',
		answer: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],
	},
	{
		id: 16,
		question: 'Google Chrome logo',
		answer: ['Red', 'Green', 'Yellow', 'Blue'],
	},
	{
		id: 17,
		question: 'Pedestrian crossing',
		answer: ['White', 'Black'],
	},
	{
		id: 18,
		question: 'Creme Egg wrapper',
		answer: ['Red', 'Yellow', 'Blue'],
	},
	{
		id: 19,
		question: 'Young Bell Pepper',
		answer: ['Green'],
	},
	{
		id: 20,
		question: 'Mooli',
		answer: ['White'],
	},
	{
		id: 21,
		question: `__ sky at night, shepherd's delight,`,
		answer: ['Red'],
	},
	{
		id: 22,
		question: 'Bugs Bunny',
		answer: ['Grey', 'White'],
	},
	{
		id: 23,
		question: 'Clown fish',
		answer: ['Orange', 'White'],
	},
	{
		id: 24,
		question: 'JCB',
		answer: ['Yellow'],
	},
	{
		id: 25,
		question: 'Suit that astronauts wear in the cockpit',
		answer: ['Orange'],
	},
	{
		id: 26,
		question: 'Subway Logo',
		answer: ['Green', 'Yellow', 'White'],
	},
	{
		id: 27,
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
		id: 28,
		question: 'Famous dye from the ancient world: Tyrian ___',
		answer: ['Purple'],
	},
	{
		id: 29,
		question: 'A period of exceptional success or good luck',
		answer: ['Purple'],
	},
	{
		id: 30,
		question: 'Rosa in Spanish and Italian',
		answer: ['Pink'],
	},
	{
		id: 31,
		question: 'Hotwheels logo',
		answer: ['Red', 'Yellow'],
	},
	{
		id: 32,
		question: 'Tik Tok app logo',
		answer: ['Black', 'White', 'Blue', 'Red'],
	},
	{
		id: 33,
		question: 'Luxury chocolate makers',
		answer: ['Green', 'Black'],
	},
	{
		id: 34,
		question: 'Strawberry Split ice lolly (without the stick)',
		answer: ['Red', 'Yellow'],
	},
	{
		id: 35,
		question: 'Pepsi logo',
		answer: ['Red', 'White', 'Blue'],
	},
	{
		id: 36,
		question: 'Lego logo',
		answer: ['Black', 'White', 'Yellow', 'Red'],
	},
	{
		id: 37,
		question: 'Welsh mountains that spread across Powys and Monmouthshire',
		answer: ['Black'],
	},
	{
		id: 38,
		question: `Dick Turpin's horse`,
		answer: ['Black'],
	},
	{
		id: 39,
		question: `Coats worn by Pontin's in-house entertainers`,
		answer: ['Blue'],
	},
	{
		id: 40,
		question: 'Room where actors rest before performances',
		answer: ['Green'],
	},
	{
		id: 41,
		question: 'Golden Gate Bridge',
		answer: ['Orange'],
	},
	{
		id: 42,
		question: 'The Creeper in Minecraft',
		answer: ['Black', 'Green'],
	},
	{
		id: 43,
		question: 'A goldfish if left in the dark for too long',
		answer: ['White'],
	},
	{
		id: 44,
		question: 'The most common colour of Lego brick of the last 5 years',
		answer: ['Grey'],
	},
	{
		id: 45,
		question: '20-Euro Note',
		answer: ['Blue'],
	},
	{
		id: 46,
		question: 'Snapchat logo',
		answer: ['Yellow', 'White', 'Black'],
	},
	{
		id: 47,
		question: 'According to research, colours that make people feel hungry',
		answer: ['Red', 'Yellow'],
	},
	{
		id: 48,
		question: 'Original Playstation 1',
		answer: ['Grey'],
	},
	{
		id: 49,
		question: 'Real Madrid home shirt',
		answer: ['Purple', 'White'],
	},
	{
		id: 50,
		question: 'Flag of South Korea',
		answer: ['Red', 'White', 'Blue', 'Black'],
	},
	{
		id: 51,
		question: 'Baby Zebra stripes',
		answer: ['White', 'Brown'],
	},
	{
		id: 52,
		question: 'Litmus paper when dipped in alkali',
		answer: ['Blue'],
	},
	{
		id: 53,
		question: 'DeWALT power tools',
		answer: ['Yellow', 'Black'],
	},
	{
		id: 54,
		question: 'Most common colours of bell pepper',
		answer: ['Red', 'Yellow', 'Orange', 'Green'],
	},
	{
		id: 55,
		question: 'Flag waved in motor racing indicating danger ahead',
		answer: ['Yellow'],
	},
	{
		id: 56,
		question: 'London Underground District Line',
		answer: ['Green'],
	},
	{
		id: 57,
		question: 'Colours of balls on an 8 ball pool table',
		answer: ['Yellow', 'Red', 'Black', 'White'],
	},
	{
		id: 58,
		question: 'UK Road sign for a tourist attraction',
		answer: ['Brown', 'White'],
	},
	// 	{
	//	id:,
	// 	question: '',
	// 	answer:
	// },
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
