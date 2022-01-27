import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { formatNumber } from '../utils/date'

function useDate() {
  const { datetime } = useSelector(state => state.datetime)
  const [dateFetched, setDateFetched] = useState(false)
  const [timer, setTimer] = useState(0)
  const [minutes, setMinutes] = useState(null)
  const [hours, setHours] = useState(null)

  useEffect(() => {
    if (!datetime.seconds) {
      return
    }
    if (!dateFetched) {
      setDateFetched(true)
      setTimer(datetime.seconds + 1 + datetime.minutes * 60)
      setMinutes(datetime.minutes)
      setHours(datetime.hours)
    }
    const interval = setInterval(() => {
      if (timer % 60 === 0) {
        setMinutes(minutes => (minutes >= 59 ? 0 : minutes + 1))
      }
      if (timer % 3600 === 0) {
        setHours(hours => (hours >= 23 ? 0 : hours + 1))
      }
      setTimer(seconds => seconds + 1)
    }, 1000)

    // Reload page if user hide or switch tab.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(interval)
      } else {
        window.location.reload(false)
      }
    })

    return () => clearInterval(interval)
  }, [timer, minutes, datetime, dateFetched])

  console.log(hours, minutes, timer)

  return {
    hours: Number.isInteger(hours) ? formatNumber(hours) : null,
    minutes: Number.isInteger(minutes) ? formatNumber(minutes) : null,
  }
}

export { useDate }
