import React, { ReactElement } from 'react'
import GameCard from 'components/GameCard/GameCard'
import { Game } from 'types/GlobalTypes'

type Props = {
	err?: string
	games: Game[]
}

const GameListRender = ({ err, games }: Props): ReactElement => {
	if (err) {
		return <p>Unable to fetch games</p>
	}
	if (!games?.length) {
		return <p>No games available</p>
	}
	return (
		<ul>
			{games.map(game => (
				<li key={game.id}>
					<GameCard content={game} />
				</li>
			))}
		</ul>
	)
}

export default GameListRender
