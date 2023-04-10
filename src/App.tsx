import React from 'react'
import Header from './components/Header'
import GlobalStyle from './styles/global'

const App: React.FC = function () {
	return (
		<div>
			<GlobalStyle />
			<Header />
		</div>
	)
}

export default App
