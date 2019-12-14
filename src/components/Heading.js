import React from 'react'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// Heading
//x//////////////////////////////////////////////////

export const Heading = ({
  type = 'h1',
  margin = '0 0 1rem 0',
  children,
  ...props
}) => (
  <SHeading margin={margin} {...props} as={type} type={type}>
    {children}
  </SHeading>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SHeading = styled.h1(
  ({ type, margin }) => css`
    font-size: ${type === 'h1' && '2rem'};
    font-size: ${type === 'h2' && '1.5rem'};
    font-size: ${type === 'h3' && '1.17rem'};
    font-size: ${type === 'h4' && '1.33rem'};
    margin: ${margin};
  `
)
