import React, { Fragment } from 'react'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBannerSmall } from '../../components/header/header-banner-small'

export default function Restorations () {
  return (
    <Fragment>
      <Head pageTitle="Restorations" />
      <Layout>
        <HeaderBannerSmall
          bannerText={'Restorations'}
          bannerPhoto={'about-banner.png'}
        />
        <section id="about" className="section-1 odd image-right">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-left">
                <div className="row intro">
                  <div className="col-12 p-0">
                    <h2 className="featured alt">Restorations</h2>
                    <p>
                      We offer full firearms restorations whether you want to
                      update a few items on your restoration project or keep it
                      completely original. Email for quote and availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}
