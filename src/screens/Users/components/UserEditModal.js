import React from 'react'
import { Modal, Form, Input, Button } from '../../../components'
import { axios } from '../../../utils'
import { toast } from 'react-toastify'

//x//////////////////////////////////////////////////
// UserEditModal
//x//////////////////////////////////////////////////

export const UserEditModal = ({ isOpen, setClose, user, setUsers }) => {
  const [loading, setLoading] = React.useState(false)

  const input = React.useRef(null)

  React.useEffect(() => {
    isOpen && input.current.focus()
  }, [isOpen])

  const editRow = e => {
    e.preventDefault()
    if (!e.target.fname.value.trim() || !e.target.lname.value.trim())
      return toast('Required field')
    setLoading(true)
    axios
      .patch(`/users/${user.id}`, {
        fname: e.target.fname.value,
        lname: e.target.lname.value,
        photoId: e.target.photoId.value,
      })
      .then(({ data }) => {
        setUsers(existingRows =>
          existingRows.map(existingRow =>
            existingRow.id === data.id
              ? { ...existingRow, ...data }
              : existingRow
          )
        )
        setLoading(false)
        setClose()
      })
      .catch(() => {
        toast('Couldnt edit user')
        setLoading(false)
      })
  }

  return (
    <Modal setClose={setClose} isOpen={isOpen}>
      <Form disabled={loading} title='Edit user' onSubmit={editRow}>
        <Input
          ref={input}
          required
          placeholder='John'
          label='First name'
          defaultValue={user.fname}
          id='fname'
          name='fname'
        />

        <Input
          required
          placeholder='Doe'
          label='Last name'
          defaultValue={user.lname}
          id='lname'
          name='lname'
        />

        <Input
          placeholder='12'
          type='number'
          label='Photo ID'
          defaultValue={user.photoId}
          id='photoId'
          name='photoId'
        />

        <Button loading={loading}>{loading ? 'Editing' : 'Edit'}</Button>
      </Form>
    </Modal>
  )
}
