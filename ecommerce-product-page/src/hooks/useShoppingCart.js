import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  addToCart,
  cartSelector,
  removeFromCart,
  setCart,
} from 'store/slices/cartSlice'
import { productSelector } from 'store/slices/productSlice'
import { useLocalStorage } from 'hooks/useLocalStorage'

function useShoppingCart() {
  const { totalItems, cart } = useSelector(cartSelector)
  const { name, price, discountPrice, images } = useSelector(productSelector)
  const { storedValue, setValue } = useLocalStorage('cart', {
    cart: [],
    totalItems: 0,
  })
  const dispatch = useDispatch()

  const handleAddToCart = (productId, quantity) => {
    const productPrice = discountPrice || price
    dispatch(
      addToCart({
        productId,
        quantity,
        name,
        productPrice,
        cartImage: images[0],
      })
    )
  }

  const handleRemoveFromCart = (productId, quantity) => {
    dispatch(removeFromCart({ productId, quantity }))
  }

  useEffect(() => {
    dispatch(
      setCart({ cart: storedValue.cart, totalItems: storedValue.totalItems })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setValue({ cart, totalItems })
  }, [cart, totalItems, setValue])

  return {
    totalItems,
    cartItems: cart,
    handleAddToCart,
    handleRemoveFromCart,
  }
}

export { useShoppingCart }
