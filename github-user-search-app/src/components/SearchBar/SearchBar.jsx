import React from 'react'
import styled from 'styled-components'

import { ReactComponent as SearchIcon } from './../../assets/icon-search.svg'

const FlexContainer = styled.div`
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

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Search GitHub username…',
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
    overflow: visible;
    color: var(--color-text);
    font-size: 13px;
    line-height: 24px;
  }
`

const NoResultText = styled.span`
  display: none;
  font-size: 13px;
  line-height: 25px;
  top: 0;
  right: 0;
`

const Button = styled.button`
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
`

function SearchBar() {
  return (
    <FlexContainer>
      <Icon />
      <Input />
      <NoResultText>No Results</NoResultText>
      <Button>Search</Button>
    </FlexContainer>
  )
}

export { SearchBar }
