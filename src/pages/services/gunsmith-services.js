import React, { Fragment } from 'react'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBannerSmall } from '../../components/header/header-banner-small'

export default function GunsmithServices () {
  return (
    <Fragment>
      <Head pageTitle="Gunsmith Services" />
      <Layout>
        <HeaderBannerSmall
          bannerText={'Gunsmith Services'}
          bannerPhoto={'about-banner.png'}
        />
        <section id="about" className="section-1 odd image-right">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-left">
                <div className="row intro">
                  <div className="col-12 p-0">
                    <h2 className="featured alt">Gunsmith Services</h2>
                    <p>
                      Offer slide cutting, optic cuts, porting, serrations,
                      checkering, vents, sight installation & removal, safety
                      checks, sling mounts, bore sighting, scope installation,
                      scope ring lapping, trigger jobs, barrel fitting, feed
                      ramp polishing, barrel crowning, and general repair.
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
