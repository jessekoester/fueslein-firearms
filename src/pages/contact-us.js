import React, { Fragment } from 'react'
import { Layout } from '../components/layout'

import { Head } from '../components/head'
import { HeaderBanner } from '../components/header/header-banner'

export default function About () {
  return (
    <Fragment>
      <Head pageTitle="Contact Us"/>
      <Layout>
        <HeaderBanner bannerText={'Contact Us'} bannerPhoto={'about-banner.png'}/>
          <section id="contacts" className="section-1 odd offers">
            <div className="container">
                <div className="row intro">
                    <div className="col-12 col-md-9 align-self-center text-center text-md-left">
                      <div className="badge">24</div>
                        <h2 className="featured">Get in Touch</h2>

                    </div>
                </div>
                <div className="row justify-content-center text-center items">
                    <div className="col-12 col-md-6 col-lg-6 item">
                        <div className="card featured">
                            <i className="icon icon-phone"></i>
                            <h4>616 402 6223</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 item">
                        <div className="card featured">
                            <i className="icon icon-envelope"></i>
                            <h4>FuesleinFirearms@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    </Fragment>
  )
}
