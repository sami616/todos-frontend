import React from 'react'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// ResponsiveGrid
//x//////////////////////////////////////////////////

export const ResponsiveGrid = ({
  children,
  gap = '1rem',
  type = 'auto-fit',
  min = '250px',
  max = '1fr',
  margin = '0',
  ...props
}) => (
  <SResponsiveGrid
    margin={margin}
    gap={gap}
    type={type}
    min={min}
    max={max}
    {...props}>
    {children}
  </SResponsiveGrid>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SResponsiveGrid = styled.div(
  ({ min, max, type, gap, margin }) => css`
    display: grid;
    margin: ${margin};
    grid-template-columns: repeat(${type}, minmax(${min}, ${max}));
    grid-gap: ${gap};
  `
)
