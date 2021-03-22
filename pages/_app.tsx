import type { AppProps } from 'next/app'

import { MainNavigation, MainWrapper, Footer, MainCenteredContent } from 'layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainWrapper>
      <MainCenteredContent>
        <MainNavigation />
        <Component {...pageProps} />
      </MainCenteredContent>
      <Footer />
    </MainWrapper>
  )
}

export default MyApp
