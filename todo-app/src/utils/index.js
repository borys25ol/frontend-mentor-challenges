function filterActiveTasks(tasks) {
  return tasks.filter(task => task.completed === false)
}

function filterCompletedTasks(tasks) {
  return tasks.filter(task => task.completed === true)
}

function getTaskId(tasks) {
  const ids = tasks.map(task => task.id)
  return Math.max(...ids) + 1
}

export { filterActiveTasks, filterCompletedTasks, getTaskId }
