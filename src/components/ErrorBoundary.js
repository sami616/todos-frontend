/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'
import { Heading, Transform } from './'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// ErrorBoundary
//x//////////////////////////////////////////////////

export class ErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <STranform axis='y'>
          <Heading margin='0' type='h1'>
            💀 {this.props.fallback || 'Something went wrong'}
          </Heading>
        </STranform>
      )
    }
    return this.props.children
  }
}

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const STranform = styled(Transform)(
  () => css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    background: #fff;
    place-items: center;
    place-content: center;
  `
)
