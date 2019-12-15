import React from 'react'
import { Heading, Transform } from '../../components'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Search } from '../../media/search.svg'

//x//////////////////////////////////////////////////
// NotFound
//x//////////////////////////////////////////////////

export const NotFound = () => (
  <STranform axis='y'>
    <SSearch />
    <Heading margin='0' type='h1'>
      Not found (404)
    </Heading>
    <NavLink to='/'>Go home</NavLink>
  </STranform>
)

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

const SSearch = styled(Search)(
  () => css`
    max-width: 160px;
    width: 100%;
    height: auto;
  `
)
