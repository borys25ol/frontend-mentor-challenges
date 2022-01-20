import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as IconElipsis } from 'assets/icon-ellipsis.svg'

import './TimeCard.scss'

function TimeCard({ title, timeframe, data: { current, previous } }) {
  const cardModificator = title.toLowerCase().replace(' ', '-')

  const timeframeMap = {
    daily: 'day',
    weekly: 'week',
    monthly: 'month',
  }

  const formatDate = number => {
    const amount = number > 1 ? 'hrs' : 'hr'
    return number + amount
  }

  return (
    <div className={`time-card time-card--${cardModificator}`}>
      <div className='time-card__body body'>
        <div className='body__header'>
          <span>{title}</span>
          <IconElipsis />
        </div>
        <div className='body__info'>
          <h2>{formatDate(current)}</h2>
          <span>
            Last {timeframeMap[timeframe]} - {formatDate(previous)}
          </span>
        </div>
      </div>
    </div>
  )
}

TimeCard.propTypes = {
  title: PropTypes.string,
  timeframe: PropTypes.string,
  data: PropTypes.object,
}

export { TimeCard }
