import { Box, Container } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import { useSelector } from 'react-redux'
import OrderSuccess from '../components/order-success'
import ShopingCartItem from '../models/shoping-cart-item'
import { selectCartItems } from '../services/shopping-cart-slice'
import { RootState } from '../store'

const SuccessPage: NextPage = () => {
  const createdAt = new Date()
  const orderNumber = Math.random().toString(36).substring(2, 20).toUpperCase()
  const cartItems = useSelector<RootState, ShopingCartItem[]>(selectCartItems)

  return (
    <>
      <Container maxWidth="sm">
        <Box width={1} p={2} mt={5}>
          <OrderSuccess
            createdAt={createdAt}
            orderNumber={orderNumber}
            cartItems={cartItems}
          />
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

export default SuccessPage
