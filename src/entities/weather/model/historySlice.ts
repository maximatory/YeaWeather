import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import { IHistory } from "../../history/model/types"

export interface State {
  history: IHistory[] | []
}

const initialState: State = {
    history: []
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<IHistory>) => {
      state.history = [...state.history, action.payload]
    },
  },
})

export const { setHistory } = historySlice.actions

export default historySlice.reducer