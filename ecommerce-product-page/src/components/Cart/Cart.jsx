import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CartButton } from 'components/CartButton'
import { useShoppingCart } from 'hooks/useShoppingCart'
import { ReactComponent as IconRemove } from 'assets/icons/icon-delete.svg'

const CartContainer = styled.div`
  position: relative;
  z-index: 20;
`

const Wrapper = styled.div`
  padding: 0 24px 32px;
  display: ${props => (props.opened ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 35px;
  position: absolute;
  min-width: 360px;
  width: 96vw;
  min-height: 256px;
  right: -63px;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);

  @media screen and (min-width: 320px) and (max-width: 374px) {
    min-width: 300px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
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
  justify-content: flex-start;

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

const ItemInfo = styled.div`
  flex-basis: 232px;
  margin-left: 16px;
  flex-grow: 1;
`

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
  font-weight: var(--fw-bold);
  border: 0;
  border-radius: 10px;
`

const EmptyCart = styled.span`
  text-align: center;
  margin-top: 77px;
`

function Cart({ cartOpened, handleCartClick }) {
  const { totalItems, cartItems, handleRemoveFromCart } = useShoppingCart()

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity
  }

  return (
    <CartContainer>
      <CartButton handleCartClick={handleCartClick} />
      <Wrapper opened={cartOpened}>
        <Header>Cart</Header>
        {totalItems > 0 && (
          <>
            {cartItems.map(cartItem => (
              <CartItem key={cartItem.id}>
                <ItemImage src={cartItem.cartImage} alt='product cart image' />
                <ItemInfo>
                  <ProductName>{cartItem.name}</ProductName>
                  <PriceContainer>
                    <ProductPrice>${cartItem.productPrice}</ProductPrice>
                    <Separator>x</Separator>
                    <Quantity>{cartItem.quantity}</Quantity>
                    <TotalPrice>
                      $
                      {calculateTotalPrice(
                        cartItem.productPrice,
                        cartItem.quantity
                      )}
                    </TotalPrice>
                  </PriceContainer>
                </ItemInfo>
                <IconRemove
                  onClick={() =>
                    handleRemoveFromCart(cartItem.id, cartItem.quantity)
                  }
                />
              </CartItem>
            ))}
            <CheckoutButton>Checkout</CheckoutButton>
          </>
        )}
        {!totalItems && <EmptyCart>Your cart is empty.</EmptyCart>}
      </Wrapper>
    </CartContainer>
  )
}

Cart.propTypes = {
  cartOpened: PropTypes.bool,
  handleCartClick: PropTypes.func,
}

export { Cart }
