import React, { useState } from 'react'
import styled from 'styled-components'
import ToggleSwitcher from '../ToggleSwitcher'

const Container = styled.div`
	background-color: #14132d;
	padding: 15px;
	display: flex;
	justify-content: space-between;
`

const Header: React.FC = () => {
	const [a, setA] = useState()

	return (
		<Container>
			<h1>Theme Toggle</h1>
			<ToggleSwitcher />
		</Container>
	)
}

export default Header
