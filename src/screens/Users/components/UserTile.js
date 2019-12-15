import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserEditModal } from '.'
import { ToggleButton, RowDeleteButton, Image } from '../../../components'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

//x//////////////////////////////////////////////////
// UserTile
//x//////////////////////////////////////////////////

export const UserTile = ({ user, setUsers }) => (
  <STile
    positionTransition
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    exit={{ opacity: 0 }}>
    <SPhotoLink to={`/users/${user.id}`}>
      {user.photoId && (
        <SImage
          cover
          width={800}
          height={800}
          loading='lazy'
          alt='Profile'
          src={`https://picsum.photos/id/${user.photoId}/800/800`}
        />
      )}
      <SName>
        {user.fname} {user.lname}
      </SName>
    </SPhotoLink>

    <SButtonGrid>
      <ToggleButton secondary label='Edit'>
        {({ isOn, setOff }) => (
          <UserEditModal
            user={user}
            setUsers={setUsers}
            isOpen={isOn}
            setClose={setOff}
          />
        )}
      </ToggleButton>

      <RowDeleteButton
        row={user}
        secondary
        baseUrl='/users'
        error='Couldnt delete user'
        setData={setUsers}
      />
    </SButtonGrid>
  </STile>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const STile = styled(motion.article)(
  ({ theme }) => css`
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
    display: grid;
    border-radius: ${theme.radius.medium};
    gap: 1rem;
    overflow: hidden;
  `
)

const SButtonGrid = styled.div(
  () => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 0 1rem 1rem;
  `
)

const SPhotoLink = styled(NavLink)(
  () => css`
    height: 230px;
    position: relative;
    overflow: hidden;
    &:hover {
      ${SImage} {
        transform: scale(1.1);
      }
    }
  `
)

const SImage = styled(Image)(
  () => css`
    transition: all 0.4s ease-in-out;
  `
)

const SName = styled.span(
  () => css`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    justify-content: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
  `
)
