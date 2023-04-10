import React, { createContext, useContext } from 'react'

interface ThemeContextData {
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

const ThemeContext = createContext({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext)
