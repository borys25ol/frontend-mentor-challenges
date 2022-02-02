import React from 'react'
import styled from 'styled-components'

import { CartInput } from 'components/CartInput/CartInput'
import { ReactComponent as CartIcon } from 'assets/icons/icon-cart.svg'

const Wrapper = styled.div`
  padding-top: 24px;

  @media screen and (min-width: 1024px) {
    flex-basis: 445px;
  }
`

const Brand = styled.span`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1.85px;
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  color: var(--orange);

  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 2px;
  }
`

const Name = styled.h1`
  margin-top: 19px;
  font-size: 28px;
  line-height: 32px;
  color: var(--black);

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    font-size: 44px;
    line-height: 48px;
  }
`

const Description = styled.p`
  margin-top: 19px;
  font-size: 15px;
  line-height: 25px;
  color: #69707d;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 16px;
    line-height: 26px;
  }
`

const PriceWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--fw-bold);

  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const DiscountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Price = styled.span`
  font-size: 28px;
  line-height: 35px;
  color: var(--black);
`

const Percent = styled.span`
  display: inline-block;
  padding: 3px 9px 4px 9px;
  margin-left: 16px;
  line-height: 20px;
  color: var(--orange);
  border-radius: 6px;
  background-color: var(--orange-pale);

  @media screen and (min-width: 1024px) {
    margin-left: 31px;
  }
`

const RegularPrice = styled.span`
  line-height: 26px;
  color: #b6bcc8;
  text-decoration: line-through;

  @media screen and (min-width: 1024px) {
    margin-top: 3px;
  }
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 32px;
  }
`

const AddToCartButton = styled.div`
  margin-top: 38px;
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
    padding: 22px 0 18px 0;
    flex-basis: 272px;
    font-size: 16px;

    &:hover {
      background-color: #ffab6a;
    }
  }
`

function ProductInfo() {
  return (
    <Wrapper>
      <Brand>Sneaker Company</Brand>
      <Name>Fall Limited Edition Sneakers</Name>
      <Description>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Description>
      <PriceWrapper>
        <DiscountWrapper>
          <Price>$125.00</Price>
          <Percent>50%</Percent>
        </DiscountWrapper>
        <RegularPrice>$250.00</RegularPrice>
      </PriceWrapper>
      <FormWrapper>
        <CartInput />
        <AddToCartButton>
          <CartIcon />
          <span>Add to cart</span>
        </AddToCartButton>
      </FormWrapper>
    </Wrapper>
  )
}

export { ProductInfo }
