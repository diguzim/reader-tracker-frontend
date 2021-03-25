import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { MainNavigation, MainWrapper, Footer, MainCenteredContent } from 'layouts'
import 'styles/globals.css'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <MainCenteredContent>
          <MainNavigation />
          <Component {...pageProps} />
        </MainCenteredContent>
        <Footer />
      </MainWrapper>
    </ThemeProvider>
  )
}

export default MyApp
