import React, { Fragment } from 'react'
import { Head } from '../components/head'
import { Layout } from '../components/layout'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ImageSlider from '../components/image-slider'

export default function Home () {
  return (
    <Fragment>
      <Head pageTitle="Home" />
      <Layout>
        <ImageSlider />
        <section id="content" className="section-1 odd offers featured">
          <div className="container">
            <div className="row">
              <main className="col-12 col-lg-7 p-0">
                <div className="row">
                  <div className="col-12 align-self-center">
                    <h2 className="featured mt-0 ml-0">Fueslein Firearms</h2>
                    <p>
                      Fueslein Firearms is a leading Cerakote refinishing and
                      laser engraving company located in Grand Haven, Michigan.
                      We maintain a comprehensive inventory of Cerakote ceramic
                      coatings with a wide selection of colors in the H series,
                      and highly trained personnel to completely refinish your
                      gun/firearm, etc.
                    </p>
                    <p>
                      We refinish custom and stock firearms, FFL-07. These
                      specialized Protective Coatings are applied to your
                      firearms or other sporting equipment (knives, scopes, etc)
                      to protect against corrosion, moisture, damaging chemicals
                      or solvents, scrapes, scratches, bangs and bruises. This
                      will ultimately protect the firearm or sporting equipment
                      from the elements as it stops rust before it starts.
                    </p>
                    <p>
                      Give your old, worn firearm a new lease on life with one
                      of our state of the art durable firearm finishes. You can
                      add personality to your favorite weapon with a custom
                      pattern or color along with custom laser engraving.
                    </p>
                    <p>
                      <blockquote>
                        Fast, friendly service, with attention to quality and
                        detail like none other!
                      </blockquote>
                    </p>
                    <h4>What We Offer</h4>
                    <ul>
                      <li>Custom and production cerakote application</li>
                      <li>Custom and production laser engraving</li>
                      <li>Custom firearm builds</li>
                      <li>Firearm sales and transfer</li>
                      <li>Gunsmith work </li>
                      <li>Firearm or other restorations</li>
                      <li>Custom Stippling</li>
                    </ul>
                  </div>
                </div>
              </main>
              <aside className="col-12 col-lg-5 pl-lg-5 p-0 float-right sidebar">
                <div className="row">
                  <div className="col-12 align-self-right text-right">
                    <img
                      src="/images/welcome.png"
                      style={{ marinLeft: '20px', marginBottom: '10px' }}
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section id="services" className="section-4 odd offers featured">
          <div className="container">
            <div className="row text-center intro">
              <div className="col-12">
                <h2>Service Offerings</h2>
              </div>
            </div>
            <div className="row justify-content-center text-center items">
              <div className="col-12 col-md-6 col-lg-4 item">
                <div className="card featured">
                  <h4>Cerakote &reg;</h4>
                  <p>
                    The unrivaled leader in thin-film ceramic polymer hybrid
                    coatings
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 item">
                <div className="card">
                  <h4>Laser Engraving</h4>
                  <p>
                    Deep laser engraving, Laser etching, Laser stippling, Laser
                    marking/branding, NFA engraving, Bulk/production laser
                    services, Custom laser service
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 item">
                <div className="card">
                  <h4>Custom Builds</h4>
                  <p>
                    We specialize in AR and Glock platform, but if you dream we
                    can build it
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 item">
                <div className="card">
                  <h4>Restorations</h4>
                  <p>
                    We offer restoration services for most items and specialize
                    in firearms
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 item">
                <div className="card">
                  <h4>Slide Milling</h4>
                  <p>
                    We offer optic cuts, porting, serrations, adding texture etc..
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 item">
                <div className="card featured">
                  <h4>More Services</h4>
                  <p>
                    Professional knife sharpening services, firearm cleaning
                    firearm safety checks, Glock certified armorer, email for
                    quote
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}
