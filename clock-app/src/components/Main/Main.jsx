import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: 'flex-start';
  justify-content: ${props => (props.active ? 'flex-end' : 'space-between')};
  background-color: var(--color-overlay);

  @media screen and (min-width: 767px) {
    /* max-width: 768px; */
  }

  @media screen and (min-width: 1023px) {
    /* max-width: 1024px; */
  }
`

function Main({ children, active }) {
  return <Wrapper active={active}>{children}</Wrapper>
}

export { Main }
