import React, { Fragment } from 'react'
import { Layout } from '../../components/layout'

import { Head } from '../../components/head'
import { HeaderBanner } from '../../components/header/header-banner'
import { ImageGallery } from '../../components/image-gallery/index'

export default function Gallery () {
  return (
    <Fragment>
      <Head pageTitle="Project Gallery" />
      <Layout>
        <HeaderBanner
          bannerText={'Project Gallery'}
          bannerPhoto={'services.png'}
        />
        <section id="services" className="section-1 odd offers">
          <div className="container">
            <div className="row">
                <ImageGallery />
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}
