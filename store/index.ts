import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import amiiboApi from '../services/amiibo-api'

const store = configureStore({
  reducer: {
    [amiiboApi.reducerPath]: amiiboApi.reducer,
  },
  middleware: (mdw) => mdw().concat(amiiboApi.middleware),
  devTools: true,
})

setupListeners(store.dispatch)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
