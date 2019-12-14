import React from 'react'
import { ThemeProvider } from 'styled-components'

//x//////////////////////////////////////////////////
// Theme
//x//////////////////////////////////////////////////

export const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      colors: {
        primary: '#691992',
        secondary: '#BC0D80',
        tertiary: '#EF4367',
      },
      radius: {
        large: '10rem',
        medium: '0.3rem',
      },
    }}>
    {children}
  </ThemeProvider>
)
