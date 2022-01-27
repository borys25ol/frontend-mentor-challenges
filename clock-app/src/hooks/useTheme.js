import { useSelector } from 'react-redux'

function useTheme() {
  const { hours } = useSelector(state => state.datetime.datetime)

  const theme = hours >= 5 && hours < 18 ? 'day' : 'night'

  let dayPeriod = null

  if (hours >= 5 && hours < 12) {
    dayPeriod = 'morning'
  } else if (hours > 12 && hours < 18) {
    dayPeriod = 'afternoon'
  } else {
    dayPeriod = 'evening'
  }

  return { theme, dayPeriod }
}

export { useTheme }
