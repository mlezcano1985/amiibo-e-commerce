import { ReactElement, ReactNode } from 'react'
import { NextPageWithLayout } from '../global'
import Layout from './layout'

export default function WithLayout<P>(
  page: NextPageWithLayout<P>
): NextPageWithLayout<P> {
  page.getLayout = (el: ReactElement): ReactNode => <Layout>{el}</Layout>
  return page
}
