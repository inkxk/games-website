import React, { ReactElement } from 'react'
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'
import { Game } from 'types/GlobalTypes'
import {
	StyledLink,
	Img,
	Title,
	Details,
	Description,
	Genre,
	Icon,
} from './styles'
import { BROWSER, WINDOWS } from './constants'

type Props = {
	content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
	const { id, title, thumbnail, short_description, genre, platform } = content
	const icons = platform.split(',').map(p => {
		let icon = null
		switch (p.trim()) {
			case BROWSER:
				icon = (
					<Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} />
				)
				break
			case WINDOWS:
				icon = <Icon key={`${id}-window`} alt="window icon" src={windowsIcon} />
				break
			default:
				break
		}
		return icon
	})
	const link = `/game/${id}`
	return (
		<StyledLink to={link}>
			<Img alt={`${title} logo`} src={thumbnail} />
			<Details>
				<Title>{title}</Title>
				<Description>{short_description}</Description>
				<Genre>{genre}</Genre>
				{icons}
			</Details>
		</StyledLink>
	)
}

export default GameCard
