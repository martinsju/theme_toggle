import React from 'react'
import ReactSwitch from 'react-switch'
import { useTheme } from '../../hooks/useTheme'

const ToggleSwitcher: React.FC = function () {
	const { theme, toggleTheme } = useTheme()

	const handleToggleTheme = () => {
		toggleTheme()
	}

	return (
		<ReactSwitch
			checked={theme.title === 'Dark'}
			onChange={handleToggleTheme}
			checkedIcon={false}
			uncheckedIcon={false}
			height={10}
			width={40}
			handleDiameter={20}
			offColor={theme.colors.secondary}
			onColor={theme.colors.secondary}
		/>
	)
}

export default ToggleSwitcher
