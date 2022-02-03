import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as CartIcon } from 'assets/icons/icon-cart.svg'
import { ReactComponent as MinusIcon } from 'assets/icons/icon-minus.svg'
import { ReactComponent as PlusIcon } from 'assets/icons/icon-plus.svg'
import { useShoppingCart } from 'hooks/useShoppingCart'

const QuantityInput = styled.div`
  margin-top: 24px;
  padding: 18px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--blue-light-grayish);

  @media screen and (min-width: 768px) {
    flex-basis: 357px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0;
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

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`

const AddToCartButton = styled.div`
  margin-top: 38px;
  margin-left: 16px;
  padding: 22px 0 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: var(--fw-bold);
  color: var(--white);
  background-color: var(--orange);
  border-radius: 10px;
  box-shadow: 0px 20px 50px -20px var(--orange);
  transition: 0.4s;
  cursor: pointer;

  span {
    padding-left: 15px;
  }

  svg path {
    fill: var(--white);
  }

  @media screen and (min-width: 768px) {
    padding: 28px 0 24px 0;
    font-size: 20px;
    margin-top: 0;
    flex-basis: 372px;
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 0 16px 0;
    flex-basis: 272px;
    font-size: 16px;

    &:hover {
      background-color: #ffab6a;
    }
  }
`

function CartForm({ productId }) {
  const [quantity, setQuantity] = useState(0)
  const { handleAddToCart } = useShoppingCart()

  return (
    <>
      <QuantityInput>
        <InputButton
          onClick={() =>
            setQuantity(currentValue =>
              currentValue < 1 ? 0 : currentValue - 1
            )
          }
        >
          <MinusIcon />
        </InputButton>
        <InputValue>{quantity}</InputValue>
        <InputButton onClick={() => setQuantity(quantity + 1)}>
          <PlusIcon />
        </InputButton>
      </QuantityInput>
      <AddToCartButton
        onClick={() => {
          quantity && handleAddToCart(productId, quantity)
          setQuantity(0)
        }}
      >
        <CartIcon />
        <span>Add to cart</span>
      </AddToCartButton>
    </>
  )
}

CartForm.propTypes = {
  productId: PropTypes.number,
}

export { CartForm }
