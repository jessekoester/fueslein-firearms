import React, { Fragment } from 'react'
import { Layout } from '../components/layout'

import { Head } from '../components/head'
import { HeaderBanner } from '../components/header/header-banner'

export default function Services () {
  return (
    <Fragment>
      <Head pageTitle="Our Services"/>
      <Layout>
        <HeaderBanner bannerText={'Our Services'} bannerPhoto={'services.png'}/>
          <section id="services" className="section-1 odd offers">
            <div className="container">
                <div className="row intro">
                    <div className="col-12 col-md-9 align-self-center text-center text-md-left">
                        <h2 className="featured">Our Services</h2>
                    </div>
                    <div className="col-12 col-md-3 align-self-end">
                        <a href="contact-us" className="smooth-anchor btn mx-auto mr-md-0 ml-md-auto primary-button"><i className="icon-docs"></i>GET A QUOTE</a>
                    </div>
                </div>
                <div className="row justify-content-center text-center items">
                    <div className="col-12 col-md-6 item">
                        <div className="card featured">
                            <h4>Cerakote</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card">
                            <h4>Laser Engraving</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card">
                            <h4>Stippling</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card">
                            <h4>Custom Builds</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card">
                            <h4>Sales & Transfers</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card featured">
                            <h4>Kinfe Sharpening</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card">
                            <h4>Restorations</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card featured">
                            <h4>Gunsmith</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card">
                            <h4>Safety Checks</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card featured">
                            <h4>Firearm Cleaning</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 item">
                        <div className="card featured">
                            <h4>FFL 07</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    </Fragment>
  )
}
