import { Box, Button, Divider, Drawer, Typography } from '@mui/material'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ComponentProps } from '../global'
import ShopingCartItem from '../models/shoping-cart-item'
import { clear } from '../services/shopping-cart-slice'
import ShoppingCartListItem from './shopping-cart-list-item'

type ShoppingCartListProps = ComponentProps & {
  open: boolean
  onClose: (event: unknown) => void
  cartItems: ShopingCartItem[]
}
const ShoppingCartList: React.FC<ShoppingCartListProps> = ({
  open,
  onClose,
  cartItems,
}) => {
  const total = cartItems.reduce((prev, current) => {
    return prev + current.amount * current.item.price
  }, 0)

  const dispatch = useDispatch()

  const clearCart = () => {
    dispatch(clear())
    onClose(null)
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        height={'85%'}
        sx={{
          overflowY: 'auto',
        }}
        width={1}
      >
        <Box
          p={4}
          sx={{
            width: 300,
            maxWidth: 300,
            height: 80,
          }}
        >
          <Typography variant="h6" component="div">
            Productos Añadidos
          </Typography>
        </Box>
        {cartItems.map((cartItem) => {
          return (
            <ShoppingCartListItem key={cartItem.item.id} cartItem={cartItem} />
          )
        })}
      </Box>
      <Box height={'15%'} width={1}>
        <Box mx={2} mb={1} display="flex">
          <Box flexGrow={1} color="text.primary">
            <strong>Subtotal:</strong>
          </Box>
          <Box color="text.primary">
            <strong>${total}</strong>
          </Box>
        </Box>
        <Box mb={1} display="block">
          <Divider />
        </Box>
        <Box m={1} display="block">
          <Link href="/checkout">
            <Button
              onClick={onClose}
              variant="contained"
              size="small"
              color="primary"
              fullWidth
              disabled={cartItems.length < 1}
            >
              Finalizar Compra
            </Button>
          </Link>
        </Box>
        <Box m={1} display="block">
          <Button
            size="small"
            color="primary"
            fullWidth
            disabled={cartItems.length < 1}
            onClick={clearCart}
          >
            Vaciar Carro
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default ShoppingCartList
