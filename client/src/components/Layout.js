import React from 'react'
import Header from './Header'
import Footers from './Footers'
import '../App'

const Layout = ({children}) => {
    return (
      <>
      <Header/>
      <div>{children}
      </div>
      <Footers/>
      </>
    )
  }
  
  export default Layout