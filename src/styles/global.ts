import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}

`
