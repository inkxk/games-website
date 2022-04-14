import React, { ReactElement } from 'react'
import GameList from 'components/GameList/GameList'
import withErrorBoundary from 'hoc/withErrorBoundary/withErrorBoundary'

const Home = (): ReactElement => {
	return <GameList />
}

export default withErrorBoundary(Home)
