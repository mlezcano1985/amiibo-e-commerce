import { ComponentProps } from '../global'
import ShopingCartItem from '../models/shoping-cart-item'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import FolderIcon from '@mui/icons-material/Folder'
import AddToCart from './add-to-cart'
import { Box, Divider, Typography } from '@mui/material'
import { display } from '@mui/system'
import Link from 'next/link'

type ShoppingCartListItemProps = ComponentProps & {
  cartItem: ShopingCartItem
}
const ShoppingCartListItem: React.FC<ShoppingCartListItemProps> = ({
  cartItem,
}) => {
  const { item, amount } = cartItem

  return (
    <Box
      width={1}
      sx={{
        width: 300,
        maxWidth: 300,
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
        width={1}
      >
        <Box p={1}>
          <Avatar src={item.image} />
        </Box>
        <Box
          p={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1">
            <Link
              href={{
                pathname: '/products/[id]',
                query: { id: item.id },
              }}
            >
              {item.name}
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
        width={1}
      >
        <Box
          p={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Typography variant="subtitle2">
            ${item.price} x {amount}
          </Typography>
        </Box>
        <Box p={1}>
          <AddToCart item={item} />
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}

export default ShoppingCartListItem
