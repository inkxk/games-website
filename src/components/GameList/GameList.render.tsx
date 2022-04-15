import React, { ReactElement } from 'react'
import GameCard from 'components/GameCard/GameCard'
import { Game } from 'types/GlobalTypes'
import { List, ListItem } from './styles'

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
		<List>
			{games.map(game => (
				<ListItem key={game.id}>
					<GameCard content={game} />
				</ListItem>
			))}
		</List>
	)
}

export default GameListRender
