import React from 'react'

const ContactPage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Contact Us <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon bg-primary d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text">
                        <p><span>Address:</span> Bishe behind Hwol-Azah opp. Army engineer Zaria road, Jos, P.O box, 13497, Plateau state Nigeria</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon bg-secondary d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text">
                        <p><span>Phone:</span> <a href="tel://+2347033883043">+234 7033883043</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon bg-tertiary d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text">
                        <p><span>Email:</span> <a href="mailto:gocijos@g-mail.com">gocijos@g-mail.com</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon bg-quarternary d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text">
                        <p><span>Website</span> <a href="https://goci.com">goci.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Contact Us</h3>
                      <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">Full Name</label>
                              <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">Email Address</label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">Subject</label>
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="message">Message</label>
                              <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="submit" value="Send Message" className="btn btn-primary" />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-5 img" style={{ backgroundImage: "url(images/about-3.jpg)" }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div id="map" className="map" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)' }}>
                  <div className="gm-err-container">
                    <div className="gm-err-content">
                      <div className="gm-err-icon">
                        <img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="" draggable="false" style={{ userSelect: 'none' }} />
                      </div>
                      <div className="gm-err-title">Oops! Something went wrong.</div>
                      <div className="gm-err-message">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage