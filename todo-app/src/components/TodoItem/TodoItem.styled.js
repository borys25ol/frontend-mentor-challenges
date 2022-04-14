import styled from 'styled-components'

const Wrapper = styled.li`
  height: 52px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    padding: 0 22px;
  }

  @media screen and (min-width: 1024px) {
    height: 65px;
    padding: 0 24px;

    &:hover {
      svg {
        display: inline-block;
      }
    }
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CheckboxWrapper = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  & {
    background: ${props => (props.completed ? 'var(--gradient)' : 'transparent')};
    border: ${props => (props.completed ? 'none' : '1px solid var(--border-color)')};
  }

  &:hover {
    padding: 1px;
    border: none;
    background: linear-gradient(
      to bottom right,
      var(--color-gradient-start),
      var(--color-gradient-end)
    );
  }

  @media screen and (min-width: 768px) {
    height: 22px;
    width: 22px;
  }

  @media screen and (min-width: 1024px) {
    height: 24px;
    width: 24px;
  }
`

const Mock = styled.div`
  width: 100%;
  height: 100%;
  background: var(--background-color);
  border-radius: inherit;
`

const TodoText = styled.p`
  margin-left: 12px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  color: ${props => (props.completed ? 'var(--todo-completed-color)' : 'var(--todo-color)')};
`

const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > svg {
    width: 12px;
    height: 12px;
  }

  @media screen and (min-width: 768px) {
    & > svg {
      width: 14px;
      height: 14px;
    }
  }

  @media screen and (min-width: 1024px) {
    transition: 0.5s ease-in-out;

    & > svg {
      display: none;
      width: 18px;
      height: 18px;
      transition: 0.5s ease-in-out;

      &:hover {
        width: 22px;
        height: 22px;
      }
    }
  }
`

export { Wrapper, Flex, CheckboxWrapper, Mock, TodoText, RemoveButton }
