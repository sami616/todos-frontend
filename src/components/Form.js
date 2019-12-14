import React from 'react'
import styled, { css } from 'styled-components'
import { Heading } from './Heading'

//x//////////////////////////////////////////////////
// Form
//x//////////////////////////////////////////////////

export const Form = React.forwardRef(
  ({ children, disabled, title, ...props }, ref) => (
    <form ref={ref} {...props}>
      <SFieldSet disabled={disabled}>
        {title && <Heading type='h2'>{title}</Heading>}
        {children}
      </SFieldSet>
    </form>
  )
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SFieldSet = styled.fieldset(
  () => css`
    border: none;
    padding: 0;
    margin: 0;
  `
)
