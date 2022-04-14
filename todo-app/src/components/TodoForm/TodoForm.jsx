import React, { useState } from 'react'

import { CheckboxWrapper, Input, Wrapper } from 'components/TodoForm'

function TodoForm({ todosList, handleTodoAdd }) {
  const [value, setValue] = useState('')

  const addTodo = () => {
    if (value.trim()) {
      handleTodoAdd(value)
      setValue('')
    }
  }

  return (
    <Wrapper>
      <CheckboxWrapper />
      <Input
        type="text"
        placeholder="Create a new todo…"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={e => e.key === 'Enter' && addTodo()}
      />
    </Wrapper>
  )
}

export { TodoForm }
