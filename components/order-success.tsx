import { ComponentProps } from '../global'
import Image from 'next/image'
import deliveryImg from '../public/images/delivery.png'
import successImg from '../public/images/success.png'
import Moment from 'react-moment'
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import ShopingCartItem from '../models/shoping-cart-item'
import { useDispatch } from 'react-redux'
import { clear as clearCart } from '../services/shopping-cart-slice'
import { clear as clearCheckout } from '../services/checkout-slice'

type OrderSuccessProps = ComponentProps & {
  createdAt: Date
  orderNumber: string
  cartItems: ShopingCartItem[]
}
const OrderSuccess: React.FC<OrderSuccessProps> = ({
  createdAt,
  orderNumber,
  cartItems = [],
}) => {
  const total = cartItems.reduce((prev, current) => {
    return prev + current.amount * current.item.price
  }, 0)

  const distpach = useDispatch()

  const reset = () => {
    distpach(clearCart())
    distpach(clearCheckout())
  }

  return (
    <>
      <Box width={1} height={1} bgcolor="background.paper" p={2}>
        <Box
          px={1}
          py={3}
          width={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={deliveryImg} alt="Imagen Delivery" />
        </Box>
        <Box
          pb={3}
          px={1}
          width={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={successImg} alt="Imagen OK" />
        </Box>
        <Box
          width={1}
          px={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="fontWeightBold"
          fontSize="h4.fontSize"
          textAlign="center"
        >
          Felicidades
        </Box>
        <Box
          width={1}
          px={1}
          py={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="body2" component="p">
            Se ha generado satisfactoriamente su pedido de compra.
          </Typography>
        </Box>
        <Box
          width={1}
          px={1}
          py={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="body2" component="p">
            Fecha:&nbsp;
            <strong>
              <Moment date={createdAt} format="YYYY-MM-DD" />
            </strong>
          </Typography>
        </Box>
        <Box
          width={1}
          px={1}
          py={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="body2" component="p">
            Hora:&nbsp;
            <strong>
              <Moment date={createdAt} format="HH:mm:ss" />
            </strong>
          </Typography>
        </Box>
        <Box
          px={1}
          py={0.5}
          width={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="body2" component="p">
            Número de Pedido:&nbsp;
            <strong>{orderNumber}</strong>
          </Typography>
        </Box>
        <Box
          width={1}
          px={1}
          py={0.5}
          pt={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="subtitle2" component="p">
            Detalles de sus productos
          </Typography>
        </Box>
        <Box
          width={1}
          px={1}
          py={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <TableContainer component={Paper} elevation={0}>
            <Table aria-label="Productos">
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>SubTotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map(({ item, amount }) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell>{amount}</TableCell>
                      <TableCell>${item.price}</TableCell>
                      <TableCell>${amount * item.price}</TableCell>
                    </TableRow>
                  )
                })}
                <TableRow>
                  <TableCell component="th" scope="row">
                    <strong>Valor Total:</strong>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <strong>${total}</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          m={1}
          width={1}
          height={1}
          p={2}
        >
          <Box p={2}>
            <Link href="/">
              <Button color="primary" onClick={reset}>
                Inicio
              </Button>
            </Link>
          </Box>
          <Box p={2}>
            <Link href="/products">
              <Button variant="contained" color="primary" onClick={reset}>
                Seguir comprando
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default OrderSuccess
