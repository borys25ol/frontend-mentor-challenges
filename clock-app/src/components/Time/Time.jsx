import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { ReactComponent as IconSun } from './../../assets/icon-sun.svg'
import { ReactComponent as IconMoon } from './../../assets/icon-moon.svg'
import { ReactComponent as IconArrowUp } from './../../assets/icon-arrow-up.svg'
import { ReactComponent as IconArrowDown } from './../../assets/icon-arrow-down.svg'
import { useTheme } from '../../hooks/useTheme'
import { useTime } from '../../hooks/useTime'

const Wrapper = styled.div`
  padding: 10px 25px;

  @media screen and (min-width: 768px) {
    padding: 10px 64px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    padding: 56px 165px 10px;
    justify-content: space-between;
    align-items: flex-end;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

const Text = styled.h4`
  margin-left: 16px;
`

const CurrentTime = styled.h1`
  margin-top: 16px;
`

const TimeZone = styled.span`
  font-size: 15px;
  line-height: 28px;
  margin-left: 5px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    margin-bottom: 26px;
    font-weight: 300;
  }
`

const Location = styled.h3`
  margin-bottom: 58px;

  @media screen and (min-width: 1024px) {
    margin-top: 16px;
  }
`

const ShowButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 115px;
  padding: 3px 4px 4px 17px;
  margin-bottom: 40px;
  border: none;
  border-radius: 28px;
  background-color: var(--color-white);

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      color: var(--color-black-light);
      margin-top: 2px;
      opacity: 50%;
    }

    &:last-child {
      width: 32px;
      height: 32px;
      background-color: var(--color-black-light);
      border-radius: 50%;

      svg {
        width: 14px;
        height: 9px;

        path {
          width: 12px;
          height: 6px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 146px;
    height: 56px;
    padding: 8px 9px 8px 21px;
    margin-bottom: 64px;

    span {
      &:last-child {
        width: 40px;
        height: 40px;
      }
    }
  }
`

function Time({ handleClick }) {
  const [show, setShow] = useState('hidden')
  const [width, setWidth] = useState(window.innerWidth)
  const { dayPeriod } = useTheme()
  const { hours, minutes } = useTime()
  const { timezoneAbbreviation } = useSelector(state => state.datetime)
  const { city, countryCode } = useSelector(state => state.ip)

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  const greetingMap = {
    morning: {
      text: width < 768 ? 'good morning' : 'good morning, it`s currently',
      icon: <IconSun />,
    },
    afternoon: {
      text: width < 768 ? 'good afternoon' : 'good afternoon, it`s currently',
      icon: <IconSun />,
    },
    evening: {
      text: width < 768 ? 'good evening' : 'good evening, it`s currently',
      icon: <IconMoon />,
    },
  }
  const showMap = {
    hidden: {
      text: 'More',
      icon: <IconArrowDown />,
    },
    visible: {
      text: 'Less',
      icon: <IconArrowUp />,
    },
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <Wrapper>
      <div>
        <FlexContainer>
          {dayPeriod && (
            <>
              {greetingMap[dayPeriod].icon}
              <Text className='heading4'>{greetingMap[dayPeriod].text}</Text>
            </>
          )}
        </FlexContainer>
        <FlexContainer alignItems='flex-end'>
          {hours && minutes && (
            <CurrentTime className='heading1'>
              {hours}:{minutes}
            </CurrentTime>
          )}
          <TimeZone>{timezoneAbbreviation}</TimeZone>
        </FlexContainer>
        <Location className='heading3'>
          IN {city || 'Unknown'}, {countryCode}
        </Location>
      </div>
      <ShowButton
        onClick={() => {
          show === 'hidden' ? setShow('visible') : setShow('hidden')
          handleClick()
        }}
      >
        <span className='btn'>{showMap[show].text}</span>
        <span>{showMap[show].icon}</span>
      </ShowButton>
    </Wrapper>
  )
}

export { Time }
