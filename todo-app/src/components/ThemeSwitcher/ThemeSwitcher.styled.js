import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;

  & > svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    & > svg {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (min-width: 1024px) {
    & > svg {
      width: 26px;
      height: 26px;
    }
  }
`

export { Wrapper }
