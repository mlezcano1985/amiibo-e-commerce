import { Grid } from '@mui/material'
import Amiibo from '../models/amiibo'
import { ComponentProps } from '../global'
import AmiiboItem from './amiibo-item'

type AmiiboListProps = ComponentProps & {
  items: Amiibo[]
}

const AmiiboList: React.FC<AmiiboListProps> = ({ items }) => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {items.map((amiibo) => (
          <AmiiboItem key={amiibo.id} amiibo={amiibo} />
        ))}
      </Grid>
    </>
  )
}

export default AmiiboList
