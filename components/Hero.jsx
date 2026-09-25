import React from 'react'

const Hero = () => {
  return (
    <section className="hero-wrap js-fullheight">
      <div className="home-slider js-fullheight owl-carousel">
        {/* Slide 1: Prayer & Mission Calling */}
        <div className="slider-item js-fullheight" style={{ backgroundImage: 'url(/images/church-prayer.png)' }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9 ftco-animate">
                <div className="text mt-md-5 w-100 text-center">
                  <h2>Global Outreach for Christ International (GOCI)</h2>
                  <h1 className="mb-4" style={{ fontSize: '2.2rem' }}>
                    The kingdom people with the King’s message to the kingdoms of the world.
                  </h1>
                  <p className="mb-0">
                    <a href="/about" className="btn btn-primary py-3 px-4 mr-2">More About Us</a>
                    <a href="/partner" className="btn btn-white py-3 px-4">Partner With Us</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Convention & World Evangelization */}
        <div className="slider-item js-fullheight" style={{ backgroundImage: 'url(/images/church-convention.png)' }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9 ftco-animate">
                <div className="text mt-md-5 w-100 text-center">
                  <h2>Reaching The Unreached Frontiers</h2>
                  <h1 className="mb-4" style={{ fontSize: '2.2rem' }}>
                    Taking Christ&apos;s Mandate to Virgin Mission Fields Across Northern Nigeria &amp; Beyond.
                  </h1>
                  <p className="mb-0">
                    <a href="/missions" className="btn btn-primary py-3 px-4 mr-2">Our Mission Fields</a>
                    <a href="/events" className="btn btn-white py-3 px-4">Retreat &amp; Anniversary</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero