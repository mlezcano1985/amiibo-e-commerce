import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { NextPageWithLayout } from '../global'
import { Provider } from 'react-redux'
import store from '../store'

type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout<P>
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: NextPage) => page)
  const layout = getLayout(<Component {...pageProps} />)
  return <Provider store={store}>{layout}</Provider>
}

export default MyApp
