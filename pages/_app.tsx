import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { NextPageWithLayout } from '../global'

type AppPropsWithLayout<P> = AppProps & {
  Component: NextPageWithLayout<P>
}

function MyApp({ Component, pageProps }: AppPropsWithLayout<{}>) {
  const getLayout = Component.getLayout ?? ((page: NextPage) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
