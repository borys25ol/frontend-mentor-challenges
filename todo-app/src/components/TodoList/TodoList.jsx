import React from 'react'

import { TodoItem } from 'components/TodoItem'
import {
  ClearButton,
  InfoText,
  ItemsLeft,
  List,
  StateButton,
  TodoFilterControl,
  TodoFiltersDesktop,
  TodoFiltersMobile,
  Wrapper,
} from 'components/TodoList'

function TodoList({
  todosList,
  currentState,
  activeTasks,
  handleStateChange,
  handleTodoRemove,
  handleTodoComplete,
  handleCompletedRemove,
}) {
  const states = ['all', 'active', 'completed']

  return (
    <>
      <Wrapper>
        {todosList.length < 1 ? (
          <InfoText>There are no {currentState === 'all' ? '' : currentState} tasks</InfoText>
        ) : (
          <List>
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                isCompleted={todo.completed}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
              />
            ))}
          </List>
        )}
        <TodoFilterControl>
          <ItemsLeft>{activeTasks} items left</ItemsLeft>
          <TodoFiltersDesktop>
            {states.map(state => (
              <StateButton
                key={state}
                active={state === currentState}
                onClick={() => handleStateChange(state)}
              >
                {state}
              </StateButton>
            ))}
          </TodoFiltersDesktop>
          <ClearButton onClick={() => handleCompletedRemove()}>Clear Completed</ClearButton>
        </TodoFilterControl>
      </Wrapper>
      <TodoFiltersMobile>
        {states.map(state => (
          <StateButton
            key={state}
            active={state === currentState}
            onClick={() => handleStateChange(state)}
          >
            {state}
          </StateButton>
        ))}
      </TodoFiltersMobile>
    </>
  )
}

export { TodoList }
