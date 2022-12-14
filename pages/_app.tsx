import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react'

import Layout from '../src/layout/Layout'
import { apolloClient, ApolloProvider } from '../src/apolloClient'
import globalStyles from '../styles/globals.js'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <ToastContainer/>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>
          {globalStyles}
        </style>
      </ApolloProvider>
    </SessionProvider>
  )
}
