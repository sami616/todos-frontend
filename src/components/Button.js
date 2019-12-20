import React from 'react'
import { Spinner } from './Spinner'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// Button
//x//////////////////////////////////////////////////

export const Button = ({
  loading,
  margin,
  small,
  children,
  secondary,
  ...props
}) => (
  <SButton
    {...props}
    loading={loading ? 'true' : 'false'}
    disabled={loading}
    margin={margin}
    small={small}
    secondary={secondary}>
    {children}
    {loading && (
      <Spinner
        margin={`0 0 0 ${small ? '0.5rem' : '1rem'}`}
        white={!secondary}
        small
      />
    )}
  </SButton>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SButton = styled.button(
  ({ theme, small, secondary, margin }) => css`
    padding: 0.5rem 1rem;
    padding: ${small && '0.3rem 0.5rem'};
    font-size: ${small && '0.8rem'};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${margin};
    color: ${secondary && theme.colors.primary};
    cursor: pointer;
    background: ${theme.colors.primary};
    background: ${secondary && '#fff'};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.radius.large};

    &:hover {
      background: ${!secondary && theme.colors.primaryDark};
      border: ${secondary && `1px solid ${theme.colors.primaryDark}`};
      color: ${secondary && theme.colors.primaryDark};
    }

    &:disabled {
      opacity: 0.6;
    }

    transition: all 0.05s linear;

    &:active {
      transform: scale(0.9);
    }
  `
)
