import React from 'react'
import { TodoMoveButton, RowDeleteButton, TodoRow } from '../../../components'

//x//////////////////////////////////////////////////
// TodoRowComplete
//x//////////////////////////////////////////////////

export const TodoRowComplete = ({ todo, setTodos }) => (
  <TodoRow name={todo.name}>
    <TodoMoveButton setTodos={setTodos} todo={todo} />
    <RowDeleteButton
      secondary
      small
      row={todo}
      baseUrl='/todos'
      error='Couldnt delete todo'
      setData={setTodos}
    />
  </TodoRow>
)
