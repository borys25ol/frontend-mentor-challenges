import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CartForm } from 'components/CartForm'
import { formatPrice } from 'utils/priceFormater'

const Wrapper = styled.div`
  padding-top: 24px;

  @media screen and (min-width: 1024px) {
    padding-top: 0;
    margin-top: 62px;
    margin-left: 125px;
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
    justify-content: flex-start;
  }
`

function ProductInfo({ product }) {
  return (
    <Wrapper>
      <Brand>{product.brand}</Brand>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <PriceWrapper>
        <DiscountWrapper>
          <Price>{formatPrice(product.discountPrice)}</Price>
          <Percent>{product.discount * 100}%</Percent>
        </DiscountWrapper>
        <RegularPrice>{formatPrice(product.price)}</RegularPrice>
      </PriceWrapper>
      <FormWrapper>
        <CartForm productId={product.id} />
      </FormWrapper>
    </Wrapper>
  )
}

ProductInfo.propTypes = {
  product: PropTypes.object,
}

export { ProductInfo }
