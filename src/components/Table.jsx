import { Hand } from './Hand';
import { QuestionCard } from './QuestionCard';
import { useState } from 'react';
import '../styles/table.css';
import { PlayArea } from './PlayArea';
import { GameOver } from './GameOver';

export const Table = () => {
	const [playerCards, setPlayedCards] = useState([]);

	const [lives, setLives] = useState(3);
	const [score, setScore] = useState(0);
	const [hand, setHand] = useState([
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

	function playedCards(event) {
		setPlayedCards((currCards) => {
			return [event.target.id, ...currCards];
		});
		let chosenCard = event.target.id;
		const newHand = hand.filter((card) => card !== chosenCard);
		setHand(newHand);
	}

	return (
		<div>
			{lives === 0 ? (
				<GameOver score={score} />
			) : (
				<>
					<h2>Lives: {lives}</h2>
					<h2>Score: {score}</h2>
					<QuestionCard
						setPlayedCards={setPlayedCards}
						playerCards={playerCards}
						setScore={setScore}
						setLives={setLives}
						setHand={setHand}
					/>
					<PlayArea
						playerCards={playerCards}
						setPlayedCards={setPlayedCards}
						setHand={setHand}
					/>
					<Hand playedCards={playedCards} hand={hand} />
				</>
			)}
		</div>
	);
};
