import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
  search: string
}

const initialState: State = {
    search: "Москва"
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer