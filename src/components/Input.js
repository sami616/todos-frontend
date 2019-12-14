import React from 'react'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// Input
//x//////////////////////////////////////////////////

export const Input = React.forwardRef(({ label, ...props }, ref) => (
  <SRow>
    <SLabel htmlFor={props.id}>{label}</SLabel>
    <SInput ref={ref} {...props} />
  </SRow>
))

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SInput = styled.input(
  ({ theme }) => css`
    padding: 0.5rem 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    }

    &:disabled {
      opacity: 0.5;
      background: #fff;
    }
    &:focus {
      border-bottom: 1px solid ${theme.colors.primary};
    }
  `
)

const SRow = styled.div(
  () => css`
    margin: 0 0 1rem 0;
  `
)

const SLabel = styled.label(
  () => css`
    margin: 0 0.5rem 0 0;
    font-size: 0.8rem;
    color: #888;
  `
)
