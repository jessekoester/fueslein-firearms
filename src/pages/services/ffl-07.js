import React, { Fragment } from 'react'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBannerSmall } from '../../components/header/header-banner-small'

export default function About () {
  return (
    <Fragment>
      <Head pageTitle="About Us" />
      <Layout>
        <HeaderBannerSmall
          bannerText={'Cerakote™'}
          bannerPhoto={'about-banner.png'}
        />
        <section id="about" className="section-1 odd image-right">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-left">
                <div className="row intro">
                  <div className="col-12 p-0">
                    <h2 className="featured alt">Cerakote™</h2>
                    <p>
                      We are cerakote certified applicator that specializes in
                      custom theme builds, battleworn effect, camouflage, and
                      custom created artwork based on customers requests.
                      Doesn’t matter what look you want Fueslein Firearms can
                      create it using cerakote to get a one of a kind look that
                      is also extremely durable with zero maintenance and will
                      last a lifetime. We offer a complete satisfaction
                      guarantee, if your not happy with the work we performed at
                      time of pickup we will offer to respray your item for
                      free. We cut no corners and the quality of work performed
                      is 2nd to none. This is a great option for: firearms,
                      automotive industry. Headers and exhaust, tumblers,
                      sporting equipment, tools, knives and many additional
                      industries or items.
                    </p>
                    <p>
                      <h4>What is Cerakote™ ?</h4> Cerakote is a ceramic based
                      finish that can be applied to metals, plastics, polymers
                      and wood. The unique formulation used for Cerakote ceramic
                      coating enhances a number of physical performance
                      properties including abrasion/wear resistance, corrosion
                      resistance, chemical resistance, impact strength, and
                      hardness. Each of these properties is rigorously tested to
                      guarantee that Cerakote products remain at the forefront
                      of the ceramic coatings market. Cerakote ceramic coatings
                      utilize state-of-the-art technology to out-perform any
                      competitive coating in both laboratory settings and
                      real-world applications. For performance and durability
                      test results please check out{' '}
                      <a href="https://www.cerakote.com/" target="_blank" rel="noreferrer">
                        Cerakote’s website
                      </a>
                      .
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
