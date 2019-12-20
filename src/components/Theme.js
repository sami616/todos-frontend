import React from 'react'
import { ThemeProvider } from 'styled-components'

//x//////////////////////////////////////////////////
// Theme
//x//////////////////////////////////////////////////

export const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      colors: {
        primary: 'hsla(280, 71%, 34%, 1)',
        primaryDark: 'hsla(280, 71%, 24%, 1)',
        primaryLight: 'hsla(280, 71%, 44%, 1)',
        secondary: 'hsla(321, 87%, 39%, 1)',
        secondaryDark: 'hsla(321, 87%, 29%, 1)',
        secondaryLight: 'hsla(321, 87%, 49%, 1)',
        tertiary: 'hsla(347, 84%, 60%, 1)',
      },
      radius: {
        large: '10rem',
        medium: '0.3rem',
      },
    }}>
    {children}
  </ThemeProvider>
)
