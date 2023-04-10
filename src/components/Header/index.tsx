import React from 'react'
import styled, { useTheme } from 'styled-components'
import ToggleSwitcher from '../ToggleSwitcher'

const Container = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	padding: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ToggleArea = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: space-between;
	gap: 5px;
`

const Title = styled.h1`
	font-size: 24px;
`

const Label = styled.label`
	font-size: 8px;
	font-weight: 100;
	color: ${(props) => props.theme.colors.text};
	text-align: center;
`

const Header: React.FC = () => {
	const theme = useTheme()

	return (
		<Container>
			<Title>Theme Toggle</Title>
			<ToggleArea>
				<ToggleSwitcher />
				<Label>Theme: {theme.title}</Label>
			</ToggleArea>
		</Container>
	)
}

export default Header
