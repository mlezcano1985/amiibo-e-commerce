import { NextPage } from 'next'
import { useRouter } from 'next/router'
import AmiiboDetails from '../../components/amiibo-details'
import WithLayout from '../../components/with-layout'
import Amiibo from '../../models/amiibo'
import { useGetAmiiboByIdQuery } from '../../services/amiibo-api'

const ProductDetail: NextPage = (props) => {
  const router = useRouter()
  const { id } = router.query

  const { error, isFetching, data } = useGetAmiiboByIdQuery(id as string, {
    skip: !router.isReady,
  })

  if (isFetching || !router.isReady) return <>Loading...</>
  if (error) return <>Oh no, there was an error</>

  return (
    <>
      <AmiiboDetails amiibo={data as Amiibo} />
    </>
  )
}

export default WithLayout(ProductDetail)
