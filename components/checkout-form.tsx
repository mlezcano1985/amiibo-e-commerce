import { Box, Button, TextField, Typography } from '@mui/material'
import { ComponentProps } from '../global'
import Customer from '../models/customer'
import Shipping from '../models/shipping'
import { useDispatch } from 'react-redux'
import { updateCustomer, updateShipping } from '../services/checkout-slice'
import React, { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import { useRouter } from 'next/router'

type CheckoutFormProps = ComponentProps & {
  customer: Customer
  shipping: Shipping
}
const CheckoutForm: React.FC<CheckoutFormProps> = ({ customer, shipping }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const handleCustomerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const prop = event.target.name
    const value = event.target.value

    dispatch(
      updateCustomer({
        ...customer,
        [prop]: value,
      })
    )
  }
  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const prop = event.target.name
    const value = event.target.value

    dispatch(
      updateShipping({
        ...shipping,
        [prop]: value,
      })
    )
  }

  const checkout = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // Simulando el cierre de la venta ...
    setLoading(true)
    setTimeout(() => {
      router.push('/success')
    }, 1000)
  }

  return (
    <>
      <Typography component="p" variant="subtitle2">
        Necesitamos estos datos para realizar la compra
      </Typography>
      <form name="checkout" onSubmit={checkout}>
        <Box width={1} py={1}>
          <TextField
            required
            name="dni"
            value={customer.dni}
            fullWidth
            label="DNI"
            onChange={handleCustomerChange}
          />
        </Box>
        <Box width={1} py={1}>
          <TextField
            required
            name="firstname"
            value={customer.firstname}
            fullWidth
            label="Nombres"
            onChange={handleCustomerChange}
          />
        </Box>
        <Box width={1} py={1}>
          <TextField
            required
            name="lastname"
            value={customer.lastname}
            fullWidth
            label="Apellidos"
            onChange={handleCustomerChange}
          />
        </Box>
        <Box width={1} py={1}>
          <TextField
            required
            name="email"
            value={customer.email}
            type="email"
            fullWidth
            label="Correo Electrónico"
            onChange={handleCustomerChange}
          />
        </Box>
        <Box width={1} py={1}>
          <TextField
            required
            name="phone"
            value={customer.phone}
            type="tel"
            fullWidth
            label="Teléfono"
            onChange={handleCustomerChange}
          />
        </Box>
        <Box width={1} py={1}>
          <TextField
            required
            name="address"
            value={shipping.address}
            fullWidth
            label="Dirección"
            onChange={handleShippingChange}
          />
        </Box>
        <Box width={1} py={1} display="flex" justifyContent="center">
          <LoadingButton
            size="small"
            onClick={checkout}
            loading={loading}
            variant="contained"
            type="submit"
          >
            Pagar
          </LoadingButton>
        </Box>
      </form>
    </>
  )
}

export default CheckoutForm
