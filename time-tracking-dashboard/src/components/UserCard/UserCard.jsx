import React from 'react'

import logo from 'assets/image-jeremy.png'

import './UserCard.scss'

function UserCard({ handleClick, currentTimeframe }) {
  const timeframes = ['daily', 'weekly', 'monthly']

  return (
    <div className='user-card'>
      <div className='user-card__user user'>
        <div className='user__logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='user__info'>
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className='user-card__periods periods'>
        <ul className='periods__buttons'>
          {timeframes.map(timeframe => (
            <li key={timeframe}>
              <span
                className={timeframe === currentTimeframe ? 'active' : ''}
                onClick={() => handleClick(timeframe)}
              >
                {timeframe}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { UserCard }
