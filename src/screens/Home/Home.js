import React from 'react'
import { Heading, Transform } from '../../components'
import { ReactComponent as Checked } from '../../media/checked.svg'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// Home
//x//////////////////////////////////////////////////

const uses = [
  'Hooks',
  'Code splitting (Suspense)',
  'Routing (React Router)',
  'Cloning elements',
  'CSSinJS (Styled Components)',
  'Themes (Styled Components)',
  'Formatting (Prettier)',
  'REST (JSON Server)',
  'SVG Imports (CRA)',
  'Render props',
  'Fragments',
  'Portals',
  'Installable (PWA)',
  'Build (CRA)',
  'Notifications (React Toastify)',
  'Environment variables',
  'Error boundaries',
  'Animation (Framer Motion)',
  'Refs',
]

export const Home = () => (
  <Transform>
    <Heading type='h1'>Home</Heading>
    <h4>USES:</h4>
    <List>
      {uses.map(item => (
        <Item key={item}>
          <SChecked /> {item}
        </Item>
      ))}
    </List>
  </Transform>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const List = styled.ul(
  () => css`
    margin: 0;
    padding: 0;
  `
)

const SChecked = styled(Checked)(
  ({ theme }) => css`
    fill: ${theme.colors.secondary};
    width: 100%;
    height: auto;
  `
)

const Item = styled.li(
  () => css`
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 0.5rem;
    margin: 0;
    border-bottom: 1px solid #e1e1e1;
    padding: 1rem 1rem 1rem 0;
  `
)
