import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './slices/cartSlice'
import productSlice from './slices/productSlice'

export default configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
})
