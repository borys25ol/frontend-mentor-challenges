import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { getDatePeriod } from '../utils/datetime'

function useTheme() {
  const [theme, setTheme] = useState(null)
  const [dayPeriod, setDatePeriod] = useState(null)
  const {
    datetime: { hours },
    status,
  } = useSelector(state => state.datetime)

  useEffect(() => {
    if (status !== 'resolved') {
      return
    }
    setTheme(hours >= 5 && hours < 18 ? 'day' : 'night')
    setDatePeriod(getDatePeriod(hours))
  }, [hours, status])

  return { theme, dayPeriod }
}

export { useTheme }
