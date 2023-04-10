import { DarkTheme } from '../styles/themes'

type CustomTheme = typeof DarkTheme

declare module 'styled-components' {
	export interface DefaultTheme extends CustomTheme {}
}
