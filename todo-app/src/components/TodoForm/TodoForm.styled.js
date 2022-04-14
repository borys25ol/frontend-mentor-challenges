import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  background-color: var(--background-color);
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    padding: 16px 22px;
  }

  @media screen and (min-width: 1024px) {
    padding: 22px 24px;
  }
`

const CheckboxWrapper = styled.div`
  padding: 9px;
  border: 1px solid var(--border-color);
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1024px) {
    padding: 11px;
  }
`

const Input = styled.input`
  display: block;
  width: 100%;
  margin-left: 12px;
  font-size: var(--fs);
  line-height: 12px;
  color: var(--todo-color);

  border: none;
  outline: none;

  &::placeholder {
    font-size: var(--fs);
    color: var(--input-placeholder-color);
    letter-spacing: -0.17px;
  }
`

export { Wrapper, CheckboxWrapper, Input }
