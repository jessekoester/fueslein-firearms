import React from 'react'

export const HeaderBannerSmall = ({ bannerText, bannerPhoto }) => {
  return (
    <section id="slider" className="hero p-0 odd featured">
      <div className="swiper-container no-slider slider-small-h-auto">
        <div className="swiper-small-wrapper">
          <div className="swiper-small-slide slide-center">
            <img
              src={`/images/${bannerPhoto}`}
              className="full-image"
              data-mask="70"
            />

            <div className="slide-content row text-center">
              <div className="col-12 mx-auto inner">
                <h1
                  data-aos="zoom-out-up"
                  data-aos-delay="400"
                  className="title effect-static-text"
                >
                  {bannerText}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
