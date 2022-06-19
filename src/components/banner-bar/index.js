import React from 'react'

export const BannerBar = () => {
  return (
    <section id="slider" className="hero p-0 odd featured">
            <div className="swiper-container no-slider slider-h-75">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide-center">

                        <img src="assets/images/bg-4.jpg" className="full-image" data-mask="70" />

                        <div className="slide-content row text-center">
                            <div className="col-12 mx-auto inner">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" className="title effect-static-text">Contact Us</h1>
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/#demos">Home</a></li>
                                        <li className="breadcrumb-item"><a href="/#pages">Pages</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
