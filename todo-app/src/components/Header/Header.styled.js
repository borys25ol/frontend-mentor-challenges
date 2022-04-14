import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    width: 109px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 24px;

    & > svg {
      width: 167px;
      height: 30px;
    }
  }
`

export { Wrapper }
