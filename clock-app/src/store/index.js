import { configureStore } from '@reduxjs/toolkit'

import ipSlice from './slices/ipSlice'
import quoteSlice from './slices/quoteSlice'
import datetimeSlice from './slices/timeSlice'

export default configureStore({
  reducer: {
    ip: ipSlice,
    datetime: datetimeSlice,
    quote: quoteSlice,
  },
})
