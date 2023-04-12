import React from 'react'
import Header from './components/Header'
import GlobalStyle from './styles/global'
import { CustomThemeProvider } from './hooks/useTheme'

const App: React.FC = function () {
	return (
		<CustomThemeProvider>
			<GlobalStyle />
			<Header />
		</CustomThemeProvider>
	)
}

export default App
