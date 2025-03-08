import React from 'react'

const MinistriesPage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Ministries <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Church Ministries</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/ministry-1.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Evangelism & Church Planting</h2>
                <p>Our mission is dedicated to spreading the Gospel and establishing new churches among various unreached communities. We currently have 72 mission stations across different states, reaching diverse ethnic groups with the love of Christ.</p>
                {/* <p><a href="sermons.html" className="btn btn-primary">More Details</a></p> */}
              </div>
            </div>
            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/ministry-2.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Discipleship & Leadership Training</h2>
                <p>We prioritize equipping new believers and training local leaders to continue the work of ministry. Through mentorship, Bible study groups, and leadership development programs, we ensure that every church has strong, faithful leaders.</p>
                {/* <p><a href="sermons.html" className="btn btn-primary">More Details</a></p> */}
              </div>
            </div>
            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/ministry-3.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Educational Support & Schools</h2>
                <p>Education is key to community transformation. We are actively involved in establishing and supporting schools in mission areas, providing access to education for children who otherwise might not have the opportunity.</p>
                {/* <p><a href="sermons.html" className="btn btn-primary">More Details</a></p> */}
              </div>
            </div>

            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/ministry-4.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Medical Outreach</h2>
                <p>We organize periodic medical missions to provide free healthcare, medicines, and health education to underserved communities. This ministry helps meet urgent health needs while also opening doors for evangelism.</p>
                {/* <p><a href="sermons.html" className="btn btn-primary">More Details</a></p> */}
              </div>
            </div>

            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/ministry-5.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Prayer & Intercession Ministry</h2>
                <p>We believe in the power of prayer and encourage individuals and churches to intercede for the lost, for missionaries on the field, and for the expansion of God’s Kingdom.</p>
                {/* <p><a href="sermons.html" className="btn btn-primary">More Details</a></p> */}
              </div>
            </div>

            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/ministry-6.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Community Development & Humanitarian Aid</h2>
                <p>Our ministry goes beyond preaching the Gospel—we also address the practical needs of the communities we serve. We engage in initiatives such as:</p>
                <ul>
                  <li>Providing clean water and sanitation</li>
                  <li>Supporting local farming efforts</li>
                  <li>Medical outreaches and health education </li>
                </ul>
                {/* <p><a href="sermons.html" className="btn btn-primary">More Details</a></p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MinistriesPage