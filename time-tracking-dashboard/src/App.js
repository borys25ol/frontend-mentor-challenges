import React, { useState, useEffect } from 'react'

import { UserCard } from 'components/UserCard'
import { TimeCardList } from 'components/TimeCardList'
import { useFetch } from './hooks/useFetch'
import { processData } from 'utils'

function App() {
  const [timeframeData, setTimeframeData] = useState([])
  const [currentTimeframe, setCurrentTimeframe] = useState('daily')
  const [{ response, isLoading }, doFetch] = useFetch()

  const handleTimeframeChange = timeframe => {
    setCurrentTimeframe(timeframe)
    processTimeframeData(timeframe)
  }
  const processTimeframeData = timeframe => {
    const processedData = processData(response, timeframe)
    setTimeframeData(processedData)
  }

  useEffect(() => {
    doFetch()
  }, [doFetch])

  if (isLoading || !response) {
    return <div>Loading...</div>
  }

  // Provide default daily data after content loading.
  if (!timeframeData.length) {
    processTimeframeData(currentTimeframe)
  }

  return (
    <div className='wrapper'>
      <UserCard
        currentTimeframe={currentTimeframe}
        handleClick={handleTimeframeChange}
      />
      <TimeCardList data={timeframeData} />
    </div>
  )
}

export default App
