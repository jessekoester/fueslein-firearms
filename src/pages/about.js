import React, { Fragment } from 'react'
import { Layout } from '../components/layout'

import { Head } from '../components/head'
import { HeaderBanner } from '../components/header/header-banner'

export default function About () {
  return (
    <Fragment>
      <Head pageTitle="About Us"/>
      <Layout>
        <HeaderBanner bannerText={'About Fueslein Firearms'} bannerPhoto={'about-banner.png'}/>
          <section id="about" className="section-1 odd image-right">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-left">
                        <div className="row intro">
                            <div className="col-12 p-0">
                                <h2 className="featured alt">About Us</h2>
                                <p>Fueslein Firearms was established in 2020, while being laid off due to COVID-19, doing what I enjoy, custom builds which lead to cerakote. 6 months later I purchased a fiber laser to expand my offerings in order to offer my customers more custom options. I pride myself on quality, attention to detail and customer service. Constantly trying to better my abilities to offer my customer more options with high quality and an affordable cost.</p>
                            </div>
                        </div>
                        <div className="row items">
                            <div className="col-12 p-0">
                                <div className="row item">
                                    <div className="col-12 col-md-9 align-self-center">
                                        <h4>Give Us a Shout!</h4>
                                        <p>Email: <a href="mailto:fuesleinfirearms@gmail.com" >fuesleinfirearms@gmail.com</a><br/>
                                        Phone: 616-402-6223<br/>
                                        Call or email for quote<br/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery col-12 col-md-6">
                        <a href="assets/images/about-4.jpg">
                            <img src="/images/about.png" className="fit-image" alt="About Us" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    </Fragment>
  )
}
