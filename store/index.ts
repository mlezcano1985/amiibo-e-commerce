import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import amiiboApi from '../services/amiibo-api'
import checkoutSlice from '../services/checkout-slice'
import shoppingCartSlice from '../services/shopping-cart-slice'

const store = configureStore({
  reducer: {
    [amiiboApi.reducerPath]: amiiboApi.reducer,
    [shoppingCartSlice.name]: shoppingCartSlice.reducer,
    [checkoutSlice.name]: checkoutSlice.reducer,
  },
  middleware: (mdw) => mdw().concat(amiiboApi.middleware),
  devTools: true,
})

setupListeners(store.dispatch)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
