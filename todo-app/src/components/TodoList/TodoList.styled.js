import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  -webkit-box-shadow: var(--box-shadow);
  -moz-box-shadow: var(--box-shadow);

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 24px;
  }
`

const InfoText = styled.p`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  color: var(--footer-gray-color);
  background-color: var(--background-color);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid var(--border-color);
`

const List = styled.ul`
  & {
    li:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
`

const TodoFilterControl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  background-color: var(--background-color);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (min-width: 768px) {
    padding: 15px 22px;
  }

  @media screen and (min-width: 1024px) {
    padding: 18px 24px;
  }
`

const ItemsLeft = styled.p`
  color: var(--footer-gray-color);
  font-size: var(--fs-footer);
`

const ClearButton = styled.button`
  background-color: transparent;
  color: var(--footer-gray-color);
  font-size: var(--fs-footer);
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    transition: 1s ease;
    color: var(--todo-color);
  }
`

const TodoFiltersMobile = styled.div`
  margin-top: 16px;
  padding: 14px 0;
  display: flex;
  justify-content: center;
  background-color: var(--background-color);
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  -webkit-box-shadow: var(--box-shadow);
  -moz-box-shadow: var(--box-shadow);

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const TodoFiltersDesktop = styled.div`
  display: none;
  margin-top: 16px;
  padding: 14px 0;
  justify-content: center;
  background-color: var(--background-color);

  @media screen and (min-width: 1024px) {
    margin: 0;
    padding: 0;
    display: flex;
  }
`

const StateButton = styled.button`
  padding: 0 9px;
  font-size: var(--fs-footer);
  font-weight: var(--fw-bold);
  background-color: transparent;
  color: ${props => (props.active ? 'var(--footer-blue-color)' : 'var(--footer-gray-color)')};
  text-transform: capitalize;
  cursor: pointer;
  border: none;

  &:active,
  &:focus,
  &:hover {
    background: transparent;
    outline: none;
  }

  &:hover {
    transition: 1s ease;
    color: var(--todo-color);
  }
`

export {
  Wrapper,
  InfoText,
  List,
  TodoFilterControl,
  ItemsLeft,
  ClearButton,
  TodoFiltersMobile,
  TodoFiltersDesktop,
  StateButton,
}
