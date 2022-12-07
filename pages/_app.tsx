import type { AppProps } from 'next/app'

import Layout from '../src/layout/Layout'
import { apolloClient, ApolloProvider } from '../src/apolloClient'
import globalStyles from '../styles/globals.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>
        {globalStyles}
      </style>
    </ApolloProvider>
  )
}
