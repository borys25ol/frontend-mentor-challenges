function useLocalStorage(key, initialValue) {
  const item = window.localStorage.getItem(key)
  const storedValue = item ? JSON.parse(item) : initialValue

  const setValue = value => {
    if (typeof value === 'object') {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  return { storedValue, setValue }
}

export { useLocalStorage }
