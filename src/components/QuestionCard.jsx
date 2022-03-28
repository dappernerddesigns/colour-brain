import { questions, questionGenerator, answerCheck } from '../utils/questions';
import '../styles/questionCard.css';
import { useState, useEffect } from 'react';

export const QuestionCard = ({
	setPlayedCards,
	playerCards,
	setScore,
	setLives,
}) => {
	const [challenge, setChallenge] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [showAnswer, setShowAnswer] = useState(false);
	const [turn, setTurn] = useState(true);

	useEffect(() => {
		const quCard = questionGenerator(questions);
		setChallenge(quCard);
		setIsLoading(false);
	}, [turn]);

	const resolveTurn = (check) => {
		if (check === true) {
			setScore((currScore) => currScore + 1);
		} else {
			setLives((currLives) => currLives - 1);
		}
	};
	function handleClick() {
		setShowAnswer(true);
		let resolve = answerCheck(challenge, playerCards);
		resolveTurn(resolve);
	}

	function newQuestion() {
		setShowAnswer(false);
		setTurn(false);
		setPlayedCards([]);
		const quCard = questionGenerator(questions);
		setChallenge(quCard);
	}

	return (
		<>
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

							<button onClick={newQuestion}>Next Question</button>
						</>
					) : (
						<>
							<div className='q-card'>
								<h2>{challenge.question}</h2>

								<p>{challenge.answer.length} colour(s)</p>
							</div>
							{playerCards.length === challenge.answer.length ? (
								<button onClick={handleClick}>Submit</button>
							) : null}
						</>
					)}
				</>
			)}
		</>
	);
};
