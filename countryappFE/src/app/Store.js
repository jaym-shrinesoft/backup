import { configureStore } from '@reduxjs/toolkit'
import nameReducer from '../InputDemo/nameSlice'

export default configureStore({
  reducer: {
    darm : nameReducer
  },
})