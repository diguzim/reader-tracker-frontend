import type { AppProps } from 'next/app'
import { MainNavigation } from 'layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainNavigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
