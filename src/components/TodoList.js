import React from 'react'
import styled, { css } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

//x//////////////////////////////////////////////////
// TodoList
//x//////////////////////////////////////////////////

export const TodoList = ({ todos, setTodos, row }) => (
  <>
    <SList>
      <AnimatePresence initial={false}>
        {todos.map(todo =>
          React.cloneElement(row, { setTodos, todo, key: todo.id })
        )}
      </AnimatePresence>
    </SList>
    {/* {!todos.length && <p>No todos</p>} */}
  </>
)

//x//////////////////////////////////////////////////
// Styles
//x//////////////////////////////////////////////////

const SList = styled.ul(
  () => css`
    margin: 0;
    padding: 0;
    list-style: none;
  `
)
