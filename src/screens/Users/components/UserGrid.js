import React from 'react'
import { UserAddModal, UserTile } from '.'
import { ResponsiveGrid, ToggleButton } from '../../../components'
import { AnimatePresence } from 'framer-motion'

//x//////////////////////////////////////////////////
// UserGrid
//x//////////////////////////////////////////////////

export const UserGrid = ({ users, setUsers }) => (
  <>
    <ResponsiveGrid type='auto-fill'>
      <AnimatePresence initial={false}>
        {users.map(user => (
          <UserTile key={user.id} user={user} setUsers={setUsers} />
        ))}
      </AnimatePresence>
    </ResponsiveGrid>

    {!users.length && <p>No users</p>}

    <ToggleButton margin='1rem 0 0 0' label='Add user'>
      {({ isOn, setOff }) => (
        <UserAddModal setUsers={setUsers} isOpen={isOn} setClose={setOff} />
      )}
    </ToggleButton>
  </>
)