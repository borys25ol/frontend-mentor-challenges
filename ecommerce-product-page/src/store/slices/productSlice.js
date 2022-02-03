import { createSlice } from '@reduxjs/toolkit'

import image1 from 'assets/images/image-product-1.jpg'
import image2 from 'assets/images/image-product-2.jpg'
import image3 from 'assets/images/image-product-3.jpg'
import image4 from 'assets/images/image-product-4.jpg'
import thumbnail1 from 'assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from 'assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from 'assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from 'assets/images/image-product-4-thumbnail.jpg'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    currentProduct: {
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      brand: 'Sneaker Company',
      description:
        'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      price: 250.0,
      images: [image1, image2, image3, image4],
      thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
      discount: 0.5,
      discountPrice: 125.0,
    },
  },
  reducers: {},
})

export const productSelector = state => state.product.currentProduct

export default productSlice.reducer
