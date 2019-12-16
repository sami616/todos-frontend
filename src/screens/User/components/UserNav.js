import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// UserNav
//x//////////////////////////////////////////////////

export const UserNav = ({ completeCount, incompleteCount }) => {
  const match = useRouteMatch()
  return (
    <SNav>
      <SNavLink to={`${match.url}/incomplete`}>
        Incomplete ({incompleteCount})
      </SNavLink>
      <SNavLink to={`${match.url}/complete`}>
        Complete ({completeCount})
      </SNavLink>
    </SNav>
  )
}

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
    color: ${theme.colors.tertiary};
    border-radius: ${theme.radius.medium};
    &.active {
      background: ${theme.colors.tertiary};
      color: #fff;
    }
  `
)
