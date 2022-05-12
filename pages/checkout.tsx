import { Box, Container, Typography } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../components/breadcrumbs'
import CheckoutForm from '../components/checkout-form'
import Customer from '../models/customer'
import Shipping from '../models/shipping'
import { selectCustomer, selectShipping } from '../services/checkout-slice'
import { RootState } from '../store'

const CheckoutPage: NextPage = () => {
  const customer = useSelector<RootState, Customer>(selectCustomer)
  const shipping = useSelector<RootState, Shipping>(selectShipping)

  const title = 'Checkout'

  return (
    <>
      <Container maxWidth="sm">
        <Breadcrumbs aria-label="breadcrumb" current={title} />
        <Box width={1} height={1} p={1}>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
        </Box>
        <Box width={1} p={2} bgcolor="background.paper" borderRadius={1}>
          <CheckoutForm customer={customer} shipping={shipping} />
        </Box>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default CheckoutPage
