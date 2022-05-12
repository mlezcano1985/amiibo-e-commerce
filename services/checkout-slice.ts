import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Customer from '../models/customer'
import Shipping from '../models/shipping'
import { RootState } from '../store'

const defaultCustomer = (): Customer => ({
  dni: '',
  birthdate: '',
  email: '',
  firstname: '',
  lastname: '',
  phone: '',
})

const defaultShipping = (): Shipping => ({
  address: '',
})

type CheckoutState = {
  customer: Customer
  shipping: Shipping
}

const initialState: CheckoutState = {
  customer: defaultCustomer(),
  shipping: defaultShipping(),
}

const checkoutSlice = createSlice({
  initialState,
  name: 'checkout',
  reducers: {
    updateCustomer: (state, { payload }: PayloadAction<Customer>) => {
      state.customer = payload
    },
    updateShipping: (state, { payload }: PayloadAction<Shipping>) => {
      state.shipping = payload
    },
    clear: (state) => {
      state.customer = defaultCustomer()
      state.shipping = defaultShipping()
    },
  },
})

export const { updateCustomer, updateShipping, clear } = checkoutSlice.actions

export const selectCustomer = (state: RootState) => state.checkout.customer
export const selectShipping = (state: RootState) => state.checkout.shipping

export default checkoutSlice
