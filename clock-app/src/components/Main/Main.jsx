import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: 'flex-start';
  justify-content: ${props => (props.active ? 'flex-end' : 'space-between')};
  background-color: var(--color-overlay);
  border-color: transparent;
`

function Main({ children, active }) {
  return <Wrapper active={active}>{children}</Wrapper>
}

export { Main }
