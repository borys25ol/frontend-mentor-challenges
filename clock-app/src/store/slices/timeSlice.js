import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import moment from 'moment'
import { CURRENT_TIME_URL } from '../../config'

export const fetchCurrentDatetime = createAsyncThunk(
  'datetime/fetchCurrentTime',
  async function (ip, { rejectWithValue }) {
    try {
      const response = await fetch(CURRENT_TIME_URL(ip))
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      const datetime = moment(data.datetime)
      return {
        ...data,
        datetime: {
          seconds: datetime.seconds(),
          minutes: datetime.minutes(),
          hours: datetime._pf.parsedDateParts[3],
        },
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const datetimeSlice = createSlice({
  name: 'datetime',
  initialState: {
    datetime: {
      seconds: null,
      minutes: null,
      hours: null,
    },
    timezoneAbbreviation: null,
    dayOfWeek: null,
    weekNumber: null,
    dayOfYear: null,
    timezone: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCurrentDatetime.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchCurrentDatetime.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.datetime = { ...action.payload.datetime }
      state.timezoneAbbreviation = action.payload.abbreviation
      state.timezone = action.payload.timezone
      state.dayOfWeek = action.payload.day_of_week
      state.weekNumber = action.payload.week_number
      state.dayOfYear = action.payload.day_of_year
    },
    [fetchCurrentDatetime.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export default datetimeSlice.reducer
