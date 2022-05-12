import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { ComponentProps } from '../global'
import Amiibo from '../models/amiibo'
import AddToCart from './add-to-cart'
import AmiiboImage from './amiibo-image'

type AmiiboDetailsProps = ComponentProps & {
  amiibo: Amiibo
}
const AmiiboDetails: React.FC<AmiiboDetailsProps> = ({ amiibo }) => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} sm={6}>
          <Box width={1} pt={1} sx={{ display: 'block' }}>
            <AmiiboImage amiibo={amiibo} layout="responsive" priority />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box width={1} pt={1} sx={{ display: 'block' }}>
            <Typography variant="h6" color="inherit" component="div">
              {amiibo.name}
            </Typography>
          </Box>
          <Box width={1} pt={1} sx={{ display: 'block' }}>
            <Typography variant="h4" color="inherit" component="div">
              ${amiibo.price}
            </Typography>
          </Box>

          <Box width={1} px={1} py={3} sx={{ display: 'block' }}>
            <TableContainer component={Paper} elevation={0}>
              <Table aria-label="Detalles deñ producto">
                <TableHead>
                  <TableRow>
                    <TableCell>Característica</TableCell>
                    <TableCell>Descripción</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Personaje</TableCell>
                    <TableCell>{amiibo.character}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Serie</TableCell>
                    <TableCell>{amiibo.amiiboSeries}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Juego</TableCell>
                    <TableCell>{amiibo.gameSeries}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box width={1} pt={3} sx={{ display: 'block' }}>
            <AddToCart item={amiibo} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default AmiiboDetails
