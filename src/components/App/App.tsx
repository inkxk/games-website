import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'components/Home/Home'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'

const App = (): ReactElement => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
