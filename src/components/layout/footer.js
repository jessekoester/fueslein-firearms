import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

export default function Footer () {
  return (
    <>
      <section id="contact" className="section-6 odd form">
        <div className="container smaller">
          <div className="row text-center intro">
            <div className="col-12">
              <h2 className="mb-0 super effect-static-text">Need a Quote?</h2>
            </div>
          </div>
          <form
            action="php/form.php"
            id="leverage-simple-form"
            className="leverage-simple-form"
          >
            <div className="row form-group-margin">
              <div className="col-12 col-md-6 m-0 p-2 input-group">
                <input
                  type="text"
                  name="name"
                  className="form-control field-name"
                  placeholder="Name"
                />
              </div>
              <div className="col-12 col-md-6 m-0 p-2 input-group">
                <input
                  type="email"
                  name="email"
                  className="form-control field-email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12 m-0 p-2 input-group">
                <textarea
                  name="message"
                  className="form-control field-message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-12 col-12 m-0 pl-md-2">
                <span className="form-alert"></span>
              </div>
              <div className="col-12 input-group m-0 p-2">
                <a className="btn primary-button">Request Quote</a>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer className="odd">
        <section id="footer" className="footer">
          <div className="container">
            <div className="row items footer-widget">
              <div className="col-12 col-lg-3 p-0">
                <div className="row">
                  <div className="branding col-12 p-3 text-center text-lg-left item">
                    <div className="brand">
                      <a href="/" className="logo">
                        <img
                          src="/images/ff-logo.svg"
                          alt="Fueslein Firearms"
                          style={{ width: '100%', height: 150 }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-9 p-0">
                <div className="row">
                  <div className="col-12 col-lg-4 p-3 text-center text-lg-left item">
                    <h4 className="title">Reach Out</h4>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <BsPhone className="icon-phone mr-2" />
                          616 402 6223
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <MdOutlineMail className="icon-envelope mr-2" />
                          FuesleinFirearms@gmail.com
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.instagram.com/kylefueslein"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillInstagram className='mr-2'/>
                        </a>
                        <a
                          href="https://www.facebook.com/fuesleinfirearmsgh"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillFacebook />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
