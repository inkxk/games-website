import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { Game } from 'types/GlobalTypes'
import { API_HOST, API_KEY } from './constants'
import GameListRender from './GameList.render'

const GameListContainer = (): ReactElement => {
	const [games, setGames] = useState<Game[]>([])
	const [err, setErr] = useState<string>('')

	useEffect(() => {
		axios
			.get('/games', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'X-RapidAPI-Host': API_HOST,
					'X-RapidAPI-Key': API_KEY,
				},
				params: {
					platform: 'browser',
				},
			})
			.then(res => setGames(res.data))
			.catch(e => setErr(e.message))
	}, [])

	return <GameListRender games={games} err={err} />
}

export default GameListContainer
