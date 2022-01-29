import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { formatNumber } from '../utils/date'
import { fetchIp } from '../store/slices/ipSlice'

function useTime() {
  const { datetime, status } = useSelector(state => state.datetime)
  const [timer, setTimer] = useState(0)
  const [minutes, setMinutes] = useState(null)
  const [hours, setHours] = useState(null)
  const dispatch = useDispatch()

  const timerCallback = useCallback(() => {
    if (timer % 60 === 0) {
      setMinutes(minutes => (minutes >= 59 ? 0 : minutes + 1))
    }
    if (timer % 3600 === 0) {
      setHours(hours => (hours >= 23 ? 0 : hours + 1))
    }
    setTimer(seconds => seconds + 1)
  }, [timer])

  useEffect(() => {
    if (status !== 'resolved') {
      return
    }
    setTimer(datetime.seconds + 1 + datetime.minutes * 60)
    setMinutes(datetime.minutes)
    setHours(datetime.hours)
  }, [datetime, status])

  useEffect(() => {
    const interval = setInterval(timerCallback, 1000)
    return () => clearInterval(interval)
  }, [timerCallback])

  useEffect(() => {
    const updateTime = () => {
      if (!document.hidden) {
        dispatch(fetchIp())
      }
    }
    window.addEventListener('visibilitychange', updateTime)
    return () => window.removeEventListener('visibilitychange', updateTime)
  }, [dispatch])

  return {
    hours: Number.isInteger(hours) ? formatNumber(hours) : null,
    minutes: Number.isInteger(minutes) ? formatNumber(minutes) : null,
  }
}

export { useTime }
