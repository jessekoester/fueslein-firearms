import React, { Component } from 'react'

export default class ImageSlider extends Component {
  render () {
    return (
      <section id="slider" className="hero p-0 odd featured">
        <div className="swiper-container no-slider animation slider-h-100">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide-center">
              <img
                src="/images/gun-collage.png"
                className="full-image"
                data-mask="50"
              />
              <div className="slide-content row">
                <div className="col-12 d-flex inner">
                  <div className="center align-self-center text-center">
                    <h4
                      data-aos="zoom-out-up"
                      data-aos-delay="400"
                      className="title effect-static-text"
                    >
                      <img src="/images/ff-flag.svg" width="400" />
                      <br />
                      If you can dream it we can build it!
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    )
  }
}
