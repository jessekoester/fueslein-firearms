import React, { Fragment } from 'react'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBannerSmall } from '../../components/header/header-banner-small'

export default function LaserEngraving () {
  return (
    <Fragment>
      <Head pageTitle="Laser Engraving" />
      <Layout>
        <HeaderBannerSmall
          bannerText={'Laser Engraving'}
          bannerPhoto={'about-banner.png'}
        />
        <section id="about" className="section-1 odd image-right">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-left">
                <div className="row intro">
                  <div className="col-12 p-0">
                    <h2 className="featured alt">Laser Engraving</h2>
                    <p>
                      Using a 50 Watt fiber laser allows Fueslein Firearms to
                      take customization to the next step. Whether its deep
                      engraving, annealing, removing coatings, changing colors,
                      vaporizing polymers, or light etching the possibilities
                      are endless. Whether its firearms, jewelry, coins,
                      tumblers, custom business cards, pet name tags, sports
                      equipment, gaming, and everything in between laser
                      engraving can be used to make your piece custom and set
                      you apart from everyone else. We specialize in creating
                      one off custom artwork to upload into the laser and
                      engraved onto your item. Whether its artwork you created
                      from an art class to your signature added to a piece of
                      jewelry. If its 1 piece or 1,000 pieces we are setup to
                      handle it all.
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
