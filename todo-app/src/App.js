import React, { useEffect, useState } from 'react'

import { Container, Main, Wrapper } from 'components/Layout'
import { Header } from 'components/Header'
import { TodoForm } from 'components/TodoForm'
import { TodoList } from 'components/TodoList'
import { Footer } from 'components/Footer'
import { filterActiveTasks, filterCompletedTasks, getTaskId } from 'utils'

const defaultTodos = [
  { id: 1, text: 'Complete online JavaScript course', completed: true },
  { id: 2, text: 'Jog around the park 3x', completed: false },
  { id: 3, text: '10 minutes meditation', completed: false },
  { id: 4, text: 'Read for 1 hour', completed: false },
  { id: 5, text: 'Pick up groceries', completed: false },
  { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false },
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [activeTasks, setActiveTasks] = useState(0)
  const [filteredTodos, setFilteredTodos] = useState(defaultTodos)
  const [currentState, setCurrentState] = useState('all')

  const handleStateChange = state => {
    setCurrentState(state)
  }

  const handleTodoAdd = todoText => {
    const taskId = getTaskId(todos)
    const newTask = { id: taskId, text: todoText, completed: false }
    setTodos(currentTodos => [newTask, ...currentTodos])
    setCurrentState('all')
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
    setTodos(() => updatedTodos)
  }

  const handleTodoRemove = taskId => {
    const filteredTodosList = todos.filter(task => task.id !== taskId)
    setTodos(filteredTodosList)
  }

  const handleCompletedRemove = taskId => {
    const notCompletedTodos = todos.filter(task => task.completed !== true)
    setTodos(notCompletedTodos)
  }

  useEffect(() => {
    switch (currentState) {
      case 'all':
        setFilteredTodos(todos)
        break
      case 'completed':
        setFilteredTodos(filterCompletedTasks(todos))
        break
      case 'active':
        setFilteredTodos(filterActiveTasks(todos))
        break
      default:
        setFilteredTodos(todos)
    }
  }, [currentState, todos])

  useEffect(() => {
    const tasks = filterActiveTasks(todos)
    setActiveTasks(tasks.length)
  }, [todos])

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <TodoForm todosList={todos} handleTodoAdd={handleTodoAdd} />
          <TodoList
            todosList={filteredTodos}
            currentState={currentState}
            activeTasks={activeTasks}
            handleReorder={setTodos}
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
