import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalItems: 0,
  },
  reducers: {
    setCart(state, action) {
      state.cart = action.payload.cart
      state.totalItems = action.payload.totalItems
    },
    addToCart(state, action) {
      const { productId, quantity, name, productPrice, cartImage } =
        action.payload
      const productInCart = state.cart.find(item => item.id === productId)
      if (productInCart) {
        const updatedCart = state.cart.map(item => {
          if (item.id === productId) {
            return { ...item, quantity: productInCart.quantity + quantity }
          }
          return item
        })
        state.cart = updatedCart
      } else {
        state.cart = [
          ...state.cart,
          { id: productId, quantity, productPrice, cartImage, name },
        ]
      }
      state.totalItems = state.cart.reduce((accumulator, current) => {
        return accumulator + current.quantity
      }, 0)
    },
    removeFromCart(state, action) {
      const { productId, quantity } = action.payload
      state.cart = state.cart.filter(cartItem => cartItem.id !== productId)
      state.totalItems = state.totalItems - quantity
    },
  },
})

export const { setCart, addToCart, removeFromCart } = cartSlice.actions

export const cartSelector = state => state.cart

export default cartSlice.reducer
