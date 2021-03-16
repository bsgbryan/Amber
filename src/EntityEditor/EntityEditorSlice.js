import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'EntityEditor',
  initialState: {
    currentEntity: 'frame',
  },
  reducers: {
    setCurrentEntity: (state, { payload }) => ({ ...state, currentEntity: payload })
  }
})

export const {
  setCurrentEntity
} = slice.actions

export default slice.reducer