export const PlayArea = ({ playerCards }) => {
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
