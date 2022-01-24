import { useState, useEffect, useCallback } from 'react'

const GITHUB_API_URL = 'https://api.github.com/users/'

export function useFetch(username) {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [isError, setIsError] = useState(false)

  const doFetch = useCallback(() => {
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      return
    }
    console.log('Fetching data...')
    fetch(GITHUB_API_URL + username)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('Data fetched successfully')
        setIsLoading(false)
        if (data.message === 'Not Found') {
          setIsError(true)
        } else {
          setIsError(false)
          setResponse(data)
        }
      })
      .catch(error => {
        console.log('Error while fetcing data', error)
        setIsError(true)
      })
  }, [isLoading, username])
  return [{ isLoading, response, isError }, doFetch]
}
