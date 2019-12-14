import { createGlobalStyle, css } from 'styled-components'

//x//////////////////////////////////////////////////
// GlobalStyle
//x//////////////////////////////////////////////////

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    body {
      margin: 1rem;
    }

    ::-moz-focus-inner {
      border: 0;
    }
    * {
      box-sizing: border-box;
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      outline: none;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
    }
  `
)
