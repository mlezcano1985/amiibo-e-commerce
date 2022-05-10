import { Badge, IconButton } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const ShoppingCart: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => (): void => {
    setOpen((prev: boolean) => !prev)
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
        <Badge badgeContent={3} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  )
}

export default ShoppingCart
