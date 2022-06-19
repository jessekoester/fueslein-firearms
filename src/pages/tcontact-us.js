import React, { useState, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Layout } from '../components/layout'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HeaderBanner } from '../components/header/header-banner'

export default function ContactUs () {
  const [contact, setContact] = useState(
    {
      mailSent: false,
      error: null
    }
  )

  const [cName, setCName] = useState('')
  const [cEmail, setCEmail] = useState('')
  const [cPhone, setCPhone] = useState('')
  const [cMessage, setCMessage] = useState('')
  const [messageTooltip, setMessageTooltip] = useState({ show: false })

  const displaymessageTooltip = event => {
    if (!messageTooltip.show) {
      setMessageTooltip(prev => ({ ...prev, show: true })) // show tooltip
      setTimeout(() => {
        setMessageTooltip(prev => ({ ...prev, show: false })) // remove/hide tooltip
      }, 5000)
    }
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    axios({
      method: 'post',
      url: '/php/contact.php', // change this to correct endpoint
      headers: { 'content-type': 'application/json' },
      data: {
        name: cName,
        email: cEmail,
        phone: cPhone,
        message: cMessage,
        ...contact
      }
    })
      .then(result => {
        if (result.data.sent) {
          displaymessageTooltip()
          setContact({
            mailSent: result.data.sent,
            error: false
          })
        } else {
          setContact({
            ...contact,
            error: true
          })
        }
      })
      .catch(error => setContact({ ...contact, error: error.message }))
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/css/icofont/icofont.min.css"></link>
        <title>Vitalign Spine Center - Contact Us</title>
      </Helmet>
      <Layout>
        <HeaderBanner bannerText={'Contact Vitalign'}/>
        <div className="container-fluid content-container">
          <div className="row mt-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                    <div className="contact-info">
                      <h5>Contact Info</h5>
                      <ul>
                        <li>
                          <i className="icofont-ui-message"></i>
                          <a href="mailto:info@vitalignspine.com">Info@vitalignspine.com</a>
                        </li>
                        <li>
                          <i className="icofont-stock-mobile"></i>
                          <a href="tel:1234567890">Call: 123 456 7890</a><br />
                        </li>
                        <li>
                          <i className="icofont-location-pin"></i>123 Main Street<br />City, State 12345
                        </li>
                      </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div>
                      <h5>Get in Touch</h5>
                      <p>
                        Please take just a moment to fill out your contact information and Dr. Herrboldt will personally contact you with updates about upcoming clinic information.
                      </p>
                      <p>
                        Be Blessed and remember - life is always better when you’re in align.
                      </p>
                      { messageTooltip.show &&
                        <div className="alert alert-success my-1" role="alert" >
                          Your message has been sent!
                        </div>
                        }
                      <form method="post" action="#" name="Contact Form" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                          <input type="text" className="form-control" id="contact-name" aria-describedby="Name" placeholder="Name" value={cName} onChange={e => setCName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="contact-email" aria-describedby="Email" placeholder="Email" value={cEmail} onChange={e => setCEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                          <input type="tel" className="form-control" id="contact-phone" aria-describedby="Phone" placeholder="Phone" value={cPhone} onChange={e => setCPhone(e.target.value)}/>
                        </div>
                        <div className="form-group">
                          <textarea type="text" className="form-control" id="contact-name" aria-describedby="Name" placeholder="Message" value={cMessage} onChange={e => setCMessage(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-secondary">Send Message</button>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-area">
          <div className="container-fluid m-0 p-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45338.67868391131!2d-93.23515481284998!3d44.746801599237415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f631219cfba86f%3A0xa830ef8a3709c4bf!2sApple%20Valley%2C%20MN%2055124!5e0!3m2!1sen!2sus!4v1627426171317!5m2!1sen!2sus" loading="lazy"></iframe>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}
