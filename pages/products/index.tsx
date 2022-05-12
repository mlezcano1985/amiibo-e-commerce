import type { NextPage } from 'next'
import AmiiboList from '../../components/amiibo-list'
import WithLayout from '../../components/with-layout'
import { useGetAllAmiibosQuery } from '../../services/amiibo-api'
import Box from '@mui/material/Box'
import Breadcrumbs from '../../components/breadcrumbs'
import { Typography } from '@mui/material'
import CircularLoading from '../../components/circular-loading'

const ProductsPage: NextPage = () => {
  const { isFetching, data = [], error } = useGetAllAmiibosQuery(undefined)

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
      {isFetching ? <CircularLoading /> : <AmiiboList items={data} />}
    </>
  )
}

export default WithLayout(ProductsPage)
