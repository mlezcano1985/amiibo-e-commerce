import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItemText,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Amiibo from '../models/amiibo'
import { ComponentProps } from '../global'

type AmiiboItemProps = ComponentProps & {
  amiibo: Amiibo
}

const AmiiboItem: React.FC<AmiiboItemProps> = ({ amiibo }) => {
  const url = `/products/${amiibo.id}`

  return (
    <Grid item>
      <Card>
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
              <Image
                src={amiibo.image}
                alt={`Imagen para el personaje ${amiibo.character}`}
                width={150}
                height={200}
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ${amiibo.price}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {amiibo.name}
              </Typography>
              {/* <List>
                  <ListItemText secondary={`Serie: ${amiibo.amiiboSeries}`} />
                  <ListItemText secondary={`Personaje: ${amiibo.character}`} />
                  <ListItemText secondary={`Juego: ${amiibo.gameSeries}`} />
                </List> */}
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions disableSpacing sx={{ justifyContent: 'space-around' }}>
          <Button size="small">Agregar al carro</Button>
          <Button size="small">Ver detalles</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default AmiiboItem
