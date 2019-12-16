import React from 'react'
import styled, { css } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

//x//////////////////////////////////////////////////
// TodoList
//x//////////////////////////////////////////////////

export const TodoList = ({ todos, setTodos, row }) => (
  <>
    {!todos.length && (
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        No todos
      </motion.p>
    )}
    <SList>
      <AnimatePresence initial={false}>
        {todos.map(todo =>
          React.cloneElement(row, { setTodos, todo, key: todo.id })
        )}
      </AnimatePresence>
    </SList>
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
