import { Box, Divider, Grid, Typography } from '@mui/material'
import { ComponentProps } from '../global'
import Amiibo from '../models/amiibo'
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
            <Typography variant="body1" color="inherit" component="div">
              {amiibo.amiiboSeries}
            </Typography>
          </Box>
          <Divider />
        </Grid>
      </Grid>
    </>
  )
}

export default AmiiboDetails
