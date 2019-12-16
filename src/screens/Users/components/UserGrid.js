import React from 'react'
import { UserAddModal, UserCard } from './'
import { ResponsiveGrid, ToggleButton } from '../../../components'
import { AnimatePresence, motion } from 'framer-motion'

//x//////////////////////////////////////////////////
// UserGrid
//x//////////////////////////////////////////////////

export const UserGrid = ({ users, setUsers }) => (
  <>
    <ToggleButton margin='0 0 1rem 0' label='Add user'>
      {({ isOn, setOff }) => (
        <UserAddModal setUsers={setUsers} isOpen={isOn} setClose={setOff} />
      )}
    </ToggleButton>

    {!users.length && (
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        No users
      </motion.p>
    )}

    <ResponsiveGrid type='auto-fill'>
      <AnimatePresence initial={false}>
        {users.map(user => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </AnimatePresence>
    </ResponsiveGrid>
  </>
)
