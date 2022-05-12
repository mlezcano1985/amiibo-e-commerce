import type { NextPage, GetStaticProps } from 'next'
import AmiiboList from '../../components/amiibo-list'
import WithLayout from '../../components/with-layout'
import Box from '@mui/material/Box'
import Breadcrumbs from '../../components/breadcrumbs'
import { Typography } from '@mui/material'
import CircularLoading from '../../components/circular-loading'
import amiiboService from '../../services/amiibo-service'
import Amiibo from '../../models/amiibo'
import { useRouter } from 'next/router'
import { ComponentProps } from '../../global'

type ProductsPageProps = ComponentProps & {
  data: Amiibo[]
}
const ProductsPage: NextPage<ProductsPageProps> = ({ data }) => {
  const router = useRouter()
  const title = 'Productos'
  const pending = router.isFallback || !router.isReady

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" current={title} />
      <Box width={1} height={1} p={1}>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
      </Box>
      {pending ? <CircularLoading /> : <AmiiboList items={data} />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('Products: Revalidate data')

  const data = await amiiboService.getAll()
  return {
    props: {
      data,
    },
    revalidate: 20,
  }
}

export default WithLayout(ProductsPage)
