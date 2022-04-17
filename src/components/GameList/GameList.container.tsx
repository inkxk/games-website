import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react'
import useFetch from 'hooks/useFetch/useFetch'
import { Filter } from './types'
import GameListRender from './GameList.render'

const GameListContainer = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	})
	const { games, error } = useFetch(filter)

	const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({
			...current,
			[e.target.name]: e.target.value,
		}))
		e.preventDefault()
	}, [])

	return (
		<GameListRender games={games} err={error} onFilterChange={onFilterChange} />
	)
}

export default GameListContainer
