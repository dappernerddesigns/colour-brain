export const GameOver = ({ score }) => {
	function restart() {
		window.location.reload(false);
	}
	return (
		<div>
			<h1>Game Over!</h1>
			<h2>Your score was {score}</h2>
			<button onClick={restart}>Restart</button>
		</div>
	);
};
