import React from 'react'
import { TodoMoveButton, ToggleButton, TodoRow } from '../../../components'

import { TodoEditModal } from './'

//x//////////////////////////////////////////////////
// TodoRowIncomplete
//x//////////////////////////////////////////////////

export const TodoRowIncomplete = ({ todo, setTodos }) => (
  <TodoRow name={todo.name}>
    <TodoMoveButton setTodos={setTodos} todo={todo} />
    <ToggleButton secondary small label='Edit'>
      {({ isOn, setOff }) => (
        <TodoEditModal
          todo={todo}
          setTodos={setTodos}
          isOpen={isOn}
          setClose={setOff}
        />
      )}
    </ToggleButton>
  </TodoRow>
)
