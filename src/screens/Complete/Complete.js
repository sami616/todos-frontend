import React from 'react'
import { TodoList, Transform } from '../../components'
import { TodoRowComplete } from './components'

//x//////////////////////////////////////////////////
// Complete
//x//////////////////////////////////////////////////

export const Complete = ({ todos, setTodos }) => (
  <Transform>
    <TodoList todos={todos} setTodos={setTodos} row={<TodoRowComplete />} />
  </Transform>
)
