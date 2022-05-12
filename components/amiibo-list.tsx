import { Box, Button, Grid } from '@mui/material'
import Amiibo from '../models/amiibo'
import { ComponentProps } from '../global'
import AmiiboItem from './amiibo-item'
import { useState } from 'react'

type AmiiboListProps = ComponentProps & {
  items: Amiibo[]
}

const AmiiboList: React.FC<AmiiboListProps> = ({ items }) => {
  const [list, setList] = useState<Amiibo[]>(items.slice(0, 10))
  const [more, setMore] = useState<Amiibo[]>(items.slice(list.length))

  const viewMore = (): void => {
    const next = more.slice(0, 10)
    const page = next.length + list.length

    setList([...list, ...next])
    setMore(items.slice(page))
  }

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {list.map((amiibo) => (
          <AmiiboItem key={amiibo.id} amiibo={amiibo} />
        ))}
      </Grid>

      {more.length > 0 && (
        <Box
          width={1}
          py={3}
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Button variant="contained" onClick={viewMore}>
            Ver más
          </Button>
        </Box>
      )}
    </>
  )
}

export default AmiiboList
