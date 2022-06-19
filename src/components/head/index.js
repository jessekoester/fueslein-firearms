import React from 'react'
import { Helmet } from 'react-helmet'

export const Head = ({ pageTitle }) => {
  return (
    <Helmet bodyAttributes={{
      class: 'home theme-mode-dark'
    }}>
        <meta charSet="utf-8" />
        <title>Fueslein Firearms - {pageTitle}</title>

        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="assets/images/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="assets/images/apple-touch-icon-114x114.png" />

        <link rel="stylesheet" href="assets/css/theme-yellow.css" />

        <div className="swiper-slide slide-center">
            <img src="/images/gun-collage.png" className="full-image" data-mask="50" />
        </div>

      </Helmet>
  )
}
