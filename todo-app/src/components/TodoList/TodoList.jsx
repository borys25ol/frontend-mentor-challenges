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

function TodoList({
  todosList,
  currentState,
  activeTasks,
  handleReorder,
  handleStateChange,
  handleTodoRemove,
  handleTodoComplete,
  handleCompletedRemove,
}) {
  const states = ['all', 'active', 'completed']
  const controls = useDragControls()

  return (
    <>
      <Wrapper>
        {todosList.length < 1 ? (
          <InfoText>There are no {currentState === 'all' ? '' : currentState} tasks</InfoText>
        ) : (
          <Reorder.Group
            as="ul"
            axis="y"
            values={todosList}
            onReorder={handleReorder}
            className={List.toString()}
          >
            {todosList.map(todo => (
              <Reorder.Item key={todo.id} value={todo} dragControls={controls} as="li">
                <TodoItem
                  id={todo.id}
                  text={todo.text}
                  isCompleted={todo.completed}
                  handleTodoRemove={handleTodoRemove}
                  handleTodoComplete={handleTodoComplete}
                  onPointerDown={e => controls.start(e)}
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
