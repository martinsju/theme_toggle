import React from 'react'
import ReactSwitch from 'react-switch'
import { useTheme } from '../../hooks/theme'

const ToggleSwitcher: React.FC = function () {
	const { toggleTheme } = useTheme()

	const handleToggleTheme = () => {
		toggleTheme()
	}

	return (
		<ReactSwitch
			checked={true}
			onChange={handleToggleTheme}
			checkedIcon={false}
			uncheckedIcon={false}
			height={10}
			width={40}
			handleDiameter={20}
			offColor='#6c6c6c'
			onColor='#0099ad'
		/>
	)
}

export default ToggleSwitcher
