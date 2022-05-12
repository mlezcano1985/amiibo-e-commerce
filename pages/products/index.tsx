import type { NextPage } from 'next'
import AmiiboList from '../../components/amiibo-list'
import WithLayout from '../../components/with-layout'
import { useGetAllAmiibosQuery } from '../../services/amiibo-api'
import Box from '@mui/material/Box'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Typography } from '@mui/material'

const Products: NextPage = () => {
  const { isFetching, data = [], error } = useGetAllAmiibosQuery(undefined)

  if (isFetching) return <>Loading...</>
  if (error) return <>Oh no, there was an error</>

  const title = 'Productos'

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" current={title} />
      <Box width={1} height={1} p={1}>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
      </Box>
      <AmiiboList items={data} />
    </>
  )
}

export default WithLayout(Products)
