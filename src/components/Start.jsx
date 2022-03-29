import { useState } from 'react';
import '../styles/start.css';
export const Start = ({ setStart }) => {
	const [isVisible, setIsVisible] = useState(false);

	function show() {
		if (isVisible === false) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}
	function begin() {
		setStart(true);
	}

	return (
		<div className='tutorial'>
			{isVisible ? null : (
				<div className='prompt'>
					<h3>
						New players check the tutorial below for instructions
					</h3>
					<p>
						Colour Brain is a brilliantly simple card game from Big
						Potato Games, you can find their game at many reputable
						stores. This app is a small project purely for fun. If
						you enjoy playing it please consider purchasing the card
						game for two player or team fun.
					</p>
				</div>
			)}
			{isVisible ? (
				<>
					<h2> Tutorial</h2>
					<p>
						In your hand are eleven colour cards, each question will
						require you to play a certain number of cards onto the
						table.
					</p>
					<p>
						If you place a card and change your mind, click the card
						on the table to remove it from the play area. When ready
						press the submit button to check your answer.
					</p>
					<p>
						Be warned, you only have three lives! Get an answer
						wrong and you will loose a life. Loose all three and the
						game will end. Good luck!
					</p>
				</>
			) : (
				<button className='start' onClick={show}>
					Tutorial
				</button>
			)}

			<button className='start' onClick={begin}>
				Start!
			</button>
		</div>
	);
};
