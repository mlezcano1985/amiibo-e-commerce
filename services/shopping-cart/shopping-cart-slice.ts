import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Amiibo from '../../models/amiibo'
import ShopingCartItem from '../../models/shoping-cart-item'
import { RootState } from '../../store'

type ShoppingCartState = {
  items: ShopingCartItem[]
}

const initialState: ShoppingCartState = {
  items: [],
}

const shoppingCartSlice = createSlice({
  initialState,
  name: 'shoppingCart',
  reducers: {
    increment: (state, { payload }: PayloadAction<Amiibo>) => {
      const i = state.items.findIndex((value) => value.item.id === payload.id)
      if (i !== -1) {
        state.items[i].amount++
      } else {
        state.items.push({
          item: payload,
          amount: 1,
        })
      }
    },
    decrement: (state, { payload }: PayloadAction<Amiibo>) => {
      const i = state.items.findIndex((value) => value.item.id === payload.id)
      if (i !== -1) {
        if (state.items[i].amount < 2) {
          state.items.splice(i, 1)
        } else {
          state.items[i].amount--
        }
      }
    },
    incrementByAmount: (state, { payload }: PayloadAction<ShopingCartItem>) => {
      const i = state.items.findIndex(
        (value) => value.item.id === payload.item.id
      )
      state.items[i].amount = payload.amount
    },
    clear: (state) => {
      state.items = []
    },
  },
})

export const { increment, decrement, incrementByAmount, clear } =
  shoppingCartSlice.actions

export const selectCartItems = (state: RootState) => state.shoppingCart.items
export const selectCartItem = (item: Amiibo) => (state: RootState) =>
  state.shoppingCart.items.find((cart) => cart.item.id === item.id)

export default shoppingCartSlice
