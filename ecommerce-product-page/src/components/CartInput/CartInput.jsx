import React, { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as MinusIcon } from 'assets/icons/icon-minus.svg'
import { ReactComponent as PlusIcon } from 'assets/icons/icon-plus.svg'

const QuantityInput = styled.div`
  margin-top: 24px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 6px 24px;
    margin-top: 3px;
    flex-basis: 357px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 157px;
  }
`

const InputButton = styled.div`
  cursor: pointer;

  &:hover {
    svg path {
      fill: #ffab6a;
    }
  }
`

const InputValue = styled.div`
  color: var(--black);
  font-weight: var(--fw-bold);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

function CartInput() {
  const [value, setValue] = useState(0)

  return (
    <QuantityInput>
      <InputButton
        onClick={() =>
          setValue(currentValue => (currentValue === 1 ? 0 : currentValue - 1))
        }
      >
        <MinusIcon />
      </InputButton>
      <InputValue>{value}</InputValue>
      <InputButton onClick={() => setValue(value + 1)}>
        <PlusIcon />
      </InputButton>
    </QuantityInput>
  )
}

export { CartInput }
