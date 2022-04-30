import React, { useEffect, useState } from 'react'

import { Container, Heading, Main, Wrapper } from 'components/Layout'
import { Header } from 'components/Header'
import { TodoForm } from 'components/TodoForm'
import { TodoList } from 'components/TodoList'
import { Footer } from 'components/Footer'
import { filterActiveTasks, getTaskId, sortArrayByBoolean } from 'utils'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { DEFAULT_TODOS, TASK_STATE } from 'const'

function App() {
  const { storedValue, setValue } = useLocalStorage('todos', { todos: DEFAULT_TODOS })
  const [todos, setTodos] = useState(sortArrayByBoolean(storedValue.todos))
  const [currentState, setCurrentState] = useState(TASK_STATE.All)
  const [activeTasks, setActiveTasks] = useState(0)

  const handleStateChange = state => {
    setCurrentState(state)
  }

  const handleTodoAdd = todoText => {
    const taskId = getTaskId(todos)
    const newTask = { id: taskId, text: todoText, completed: false }
    setTodos(currentTodos => [newTask, ...currentTodos])
    setCurrentState(TASK_STATE.All)
  }

  const handleTodoComplete = taskId => {
    const updatedTodos = todos.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        }
      }
      return task
    })
    setTodos(updatedTodos)
  }

  const handleTodoRemove = taskId => {
    const filteredTodosList = todos.filter(task => task.id !== taskId)
    setTodos(filteredTodosList)
  }

  const handleCompletedRemove = () => {
    const notCompletedTodos = filterActiveTasks(todos)
    setTodos(notCompletedTodos)
  }

  const handleReorder = todos => {
    setTodos(todos)
  }

  useEffect(() => {
    setTodos(todos)
  }, [todos])

  useEffect(() => {
    const tasks = filterActiveTasks(todos)
    setActiveTasks(tasks.length)
  }, [todos])

  useEffect(() => {
    setValue({ todos: sortArrayByBoolean(todos) })
  }, [todos, setValue])

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <Heading>To-do application</Heading>
          <TodoForm todosList={todos} handleTodoAdd={handleTodoAdd} />
          <TodoList
            states={Object.values(TASK_STATE)}
            todosList={todos}
            currentState={currentState}
            activeTasks={activeTasks}
            handleReorder={handleReorder}
            handleStateChange={handleStateChange}
            handleTodoRemove={handleTodoRemove}
            handleTodoComplete={handleTodoComplete}
            handleCompletedRemove={handleCompletedRemove}
          />
        </Main>
        <Footer />
      </Container>
    </Wrapper>
  )
}

export default App
