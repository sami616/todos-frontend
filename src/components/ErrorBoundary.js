import React from 'react'
import { Heading, Transform } from './'
import styled, { css } from 'styled-components'
import { ReactComponent as Skull } from '../media/skull.svg'

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
          <SSkull />
          <Heading margin='0' type='h1'>
            {this.props.fallback || 'Something went wrong'}
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
    gap: 1rem;
    background: #fff;
    place-items: center;
    place-content: center;
    padding: 20px;
    text-align: center;
  `
)

const SSkull = styled(Skull)(
  () => css`
    max-width: 160px;
    width: 1000%;
    height: auto;
  `
)
