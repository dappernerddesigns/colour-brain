export const PlayArea = ({ playerCards, setPlayedCards, setHand }) => {
	const removeCard = (event) => {
		let cardInPlay = event.target.id;
		const newCards = playerCards.filter((card) => card !== cardInPlay);
		setPlayedCards(newCards);
		setHand((currCards) => {
			return [cardInPlay, ...currCards];
		});
	};

	return (
		<div>
			{playerCards.length === 0 ? (
				<h1 className='prompt'>Play a card!</h1>
			) : null}

			<div className='playArea'>
				{playerCards === undefined ? null : (
					<>
						{playerCards.map((cards) => {
							return (
								<div
									onClick={removeCard}
									key={cards}
									className='cardInPlay'
									id={cards}></div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
};
