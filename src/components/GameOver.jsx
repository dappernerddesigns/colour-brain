import '../styles/gameOver.css';

export const GameOver = ({ score }) => {
	function restart() {
		window.location.reload(false);
	}
	return (
		<div className='container'>
			<h1 className='mainH1'>Game Over!</h1>
			<h2 className='score'>Your score was {score}</h2>
			<button className='start' onClick={restart}>
				Restart
			</button>
		</div>
	);
};
