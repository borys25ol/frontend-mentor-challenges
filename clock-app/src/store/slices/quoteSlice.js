import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { RANDOM_QUOTE_URL } from '../../config'

export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(RANDOM_QUOTE_URL)
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    text: null,
    author: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchQuote.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchQuote.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.text = action.payload.en
      state.author = action.payload.author
    },
    [fetchQuote.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export default quoteSlice.reducer
