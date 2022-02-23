import { createSlice } from '@reduxjs/toolkit'

export const nameSlice = createSlice({
  name: 'name',
  initialState: {
    value: "",
  },
  reducers: {
    onNameChange: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {onNameChange } = nameSlice.actions
export const selectName = state => state.name.value;


export default nameSlice.reducer