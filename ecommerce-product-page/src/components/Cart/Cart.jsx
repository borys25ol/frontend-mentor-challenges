import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProductImage from 'assets/images/image-product-1-thumbnail.jpg'
import { ReactComponent as IconRemove } from 'assets/icons/icon-delete.svg'
import { CartButton } from 'components/CartButton'

const CartContainer = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  padding: 0 24px;
  display: ${props => (props.opened ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 33px;
  position: absolute;
  width: 360px;
  height: 256px;
  border: 1px solid black;
  right: -40px;
  border-radius: 10px;
`

const Header = styled.div`
  padding-top: 24px;
  padding-bottom: 27px;
  border-bottom: 1px solid #e4e9f2;
  color: var(--black);
  font-weight: var(--fw-bold);
`

const CartItem = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`

const ItemImage = styled.img.attrs(props => {
  return {
    src: props.src,
    alt: props.alt,
  }
})`
  width: 50px;
  height: 50px;
`

const ItemInfo = styled.div``

const ProductName = styled.p``

const PriceContainer = styled.div`
  span {
    line-height: 26px;
  }
`

const ProductPrice = styled.span``

const Separator = styled.span`
  padding: 0 4px;
`

const Quantity = styled.span``

const TotalPrice = styled.span`
  color: var(--black);
  font-weight: var(--fw-bold);
  margin-left: 10px;
`

const CheckoutButton = styled.button`
  padding: 22px 119px 18px 120px;
  color: var(--white);
  background-color: var(--orange);
  border: 0;
  border-radius: 10px;
`

function Cart({ cartOpened, handleCartClick }) {
  return (
    <CartContainer>
      <CartButton handleCartClick={handleCartClick} />
      <Wrapper opened={cartOpened}>
        <Header>Cart</Header>
        <CartItem>
          <ItemImage src={ProductImage} alt='product image' />
          <ItemInfo>
            <ProductName>Fall Limited Edition Sneakers</ProductName>
            <PriceContainer>
              <ProductPrice>$125.00</ProductPrice>
              <Separator>x</Separator>
              <Quantity>3</Quantity>
              <TotalPrice>$375.00</TotalPrice>
            </PriceContainer>
          </ItemInfo>
          <IconRemove />
        </CartItem>
        <CheckoutButton>Checkout</CheckoutButton>
      </Wrapper>
    </CartContainer>
  )
}

Cart.propTypes = {
  cartOpened: PropTypes.bool,
  handleCartClick: PropTypes.func,
}

export { Cart }
