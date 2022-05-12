import { Badge, Box, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import ShopingCartItem from '../models/shoping-cart-item'
import { selectCartItems } from '../services/shopping-cart/shopping-cart-slice'
import ShoppingCartList from './shopping-cart-list'

const ShoppingCart: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const cartItems = useSelector<RootState, ShopingCartItem[]>(selectCartItems)

  const total = cartItems.reduce((prev, current) => {
    return prev + current.amount
  }, 0)

  const handleClick = () => (): void => {
    setOpen((prev: boolean) => !prev)
  }
  const toggleDrawer = (): void => {
    setOpen(false)
  }

  return (
    <>
      <IconButton
        aria-label="cart"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick()}
        color="inherit"
      >
        <Badge badgeContent={total} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <ShoppingCartList
        cartItems={cartItems}
        open={open}
        onClose={toggleDrawer}
      />
    </>
  )
}

export default ShoppingCart
