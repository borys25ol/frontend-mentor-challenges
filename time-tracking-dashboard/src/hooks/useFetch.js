import { useState, useEffect, useCallback } from 'react'

const MOCK_DATA_URL =
  'https://211466da-cf32-4a77-bae6-ab10f2ff0b6e.mock.pstmn.io'

export function useFetch() {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const doFetch = useCallback(() => {
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      return
    }
    console.log('Fetching data...')
    fetch(MOCK_DATA_URL + '/test-timeframe-data')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('Data fetched successfully')
        setIsLoading(false)
        setResponse(data)
      })
      .catch(error => {
        console.log('Error while fetcing data')
        setError(error)
      })
  }, [isLoading])

  return [{ isLoading, response, error }, doFetch]
}
