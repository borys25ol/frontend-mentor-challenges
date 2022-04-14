import styled from 'styled-components'

const Wrapper = styled.footer`
  padding-top: 40px;
  padding-bottom: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs-footer);
  color: var(--footer-gray-color);

  @media screen and (min-width: 768px) {
    padding-top: 44px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 49px;
    padding-bottom: 52px;
  }
`

export { Wrapper }
