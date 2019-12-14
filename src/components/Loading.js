import React from 'react'
import { Spinner } from './'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// Loading
//x//////////////////////////////////////////////////

export const Loading = ({ text, fullPage, ...props }) => (
  <SLoading text={text} fullPage={fullPage} {...props}>
    <Spinner /> {text}
  </SLoading>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SLoading = styled.div(
  ({ fullPage, text }) => css`
    padding: 1rem;
    display: grid;
    grid-template-columns: auto;
    grid-template-columns: ${text && 'auto auto'};
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    justify-content: ${fullPage && 'center'};
    position: ${fullPage && 'fixed'};
    top: ${fullPage && '0'};
    left: ${fullPage && '0'};
    background: ${fullPage && '#fff'};
    width: ${fullPage && '100vw'};
    height: ${fullPage && '100vh'};
  `
)
