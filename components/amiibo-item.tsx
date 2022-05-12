import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Amiibo from '../models/amiibo'
import { ComponentProps } from '../global'
import AmiiboImage from './amiibo-image'
import AddToCart from './add-to-cart'

type AmiiboItemProps = ComponentProps & {
  amiibo: Amiibo
}

const AmiiboItem: React.FC<AmiiboItemProps> = ({ amiibo }) => {
  return (
    <Grid item>
      <Card
        sx={{
          width: 250,
        }}
      >
        <Link
          href={{
            pathname: '/products/[id]',
            query: { id: amiibo.id },
          }}
        >
          <CardActionArea>
            <Box
              width={1}
              pt={1}
              sx={{ justifyContent: 'center', display: 'flex' }}
            >
              <AmiiboImage amiibo={amiibo} />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ${amiibo.price}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {amiibo.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions disableSpacing>
          <AddToCart item={amiibo} />
        </CardActions>
      </Card>
    </Grid>
  )
}

export default AmiiboItem
