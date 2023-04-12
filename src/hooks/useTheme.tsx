import React, { createContext, useContext, useState } from 'react'
import { DarkTheme, LightTheme } from '../styles/themes'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import usePersistedState from './usePersistedState'

interface ThemeContextData {
	toggleTheme(): void
	theme: Theme
}

interface Theme {
	title: string
	colors: {
		primary: string
		secondary: string
		background: string
		text: string
	}
}

interface ProviderProps {
	children: React.ReactNode
}

const ThemeContext = createContext({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider: React.FC<ProviderProps> = ({ children }) => {
	// const [theme, setTheme] = useState<Theme>(DarkTheme)
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', DarkTheme)

	const toggleTheme = () => {
		setTheme((theme) => (theme.title === 'Dark' ? LightTheme : DarkTheme))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	)
}
