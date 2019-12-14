import React from 'react'
import { axios } from '../utils'
import { Button } from './Button'
import { toast } from 'react-toastify'

//x//////////////////////////////////////////////////
// TodoMoveButton
//x//////////////////////////////////////////////////

export const TodoMoveButton = ({ todo, setTodos }) => {
  const [loading, setLoading] = React.useState(false)

  const moveRow = () => {
    setLoading(true)
    axios
      .patch(`/todos/${todo.id}`, { completed: !todo.completed })
      .then(({ data }) => {
        setTodos(existingRows =>
          existingRows.map(existingRow =>
            existingRow.id === data.id
              ? { ...existingRow, ...data }
              : existingRow
          )
        )
      })
      .catch(() => {
        setLoading(false)
        toast('Problem moving todo')
      })
  }

  return (
    <Button
      loading={loading}
      secondary
      small
      disabled={loading}
      onClick={moveRow}>
      {loading ? 'Moving' : 'Move'}
    </Button>
  )
}
