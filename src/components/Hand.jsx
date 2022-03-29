import '../styles/hand.css';

export const Hand = ({ playedCards, hand }) => {
	return (
		<div className='hand'>
			{hand.map((card) => {
				return (
					<div
						className='card'
						id={card}
						onClick={playedCards}
						key={card}>
						<h2 className='colour-text'>{card}</h2>
					</div>
				);
			})}
		</div>
	);
};
