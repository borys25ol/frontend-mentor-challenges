export function filterActiveTasks(tasks) {
  return tasks.filter(task => task.completed === false)
}

export function filterCompletedTasks(tasks) {
  return tasks.filter(task => task.completed === true)
}

export function getTaskId(tasks) {
  const ids = tasks.map(task => task.id)
  return Math.max(...ids) + 1
}

export function swapTodoItems(todos, toSwap) {
  const temp = [...todos]

  const index_one = temp.findIndex(todo => todo.id === toSwap[0].id)
  const index_two = temp.findIndex(todo => todo.id === toSwap[1].id)

  const todo_1 = { ...temp[index_one] }

  //swap both of the to-do items
  temp[index_one] = { ...temp[index_two] }
  temp[index_two] = todo_1

  return temp
}
