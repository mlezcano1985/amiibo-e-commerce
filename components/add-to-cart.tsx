import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material'
import { ComponentProps } from '../global'
import ShopingCartItem from '../models/shoping-cart-item'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { ChangeEvent } from 'react'
import Amiibo from '../models/amiibo'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import {
  decrement,
  increment,
  selectCartItem,
} from '../services/shopping-cart-slice'
import { useDispatch } from 'react-redux'

type AddToCartProps = ComponentProps & {
  item: Amiibo
}
const AddToCart: React.FC<AddToCartProps> = ({ item }) => {
  const cartItem = useSelector<RootState, ShopingCartItem | undefined>(
    selectCartItem(item)
  ) || {
    amount: 0,
    item: {} as unknown as Amiibo,
  }

  const dispatch = useDispatch()

  const removeItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(decrement(item))
  }

  const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(increment(item))
  }

  const updateAmount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(increment(item))
  }

  return cartItem.amount === 0 ? (
    <Box
      width={1}
      sx={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Button variant="contained" onClick={addItem}>
        Agregar al carro
      </Button>
    </Box>
  ) : (
    <Paper
      component="div"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <IconButton
        sx={{ p: '6px 10px' }}
        aria-label="remove"
        onClick={removeItem}
        color="primary"
      >
        <RemoveCircleIcon />
      </IconButton>
      <Typography
        variant="body1"
        component="span"
        sx={{ flexGrow: 1, textAlign: 'center' }}
      >
        {cartItem.amount}
      </Typography>
      <IconButton
        sx={{ p: '6px 10px' }}
        aria-label="add"
        onClick={addItem}
        color="primary"
      >
        <AddCircleIcon />
      </IconButton>
    </Paper>
  )
}

export default AddToCart
