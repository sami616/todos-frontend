import React from 'react'
import styled, { css } from 'styled-components'

//x//////////////////////////////////////////////////
// Image
//x//////////////////////////////////////////////////

export const Image = ({
  rounded = true,
  cover,
  background = '#f1f1f1',
  ...props
}) => (
  <SImage
    loading='lazy'
    rounded={rounded}
    cover={cover}
    background={background}
    {...props}
  />
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SImage = styled.img(
  ({ cover, background, theme, rounded }) => css`
    width: 100%;
    border-radius: ${rounded && theme.radius.medium};
    display: flex;
    background: ${background};
    height: auto;
    height: ${cover && '100%'};
    object-fit: ${cover && 'cover'};
  `
)
