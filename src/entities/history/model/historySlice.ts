import { createSlice } from "@reduxjs/toolkit"

export interface State {
    history: string[]
}

const initialState: State = {
    history: []
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = [...state.history, action.payload]
    },
  },
})

export const { setHistory } = historySlice.actions

export default historySlice.reducer