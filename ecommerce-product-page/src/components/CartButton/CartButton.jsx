import React from 'react'
import styled from 'styled-components'

import { ReactComponent as IconCart } from 'assets/icons/icon-cart.svg'
import PropTypes from 'prop-types'

const Button = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 0;
  background-color: transparent;
  outline: 0;
  cursor: pointer;

  svg path {
    fill: ${props =>
      !!props.active ? 'var(--black)' : 'var(--blue-dark-grayish)'};
  }
`

const Quantity = styled.span`
  position: absolute;
  top: -5px;
  right: -6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  font-size: 10px;
  border-radius: 6.5px;
  font-weight: var(--fw-bold);
  color: var(--white);
  background-color: var(--orange);
`

function CartButton({ handleCartClick }) {
  return (
    <Button active={true} onClick={() => handleCartClick()}>
      <IconCart />
      <Quantity>3</Quantity>
    </Button>
  )
}

export { CartButton }

CartButton.propTypes = {
  handleCartClick: PropTypes.func,
}
