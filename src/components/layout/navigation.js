import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navigation () {
  return (
    <header>
      <nav
        data-aos="zoom-out"
        data-aos-delay="800"
        className="navbar navbar-expand"
      >
        <div className="container header">
          <a className="navbar-brand" href="/">
            <img src="/images/ff-logo.svg" alt="Fueslein Firearms" />
          </a>

          <div className="ml-auto"></div>

          <ul className="navbar-nav items">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="/services" className="nav-link">
                Services <IoIosArrowDropdownCircle className="ml-2" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item dropdown">
                  <li className="nav-item">
                    <a href="/services/cerakote" className="nav-link">
                      Cerakote
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/services/laser-engraving" className="nav-link">
                      Laser Engraving
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/services/stippling" className="nav-link">
                      Stippling
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/services/custom-builds" className="nav-link">
                      Custom Builds
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/services/knife-sharpening" className="nav-link">
                      Knife Sharpening
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/services/restorations" className="nav-link">
                      Restorations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/services/gunsmith-services" className="nav-link">
                      Gunsmith
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/services/ffl-07" className="nav-link">
                      FFL 07
                    </a>
                  </li>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/gallery" className="nav-link">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact-us" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav icons">
            <li className="nav-item social">
              <a
                href="https://www.facebook.com/fuesleinfirearmsgh"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="nav-item social">
              <a
                href="https://www.instagram.com/kylefueslein/"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav action">
            <li className="nav-item ml-3">
              <a
                href="#contact"
                className="smooth-anchor btn ml-lg-auto dark-button"
              >
                Get A Quote
              </a>
            </li>
          </ul>
          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#menu"
              >
                <GiHamburgerMenu className="icon-menu m-0" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
