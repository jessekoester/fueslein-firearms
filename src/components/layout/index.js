import React, { Fragment } from 'react'
import Footer from './footer'
import Navigation from './navigation'

export const Layout = (props) => {
  return (
    <Fragment>
    <Navigation />
      {props.children}
    <Footer />
    </Fragment>
  )
}
