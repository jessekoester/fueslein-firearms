import React, { Fragment } from 'react'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBannerSmall } from '../../components/header/header-banner-small'

export default function CustomBuilds () {
  return (
    <Fragment>
      <Head pageTitle="Custom Builds" />
      <Layout>
        <HeaderBannerSmall
          bannerText={'Custom Builds'}
          bannerPhoto={'about-banner.png'}
        />
        <section id="about" className="section-1 odd image-right">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-left">
                <div className="row intro">
                  <div className="col-12 p-0">
                    <h2 className="featured alt">Custom Builds</h2>
                    <p>
                      Fueslein Firearms offers custom firearms builds
                      specializing in the AR and Glock platform. The amount of
                      options and possibilities are endless, whether your
                      looking for a long range rifle to a home defense pistol.
                      We custom build your firearms based on your budget which
                      allows us to get you the most amount for your money. We
                      use only USA made parts in our builds and source as many
                      of those parts locally as possible. All rifle barrels used
                      are guaranteed sub moa accurate and from start to finish
                      your firearm is hand build by the 1 person throughout. Our
                      goal is to build you the exact firearm you have envisioned
                      while keeping quality and customer service our first
                      priority. All while offering suggestions along the way
                      based on our experience and know how. We stand behind
                      everything we do.
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
