import React from 'react'

const AboutChurch = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 d-flex">
            <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style={{backgroundImage: 'url(/images/about-3.jpg)'}}>
            </div>
          </div>
          <div className="col-md-6 pl-md-5 py-md-5">
            <div className="heading-section pt-md-5 mb-4">
              <span className="subheading">Welcome to Global Outreach for Christ International (GOCI)</span>
              <h2 className="mb-5">Connect, Grow and Serve with Us</h2>
              <p>A faith-based, non-profit Christian mission agency founded in 1996, dedicated to fulfilling Christ's mandate of world evangelization. Our vision is to be a mission agency with a global presence, reaching the unreached with the gospel of our Lord Jesus Christ.</p>
              <p><strong>Our Strategy</strong>: We recruit, train, and deploy missionaries to unreached groups and provide support—prayer, financial, material, and moral—as they plant the Gospel.</p>
              <p><strong>Our Goal</strong>: Planting indigenous churches that are self-governing, self-sustaining, and self-propagating to accelerate gospel propagation worldwide.</p>
              <p><a href="#" className="btn btn-primary">Learn More</a></p>
            </div>
          </div>
        </div>
      </div>
	</section>
  )
}

export default AboutChurch