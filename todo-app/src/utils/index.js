export function filterActiveTasks(tasks) {
  return tasks.filter(task => task.completed === false)
}

export function getTaskId(tasks) {
  const ids = tasks.map(task => task.id)
  return Math.max(...ids) + 1
}

export function sortArrayByBoolean(tasks) {
  return tasks.sort((a, b) => Number(a.completed) - Number(b.completed))
}
