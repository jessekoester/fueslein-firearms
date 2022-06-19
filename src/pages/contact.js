import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

export default function Contact () {
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
        <title>Vitalign Spine Center - Coming Soon</title>
      </Helmet>sdfasdf
      <div className="hero-image">
        <video autoPlay muted loop className="bg-video">
          <source src="/video/main-bg-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="contact-container">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="card form-container p-2 h-100">
                <div className="container">
                  <div className="row h-100">
                    <div className="col-md-5 justify-content-center align-items-center p-3 left-col">
                      <img src="/images/primary-logo.svg" alt="Vitalign Spine Clinic" className="primary-logo "/>
                    </div>
                    <div className="col-md-7 p-3 right-col">
                      <h4>Welcome to Vitalign Spine Clinic</h4>
                      <p>
                        Dr. Chad Herrboldt would like to thank you for checking out <a href="vitalignspine.com">VitalignSpine.com</a>.
                      </p>
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
        </div>
      </div>
    </Fragment>
  )
}
