import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// RootNav
//x//////////////////////////////////////////////////

export const RootNav = () => (
  <SNav>
    <SNavLink exact to='/'>
      Home
    </SNavLink>
    <SNavLink to='/users'>Users</SNavLink>
  </SNav>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SNav = styled.nav(
  () => css`
    display: flex;
    margin: 0 0 1rem 0;
  `
)

const SNavLink = styled(NavLink)(
  ({ theme }) => css`
    padding: 0.5rem 1rem;
    color: ${theme.colors.secondary};
    border-radius: ${theme.radius.medium};
    &.active {
      background: ${theme.colors.secondary};
      color: #fff;
    }
  `
)
