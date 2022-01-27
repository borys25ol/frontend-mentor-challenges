import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { CURRENT_IP_URL } from '../../config'
import { fetchCurrentDatetime } from './timeSlice'

export const fetchIp = createAsyncThunk(
  'ip/fetchIp',
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(CURRENT_IP_URL)
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()

      dispatch(
        setInfo({
          currentIp: data.ip,
          city: data.city,
          countryCode: data.country_code,
        })
      )
      dispatch(fetchCurrentDatetime(data.ip))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const ipSlice = createSlice({
  name: 'ip',
  initialState: {
    currentIp: null,
    city: null,
    countryCode: null,
    status: null,
    error: null,
  },
  reducers: {
    setInfo(state, action) {
      state.currentIp = action.payload.currentIp
      state.city = action.payload.city
      state.countryCode = action.payload.countryCode
    },
  },
  extraReducers: {
    [fetchIp.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchIp.fulfilled]: (state, action) => {
      state.status = 'resolved'
    },
    [fetchIp.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export const { setInfo } = ipSlice.actions

export default ipSlice.reducer
