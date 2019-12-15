import React from 'react'
import { TodoList, ToggleButton, Transform } from '../../components'
import { TodoRowIncomplete, TodoAddModal } from './components'

//x//////////////////////////////////////////////////
// Incomplete
//x//////////////////////////////////////////////////

export const Incomplete = ({ todos, setTodos }) => (
  <Transform>
    <ToggleButton margin='1rem 0 1rem 0' label='Add todo'>
      {({ isOn, setOff }) => (
        <TodoAddModal setTodos={setTodos} isOpen={isOn} setClose={setOff} />
      )}
    </ToggleButton>
    <TodoList todos={todos} setTodos={setTodos} row={<TodoRowIncomplete />} />
  </Transform>
)
