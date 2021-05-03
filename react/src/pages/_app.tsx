import { Container } from '../styles/stylesApp'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/global-styles'

import { Header } from 'components/Header'
import { Player } from 'components/Player'

import { AppProps } from 'next/app'
import { PlayerContextProvider } from 'contexts/PlayerContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerContextProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </PlayerContextProvider>
  )
}

export default MyApp
