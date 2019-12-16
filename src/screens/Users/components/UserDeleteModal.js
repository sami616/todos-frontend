import React from 'react'
import { Modal, Form, RowDeleteButton } from '../../../components'

//x//////////////////////////////////////////////////
// UserEditModal
//x//////////////////////////////////////////////////

export const UserDeleteModal = ({ isOpen, setClose, user, setUsers }) => (
  <Modal setClose={setClose} isOpen={isOpen}>
    <Form
      onSubmit={e => {
        e.preventDefault()
      }}
      title='Delete user'>
      <p>Are you sure you want to delete {user.fname}</p>
      <RowDeleteButton
        row={user}
        baseUrl='/users'
        error='Couldnt delete user'
        setData={setUsers}
      />
    </Form>
  </Modal>
)
