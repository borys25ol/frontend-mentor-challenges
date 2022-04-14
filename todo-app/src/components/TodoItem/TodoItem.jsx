import React, { useState } from 'react'

import { ReactComponent as IconRemove } from 'assets/icon-cross.svg'
import { ReactComponent as IconCheck } from 'assets/icon-check.svg'
import { Wrapper, Flex, CheckboxWrapper, TodoText, RemoveButton, Mock } from 'components/TodoItem'

function TodoItem({ id, text, isCompleted = false, handleTodoRemove, handleTodoComplete }) {
  const [completed, setCompleted] = useState(isCompleted)

  const toggleCompleted = () => {
    setCompleted(!completed)
    handleTodoComplete(id)
  }

  return (
    <Wrapper>
      <Flex>
        <CheckboxWrapper completed={completed} onClick={() => toggleCompleted()}>
          {completed ? <IconCheck /> : <Mock />}
        </CheckboxWrapper>
        <TodoText completed={completed}>{text}</TodoText>
      </Flex>
      <RemoveButton onClick={() => handleTodoRemove(id)}>
        <IconRemove />
      </RemoveButton>
    </Wrapper>
  )
}

export { TodoItem }
