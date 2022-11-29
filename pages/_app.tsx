import type { AppProps } from 'next/app'

import Layout from '../src/layout/Layout'
import globalStyles from '../styles/globals.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}
