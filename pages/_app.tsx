import React from 'react'
import type { AppProps } from 'next/app'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Meta from '@/components/layout/meta'
import options from '@/i18n'
import theme from '@/theme'
import { wrapper } from '@/store'

import '@/styles/globals.css'

i18n.use(initReactI18next).init(options)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
