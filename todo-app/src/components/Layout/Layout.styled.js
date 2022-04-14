import styled from 'styled-components'

const Main = styled.main``

const Wrapper = styled.div`
  width: 100%;
  background-color: transparent;
  background-image: var(--bg-image);
  background-repeat: no-repeat;
`

const Container = styled.div`
  padding-top: 48px;
  margin: 0 auto;
  max-width: 327px;

  @media screen and (max-width: 375px) {
    padding-top: 40px;
    max-width: 300px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 54px;
    max-width: 427px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 70px;
    max-width: 540px;
  }
`

export { Main, Wrapper, Container }
