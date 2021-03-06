import PropTypes from 'prop-types'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simple Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
