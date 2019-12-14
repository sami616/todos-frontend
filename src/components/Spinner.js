import React from 'react'
import styled, { css, keyframes } from 'styled-components'

//x//////////////////////////////////////////////////
// Spinner
//x//////////////////////////////////////////////////

export const Spinner = ({ margin, small, white, ...props }) => (
  <SSpinner margin={margin} small={small} white={white} {...props} />
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const spin = keyframes`
  to {transform: rotate(360deg);}
`

const SSpinner = styled.div(
  ({ theme, margin, small, white }) => css`
    width: 2rem;
    width: ${small && '1rem'};
    height: 2rem;
    height: ${small && '1rem'};
    margin: ${margin};
    flex: 0 0 auto;
    border-width: 1px;
    border-style: solid;
    border-radius: ${theme.radius.large};
    border-color: ${theme.colors.primary};
    border-color: ${white && '#fff'};
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    animation: ${spin} 0.6s linear infinite;
  `
)
