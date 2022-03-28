export const Start = ({ setStart }) => {
	function begin() {
		setStart(true);
	}

	return (
		<div className='tutorial'>
			<h2> Tutorial</h2>
			<p>
				In your hand are ten colour cards, each question will require
				you to play a certain number of cards onto the table. If you
				place a card and change your mind, click the card to remove it
				from the play area. When ready press the submit button to check
				your answer. Be warned, you only have three lives! Get an answer
				wrong and you loose a life. Loose all three and the game ends.
				Good luck!
			</p>
			<button className='start' onClick={begin}>
				Start!
			</button>
		</div>
	);
};
