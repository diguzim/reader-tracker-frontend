import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { MainNavigation, MainWrapper, Footer, MainCenteredContent } from 'layouts'
import { theme } from 'styles'
import 'styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps) {
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
