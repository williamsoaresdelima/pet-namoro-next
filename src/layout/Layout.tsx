import React from 'react'

import { LayoutContainer } from './style'
import Header from './Header'
import Footer from './Footer'
import LoadingSpinner from '../components/Loading/Loading'

function Layout({children}: any) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div>
      {isLoading ? <LoadingSpinner/> : null}
      <Header/>
      <main className='layout'>
        {children}
      </main>
      <Footer setLoading={setIsLoading}/>
      <style jsx>
        {LayoutContainer}
      </style>
    </div>
  )
}

export default Layout