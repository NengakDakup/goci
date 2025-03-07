import AboutChurch from '@/components/AboutChurch'
import AboutFull from '@/components/AboutFull'
import Gallery from '@/components/Gallery'
import Members from '@/components/Members'
import MissionStatement from '@/components/MissionStatement'
import Statistics from '@/components/Statistics'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>About us <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <MissionStatement />

      <AboutFull />

      <Statistics />

      <Members />

      <Gallery />
    </>
  )
}

export default AboutPage