import React from 'react'
import { Reorder, useDragControls } from 'framer-motion'

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
import { TASK_STATE } from 'const'

function TodoList({
  states,
  todosList,
  currentState,
  activeTasks,
  handleReorder,
  handleStateChange,
  handleTodoRemove,
  handleTodoComplete,
  handleCompletedRemove,
}) {
  const controls = useDragControls()

  const toHide = (todo, state) => {
    switch (state) {
      case TASK_STATE.All:
        return false
      case TASK_STATE.Completed:
        return todo.completed === false
      case TASK_STATE.Active:
        return todo.completed === true
      default:
        return todosList
    }
  }

  return (
    <>
      <Wrapper>
        {todosList.length < 1 ? (
          <InfoText>
            There are no {currentState === TASK_STATE.All ? '' : currentState} tasks
          </InfoText>
        ) : (
          <Reorder.Group values={todosList} onReorder={handleReorder} className={List.toString()}>
            {todosList.map(todo => (
              <Reorder.Item
                hidden={toHide(todo, currentState)}
                key={todo.id}
                value={todo}
                dragControls={controls}
                as="li"
              >
                <TodoItem
                  id={todo.id}
                  text={todo.text}
                  isCompleted={todo.completed}
                  handleTodoRemove={handleTodoRemove}
                  handleTodoComplete={handleTodoComplete}
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
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
          <ClearButton onClick={handleCompletedRemove}>Clear Completed</ClearButton>
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
