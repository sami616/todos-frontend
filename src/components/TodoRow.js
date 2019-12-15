import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { ReactComponent as Checked } from '../media/checked.svg'

//x//////////////////////////////////////////////////
// TodoRow
//x//////////////////////////////////////////////////

export const TodoRow = ({ children, todo, ...props }) => (
  <SRow
    positionTransition
    initial={{ x: 20 }}
    animate={{ x: 0 }}
    exit={{ opacity: 0 }}
    {...props}>
    <SChecked completed={todo.completed ? 'true' : 'false'} />
    {todo.name}
    <ButtonGrid>{children}</ButtonGrid>
  </SRow>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SRow = styled(motion.li)(
  () => css`
    padding: 1rem;
    display: grid;
    align-items: center;
    gap: 0.5rem;
    grid-template-columns: 20px 1fr auto;
    border-top: 1px solid #e1e1e1;
    &:first-child {
      border: none;
    }
  `
)

const ButtonGrid = styled.div(
  () => css`
    display: grid;
    grid-template-columns: auto auto;
    gap: 0.5rem;
  `
)

const SChecked = styled(Checked)(
  ({ completed, theme }) => css`
    width: 100%;
    height: auto;
    fill: ${theme.colors.tertiary};
    fill: ${completed === 'true' && '#ccc'};
  `
)
