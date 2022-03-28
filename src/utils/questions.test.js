const {
	questions,
	questionGenerator,
	answerCheck,
	resolveTurn,
} = require('./questions');

describe('Question generator', () => {
	test('Returns desired questions', () => {
		let actual = questions[0];
		let expected = {
			question: 'Lemon',
			answer: ['Yellow'],
		};

		expect(actual).toEqual(expected);
	});
});

describe('Answer check', () => {
	test('Function returns sorted input array', () => {
		let question = {
			question: 'Stop Sign',
			answer: ['Red', 'White'],
		};

		let userAnswer = ['White', 'Red'];

		let actual = answerCheck(question, userAnswer);
		let expected = true;

		expect(actual).toBe(expected);
	});
});

describe('Resolve turn', () => {
	test('Function updates scores appropriately with small array', () => {
		let score = 12;
		let lives = 3;
		let question = {
			question: 'Stop Sign',
			answer: ['Red', 'White'],
		};

		let userAnswer = ['White', 'Red'];

		let turnToResolve = answerCheck(question, userAnswer);
		let actual = resolveTurn(turnToResolve, score, lives);
		let expected = 13;

		expect(actual).toBe(expected);
	});
	test('Function updates lives appropriately with small array', () => {
		let score = 12;
		let lives = 3;
		let question = {
			question: 'Stop Sign',
			answer: ['Red', 'White'],
		};

		let userAnswer = ['Blue', 'Red'];

		let turnToResolve = answerCheck(question, userAnswer);
		let actual = resolveTurn(turnToResolve, score, lives);
		let expected = 2;

		expect(actual).toBe(expected);
	});
	test('Function updates scores appropriately with larger array', () => {
		let score = 12;
		let lives = 3;
		let question = {
			question: 'Pac-Man Ghosts',
			answer: ['Red', 'Pink', 'Blue', 'Orange'],
		};

		let userAnswer = ['Pink', 'Red', 'Orange', 'Blue'];

		let turnToResolve = answerCheck(question, userAnswer);
		let actual = resolveTurn(turnToResolve, score, lives);
		let expected = 13;

		expect(actual).toBe(expected);
	});
	test('Function updates lives appropriately with larger array', () => {
		let score = 12;
		let lives = 3;
		let question = {
			question: 'Pac-Man Ghosts',
			answer: ['Red', 'Pink', 'Blue', 'Orange'],
		};

		let userAnswer = ['White', 'Red', 'Orange', 'Blue'];

		let turnToResolve = answerCheck(question, userAnswer);
		let actual = resolveTurn(turnToResolve, score, lives);
		let expected = 2;

		expect(actual).toBe(expected);
	});
	test('Function updates scores appropriately with larger array', () => {
		let score = 12;
		let lives = 3;
		let question = {
			question: 'Pride Flag',
			answer: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],
		};

		let userAnswer = ['Purple', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'];

		let turnToResolve = answerCheck(question, userAnswer);
		let actual = resolveTurn(turnToResolve, score, lives);
		let expected = 13;

		expect(actual).toBe(expected);
	});
});
