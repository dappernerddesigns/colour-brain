import '../styles/hand.css';
export const Hand = ({ playedCards }) => {
	return (
		<div className='hand'>
			<div className='card' id='Red' onClick={playedCards}>
				<h2 className='colour-text'>Red</h2>
			</div>
			<div className='card' id='Orange' onClick={playedCards}>
				<h2 className='colour-text'>Orange</h2>
			</div>
			<div className='card' id='Yellow' onClick={playedCards}>
				<h2 className='colour-text'>Yellow</h2>
			</div>
			<div className='card' id='Green' onClick={playedCards}>
				<h2 className='colour-text'>Green</h2>
			</div>
			<div className='card' id='Blue' onClick={playedCards}>
				<h2 className='colour-text'>Blue</h2>
			</div>
			<div className='card' id='Purple' onClick={playedCards}>
				<h2 className='colour-text'>Purple</h2>
			</div>
			<div className='card' id='Pink' onClick={playedCards}>
				<h2 className='colour-text'>Pink</h2>
			</div>
			<div className='card' id='Brown' onClick={playedCards}>
				<h2 className='colour-text'>Brown</h2>
			</div>
			<div className='card' id='Black' onClick={playedCards}>
				<h2 className='colour-text'>Black</h2>
			</div>
			<div className='card' id='Grey' onClick={playedCards}>
				<h2 className='colour-text'>Grey</h2>
			</div>
			<div className='card' id='White' onClick={playedCards}>
				<h2 className='colour-text'>White</h2>
			</div>
		</div>
	);
};
