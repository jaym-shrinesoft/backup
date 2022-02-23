import { createSlice } from '@reduxjs/toolkit'

export const darmSlice = createSlice({
  name: "darm",
  initialState:{
    value:""
  },
  reducers:{
    onDarmChange: (state, action) => {
      state.value = action.payload
    },
  }
})

export const {onDarmChange} = darmSlice.actions;

export const selectDARM = state => state.darm.value;

export default darmSlice.reducer;