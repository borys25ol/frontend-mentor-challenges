import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as _RefreshIcon } from './../../assets/icon-refresh.svg'
import { fetchQuote } from '../../store/slices/quoteSlice'

const Wrapper = styled.div`
  padding: 0 25px;
  display: ${props => (props.active ? 'block' : 'none')};
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    padding: 0 64px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 165px;
    margin-top: 56px;
  }
`

const Text = styled.p`
  display: inline-block;
  max-width: 290px;
  width: 100%;
  margin-bottom: 8px;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 573px;
  }
`

const IconConntainer = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: -20px;
  top: 0;
  cursor: pointer;
`

const RefreshIcon = styled(_RefreshIcon)``

const Author = styled.h5``

function Quote({ active = true }) {
  const { text, author } = useSelector(state => state.quote)
  const dispatch = useDispatch()

  return (
    <Wrapper active={active}>
      <Text className='text'>
        {text && `“${text}”`}
        <IconConntainer
          onClick={() => {
            dispatch(fetchQuote())
          }}
        >
          <RefreshIcon />
        </IconConntainer>
      </Text>
      <Author className='heading5'>{author}</Author>
    </Wrapper>
  )
}

export { Quote }
