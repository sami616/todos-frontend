import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as Cross } from '../media/cross.svg'
import { motion } from 'framer-motion'
import { Portal } from './Portal'

//x//////////////////////////////////////////////////
// Modal
//x//////////////////////////////////////////////////

export const Modal = ({ isOpen, setClose, children }) => {
  const onClose = e => {
    if (e.target.hasAttribute('data-close')) setClose()
  }

  return (
    isOpen && (
      <Portal>
        <SOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          data-close
          onClick={onClose}>
          <SContent initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            {children}
            <SClose data-close>×</SClose>
          </SContent>
        </SOverlay>
      </Portal>
    )
  )
}

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SOverlay = styled(motion.div)(
  () => css`
    position: fixed;
    z-index: 2;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
)

const SContent = styled(motion.div)(
  ({ theme }) => css`
    padding: 1rem;
    max-width: 600px;
    width: 100%;
    background: #fff;
    position: relative;
    border-radius: ${theme.radius.medium};
    max-height: calc(100vh - 2rem);
    overflow: auto;
  `
)

const SClose = styled(Cross)(
  ({ theme }) => css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    font-size: 2.5rem;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 1rem;
    height: auto;
    &:hover {
      fill: ${theme.colors.primary};
    }
  `
)
