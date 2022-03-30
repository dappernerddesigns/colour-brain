import { questions, questionGenerator, answerCheck } from '../utils/questions';
import '../styles/questionCard.css';
import { useState, useEffect } from 'react';

export const QuestionCard = ({
	setPlayedCards,
	playerCards,
	setScore,
	setLives,
	setHand,
}) => {
	const [challenge, setChallenge] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [showAnswer, setShowAnswer] = useState(false);
	const [message, setMessage] = useState('');
	const [turn, setTurn] = useState(true);

	const quCard = questionGenerator(questions);
	useEffect(() => {
		setChallenge(quCard);
		setIsLoading(false);
	}, [turn]);

	const resolveTurn = (check) => {
		if (check === true) {
			setScore((currScore) => currScore + 1);
			setMessage('Correct!');
		} else {
			setMessage('Oh no! You loose a life');
			setLives((currLives) => currLives - 1);
		}
	};
	function handleClick() {
		setShowAnswer(true);
		let resolve = answerCheck(challenge, playerCards);
		resolveTurn(resolve);
	}

	function newQuestion() {
		setMessage('');
		setShowAnswer(false);
		setTurn(false);
		setPlayedCards([]);
		setHand([
			'Red',
			'Orange',
			'Yellow',
			'Green',
			'Blue',
			'Purple',
			'Pink',
			'Brown',
			'Black',
			'Grey',
			'White',
		]);
		const quCard = questionGenerator(questions);
		setChallenge(quCard);
	}

	return (
		<div className='cardContainer'>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{showAnswer ? (
						<>
							<div className='q-card-answer'>
								{challenge.answer.map((result) => {
									return (
										<div
											className='answers'
											id={result}
											key={result}></div>
									);
								})}
							</div>
							<h3 className='message'>{message}</h3>

							<button
								className='tableButton'
								onClick={newQuestion}>
								Next Question
							</button>
						</>
					) : (
						<>
							<div className='q-card'>
								<h2>{challenge.question}</h2>

								<p>{challenge.answer.length} colour(s)</p>
							</div>
							{playerCards.length === challenge.answer.length ? (
								<button
									className='tableButton'
									onClick={handleClick}>
									Submit
								</button>
							) : null}
						</>
					)}
				</>
			)}
		</div>
	);
};
