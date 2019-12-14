import React from 'react'
import { Modal, Form, Input, Button } from '../../../components'
import { axios } from '../../../utils'
import { toast } from 'react-toastify'

//x//////////////////////////////////////////////////
// UserAddModal
//x//////////////////////////////////////////////////

export const UserAddModal = ({ isOpen, setClose, setUsers }) => {
  const [loading, setLoading] = React.useState(false)
  const input = React.useRef(null)
  const form = React.useRef(null)

  React.useEffect(() => {
    isOpen && input.current.focus()
  }, [isOpen])

  const addRow = e => {
    e.preventDefault()
    if (!e.target.fname.value.trim() || !e.target.lname.value.trim())
      return toast('Required field')
    setLoading(true)
    axios
      .post('/users', {
        fname: e.target.fname.value,
        lname: e.target.lname.value,
        photoId: e.target.photoId.value,
      })
      .then(({ data }) => {
        setUsers(d => [...d, data])
        setLoading(false)
        setClose()
      })
      .catch(() => {
        toast('Couldnt add user')
        setLoading(false)
      })
  }

  return (
    <Modal setClose={setClose} isOpen={isOpen}>
      <Form ref={form} disabled={loading} title='Add user' onSubmit={addRow}>
        <Input
          ref={input}
          required
          placeholder='JSON'
          label='First name'
          id='fname'
          name='fname'
        />

        <Input
          required
          placeholder='Sammon'
          label='Last name'
          id='lname'
          name='lname'
        />

        <Input
          placeholder='12'
          type='number'
          label='Photo ID'
          id='photoId'
          name='photoId'
        />

        <Button loading={loading}>{loading ? 'Adding' : 'Add'}</Button>
      </Form>
    </Modal>
  )
}
