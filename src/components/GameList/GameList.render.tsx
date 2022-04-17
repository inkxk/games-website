import React, { ChangeEvent, ReactElement } from 'react'
import GameCard from 'components/GameCard/GameCard'
import GameFilter from 'components/Gamefilter/GameFilter'
import { Game } from 'types/GlobalTypes'
import { List, ListItem } from './styles'

type Props = {
	err?: string
	games: Game[]
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameListRender = ({
	err,
	games,
	onFilterChange,
}: Props): ReactElement => {
	if (err) {
		return <p>Unable to fetch games</p>
	}
	if (!games?.length) {
		return <p>No games available</p>
	}
	return (
		<>
			<GameFilter onChange={onFilterChange} />
			<List>
				{games.map(game => (
					<ListItem key={game.id}>
						<GameCard content={game} />
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GameListRender
