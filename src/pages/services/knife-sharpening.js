import React, { Fragment } from 'react'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBannerSmall } from '../../components/header/header-banner-small'

export default function KnifeSharpening () {
  return (
    <Fragment>
      <Head pageTitle="Knife Sharpening" />
      <Layout>
        <HeaderBannerSmall
          bannerText={'Knife Sharpening'}
          bannerPhoto={'about-banner.png'}
        />
        <section id="about" className="section-1 odd image-right">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-left">
                <div className="row intro">
                  <div className="col-12 p-0">
                    <h2 className="featured alt">Knife Sharpening</h2>
                    <p>
                      You will not be disappointed with our knife sharpening
                      services, We use the best manual system on the market and
                      have the capabilities to sharpen your edge up to 100,000
                      grit or .01 micron. Most of our customers go for the
                      Mirrored finished edge service. This service takes your
                      edge and matches the factory angle, taking it down enough
                      to remove any edge damage and brings it back to life. Then
                      through a series of stones and films we take the edge to a
                      high polished mirrored finish finishing at .01 micron.
                      This leaves a sharper than razor edge that is also
                      aesthetically pleasing.
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
