import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import AmiiboDetails from '../../components/amiibo-details'
import Breadcrumbs from '../../components/breadcrumbs'
import WithLayout from '../../components/with-layout'
import Amiibo from '../../models/amiibo'
import { useGetAmiiboByIdQuery } from '../../services/amiibo-api'

const ProductDetailPage: NextPage = (props) => {
  const router = useRouter()
  const { id } = router.query

  const { error, isFetching, data } = useGetAmiiboByIdQuery(id as string, {
    skip: !router.isReady,
  })

  if (isFetching || !router.isReady) return <>Loading...</>
  if (error) return <>Oh no, there was an error</>

  const title = data?.name

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        current={title}
        parents={[
          {
            path: '/products',
            text: 'Productos',
          },
        ]}
      />
      <Box
        width={1}
        height={1}
        p={4}
        mt={4}
        bgcolor="background.paper"
        borderRadius={1}
      >
        <AmiiboDetails amiibo={data as Amiibo} />
      </Box>
    </>
  )
}

export default WithLayout(ProductDetailPage)
