import React from 'react'
import { Modal, Form, Input, Button } from '../../../components'
import { axios } from '../../../utils'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

//x//////////////////////////////////////////////////
// TodoAddModal
//x//////////////////////////////////////////////////

export const TodoAddModal = ({ isOpen, setClose, setTodos }) => {
  const [loading, setLoading] = React.useState(false)
  const { userId } = useParams()
  const input = React.useRef(null)

  React.useEffect(() => {
    isOpen && input.current.focus()
  }, [isOpen])

  const addRow = e => {
    e.preventDefault()
    if (!e.target.name.value.trim()) return toast('Required field')
    setLoading(true)
    axios
      .post('/todos', {
        name: e.target.name.value,
        completed: false,
        userId: parseInt(userId),
      })
      .then(({ data }) => {
        setTodos(d => [...d, data])
        setLoading(false)
        setClose()
      })
      .catch(() => {
        toast('Couldnt add todo')
        setLoading(false)
      })
  }

  return (
    <Modal setClose={setClose} isOpen={isOpen}>
      <Form disabled={loading} title='Add todo' onSubmit={addRow}>
        <Input
          ref={input}
          required
          placeholder='Learn React'
          label='Name'
          id='name'
          name='name'
        />
        <Button loading={loading}>{loading ? 'Adding' : 'Add'}</Button>
      </Form>
    </Modal>
  )
}
