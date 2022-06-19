import React, { Fragment } from 'react'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBannerSmall } from '../../components/header/header-banner-small'

export default function Stippling () {
  return (
    <Fragment>
      <Head pageTitle="Stippling" />
      <Layout>
        <HeaderBannerSmall
          bannerText={'Stippling'}
          bannerPhoto={'about-banner.png'}
        />
        <section id="about" className="section-1 odd image-right">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-left">
                <div className="row intro">
                  <div className="col-12 p-0">
                    <h2 className="featured alt">Stippling</h2>
                    <p>
                      We specialize in Glock frame stippling but can do all
                      brands of firearms. We offer the complete frame package
                      including, undercut, double undercut, grip reduction,
                      finer groove removal, adding gas pedal with tilted ledges,
                      dehorned trigger guard, mag release scallop full or mini,
                      tapered tang, magwell flare or whatever else your looking
                      to have done. Currently only able to laser stipple glock
                      frames but sig frames coming soon. With many different
                      patterns to choose from and various different
                      aggressiveness of texture and styles.
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
