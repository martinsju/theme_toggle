import React from 'react'
import ReactSwitch from 'react-switch'

const ToggleSwitcher: React.FC = function () {
	const handleToggleTheme = () => {
		console.log('click')
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
