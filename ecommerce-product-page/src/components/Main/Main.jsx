import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  padding: 20px 24px 0 24px;
  max-height: 900px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 43px 0 0 0;
    max-width: 992px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1100px;
  }
`

function Main({ children }) {
  return <Wrapper>{children}</Wrapper>
}

export { Main }
