import React from 'react'
import PropTypes from 'prop-types'

import { TimeCard } from './TimeCard'

import './TimeCardList.scss'

function TimeCardList({ data }) {
  return (
    <div className='time-cards'>
      {data.map(item => {
        return <TimeCard key={item.title} {...item} />
      })}
    </div>
  )
}

TimeCardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export { TimeCardList }
