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
	function playedCards(event) {
		setPlayedCards((currCards) => {
			return [event.target.id, ...currCards];
		});
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
					/>
					<PlayArea
						playerCards={playerCards}
						setPlayedCards={setPlayedCards}
					/>
					<Hand playedCards={playedCards} />
				</>
			)}
		</div>
	);
};
