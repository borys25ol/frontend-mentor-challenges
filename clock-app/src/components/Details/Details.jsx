import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  bottom: 0;
  padding: 48px 25px;
  width: 100%;
  min-height: 200px;
  display: ${props => (props.active ? 'block' : 'none')};
  background-color: var(--color-more-section-background);
  backdrop-filter: blur(40.7742px);
  animation: fade_in_show 0.3s;

  @media screen and (max-height: 550px) {
    padding: 20px 25px;
  }

  @media screen and (max-height: 500px) {
    padding: 5px 25px;
  }

  @media screen and (min-width: 768px) {
    padding: 80px 64px;
  }

  @media screen and (min-width: 1024px) {
    padding: 74px 165px;
    animation: fade_in_show 0.2s;
  }
`

const List = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px;
  }

  @media screen and (min-width: 1024px) {
    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background: var(--color-more-section-text);
      opacity: 0.25;
      left: 50%;
    }
  }
`

const ListItem = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-more-section-text);

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    &:nth-child(2),
    &:nth-child(4) {
      margin-left: 94px;
    }
  }
`

const ItemName = styled.h6``

const ItemValue = styled.span``

function Details({ active }) {
  const { dayOfWeek, dayOfYear, weekNumber, timezone } = useSelector(
    state => state.datetime
  )

  return (
    <Wrapper active={active}>
      <List>
        <ListItem>
          <ItemName className='heading6'>current timezone</ItemName>
          <ItemValue className='heading2'>{timezone}</ItemValue>
        </ListItem>
        <ListItem>
          <ItemName className='heading6'>day of the year</ItemName>
          <ItemValue className='heading2'>{dayOfYear}</ItemValue>
        </ListItem>
        <ListItem>
          <ItemName className='heading6'>day of the week</ItemName>
          <ItemValue className='heading2'>{dayOfWeek}</ItemValue>
        </ListItem>
        <ListItem>
          <ItemName className='heading6'>week number</ItemName>
          <ItemValue className='heading2'>{weekNumber}</ItemValue>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export { Details }
