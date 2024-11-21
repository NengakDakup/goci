import React from 'react'

const Gallery = () => {
  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt">
      <div className="container-fluid px-md-0">
        <div className="row no-gutters justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Gallery</span>
            <h2>Galleries</h2>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-md-3">
            <a href="/images/outreach/1.jpg" className="image-popup img gallery ftco-animate" style={{backgroundImage: 'url(/images/outreach/1.jpg)'}}>
              <span className="overlay"></span>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/images/outreach/2.jpg" className="image-popup img gallery ftco-animate" style={{backgroundImage: 'url(/images/outreach/2.jpg)'}}>
              <span className="overlay"></span>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/images/outreach/17.jpg" className="image-popup img gallery ftco-animate" style={{backgroundImage: 'url(/images/outreach/17.jpg)'}}>
              <span className="overlay"></span>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/images/outreach/4.jpg" className="image-popup img gallery ftco-animate" style={{backgroundImage: 'url(/images/outreach/4.jpg)'}}>
              <span className="overlay"></span>
            </a>
          </div>
          <div className="col-md-6">
            <a href="/images/outreach/11.jpg" className="image-popup img gallery ftco-animate" style={{backgroundImage: 'url(/images/outreach/11.jpg)'}}>
              <span className="overlay"></span>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/images/outreach/6.jpg" className="image-popup img gallery ftco-animate" style={{backgroundImage: 'url(/images/outreach/6.jpg)'}}>
              <span className="overlay"></span>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/images/outreach/7.jpg" className="image-popup img gallery ftco-animate" style={{backgroundImage: 'url(/images/outreach/7.jpg)'}}>
              <span className="overlay"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery