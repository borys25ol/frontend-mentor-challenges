import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 31px;
  padding-bottom: 80px;
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767px) {
    max-width: 768px;
    padding: 140px 98px 236px 97px;
  }

  @media screen and (min-width: 1023px) {
    max-width: 1024px;
    padding: 144px 0 144px 0;
  }
`

const Container = styled.div`
  max-width: 327px;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 767px) {
    max-width: 537px;
  }

  @media screen and (min-width: 1023px) {
    max-width: 737px;
  }
`

function Main({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export { Main }
