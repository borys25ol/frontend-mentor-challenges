import React, { useRef } from 'react'
import styled from 'styled-components'

import { ReactComponent as SearchIcon } from './../../assets/icon-search.svg'

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 6.5px 7px 7.5px 16px;
  margin-top: 36px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  background-color: var(--color-gb-block);
`

const Icon = styled(SearchIcon)`
  font-size: 20px;
  color: var(--color-blue);
`

const Input = styled.input.attrs(props => {
  return {
    type: 'text',
    placeholder: 'Search GitHub username…',
    visibility: props.placeholderActive ? 'visible' : 'hidden',
  }
})`
  display: inline-block;
  width: 100%;
  max-width: 184px;
  font-size: 13px;
  line-height: 25px;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    visibility: ${props => props.visibility};
    overflow: visible;
    color: var(--color-text);
    font-size: 13px;
    line-height: 24px;
  }

  @media screen and (min-width: 767px) {
    font-size: 18px;
    max-width: 370px;

    &::placeholder {
      font-size: 18px;
      line-height: 25px;
    }
  }

  @media screen and (min-width: 991px) {
    max-width: 530px;
  }
`

const NoResult = styled.span.attrs(props => {
  return {
    visibility: props.active ? 'visible' : 'hidden',
  }
})`
  visibility: ${props => props.visibility};
  position: absolute;
  font-size: 13px;
  line-height: 25px;
  top: 18px;
  right: 105px;
  color: red;

  @media screen and (min-width: 767px) {
    right: 130px;
    font-size: 15px;
  }

  @media screen and (min-width: 991px) {
    font-size: 18px;
  }
`

const Button = styled.button.attrs(props => {
  return {
    disabled: props.disabled,
  }
})`
  border: none;
  width: 84px;
  height: 46px;
  border-radius: 10px;
  background-color: var(--color-blue);
  font-weight: var(--weight-bold);
  color: var(--color-white);
  cursor: pointer;

  &:hover {
    background-color: var(--color-blue-hover);
    transition: 0.3s ease;
  }

  @media screen and (min-width: 767px) {
    width: 106px;
  }
`

function SearchBar({
  handleChange,
  showError,
  setShowError,
  handleSearch,
  disabled,
}) {
  const inputElelemt = useRef(null)

  return (
    <FlexContainer>
      <Icon />
      <Input
        ref={inputElelemt}
        placeholderActive={!showError}
        onChange={e => {
          handleChange(e.target.value)
          inputElelemt.current.value = e.target.value
        }}
        onFocus={() => setShowError(false)}
      />
      {!disabled && <NoResult active={showError}>No Results</NoResult>}
      <Button
        disable={disabled}
        onClick={() => {
          handleSearch()
          inputElelemt.current.value = ''
        }}
      >
        Search
      </Button>
    </FlexContainer>
  )
}

export { SearchBar }
