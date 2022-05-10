import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import ShoppingCart from './shopping-cart'

export default function Header(): JSX.Element {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            Amiibo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <ShoppingCart />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
