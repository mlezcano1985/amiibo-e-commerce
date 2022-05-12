import { Box } from '@mui/material'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import AmiiboDetails from '../../components/amiibo-details'
import Breadcrumbs from '../../components/breadcrumbs'
import CircularLoading from '../../components/circular-loading'
import WithLayout from '../../components/with-layout'
import { ComponentProps } from '../../global'
import Amiibo from '../../models/amiibo'
import amiiboService from '../../services/amiibo-service'

type ProductDetailPageProps = ComponentProps & {
  data: Amiibo
}
const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ data }) => {
  const router = useRouter()
  const title = data?.name
  const pending = router.isFallback || !router.isReady

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
        {pending ? (
          <CircularLoading />
        ) : (
          <AmiiboDetails amiibo={data as Amiibo} />
        )}
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  console.log(`Product ID ${id}: Revalidate data`)

  const data = await amiiboService.getById(id)
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

export default WithLayout(ProductDetailPage)
