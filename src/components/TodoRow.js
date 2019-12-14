/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

//x//////////////////////////////////////////////////
// TodoRow
//x//////////////////////////////////////////////////

export const TodoRow = ({ children, name, ...props }) => (
  <SRow initial={{ x: 20 }} animate={{ x: 0 }} exit={{ opacity: 0 }} {...props}>
    <span> 📝 {name}</span>
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
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid #e1e1e1;
    &:last-child {
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
