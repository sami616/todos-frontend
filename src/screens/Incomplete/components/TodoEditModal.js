import React from 'react'
import { Modal, Form, Input, Button } from '../../../components'
import { axios } from '../../../utils'
import { toast } from 'react-toastify'

//x//////////////////////////////////////////////////
// TodoEditModal
//x//////////////////////////////////////////////////

export const TodoEditModal = ({ isOpen, setClose, todo, setTodos }) => {
  const [loading, setLoading] = React.useState(false)
  const input = React.useRef(null)

  React.useEffect(() => {
    isOpen && input.current.focus()
  }, [isOpen])

  const editRow = e => {
    e.preventDefault()
    if (!e.target.name.value.trim()) return toast('Required field')
    setLoading(true)
    axios
      .patch(`/todos/${todo.id}`, {
        name: e.target.name.value,
      })
      .then(({ data }) => {
        setTodos(existingRows =>
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
        toast('Couldnt edit todo')
        setLoading(false)
      })
  }

  return (
    <Modal setClose={setClose} isOpen={isOpen}>
      <Form disabled={loading} title='Edit todo' onSubmit={editRow}>
        <Input
          ref={input}
          required
          defaultValue={todo.name}
          label='Name'
          id='name'
          name='name'
        />
        <Button loading={loading}>{loading ? 'Editing' : 'Edit'}</Button>
      </Form>
    </Modal>
  )
}
