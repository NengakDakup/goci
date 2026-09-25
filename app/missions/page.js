import React from 'react'

const MissionsPage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Missions <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Church Missions / Education</h1>
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
              <div className="img" style={{ backgroundImage: "url(/images/ministry-3.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Educational Support & Schools</h2>
                <p>Education is key to community transformation. We operate Bible training institutes (Global Outreach Bible Institute in Jirem, Taraba State and Bible School in Gulbedu, Niger State) alongside Living Seed Primary Schools across Kebbi, Kano, Jibawa, and Jirem.</p>
              </div>
            </div>

            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(/images/ministry-4.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Medical Outreach</h2>
                <p>We organize periodic medical missions to provide free healthcare, medicines, and health education to underserved communities. This ministry helps meet urgent health needs while also opening doors for evangelism.</p>
              </div>
            </div>

            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(/images/ministry-5.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Prayer & Intercession Ministry</h2>
                <p>We believe in the power of prayer and encourage individuals and churches to intercede for the lost, for missionaries on the field, and for the expansion of God’s Kingdom.</p>
              </div>
            </div>

            <div className="col-md-4 ministry ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(/images/ministry-6.jpg)" }}></div>
              <div className="text p-4">
                <h2 className="mb-4">Community Development & Humanitarian Aid</h2>
                <p>Our ministry goes beyond preaching the Gospel—we also address the practical needs of the communities we serve. We engage in initiatives such as:</p>
                <ul>
                  <li>Providing clean water and sanitation</li>
                  <li>Supporting local farming efforts</li>
                  <li>Medical outreaches and health education </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Schools Section */}
      <section className="ftco-section bg-light" id="schools">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-8 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Christian Education</span>
              <h2>Our Schools &amp; Educational Institutions</h2>
              <p className="mt-3">
                Raising leaders, equipping missionaries, and providing sound foundation education to underserved children across Northern Nigeria.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Bible Colleges & Training Institutes */}
            <div className="col-md-6 mb-4">
              <div className="p-4 p-md-5 bg-white border rounded shadow-sm h-100" style={{ borderTop: '4px solid #007bff' }}>
                <div className="d-flex align-items-center mb-3">
                  <span className="fa fa-graduation-cap text-primary mr-3" style={{ fontSize: '2rem' }}></span>
                  <div>
                    <span className="badge badge-primary px-2 py-1 mb-1">Higher Education &amp; Ministry</span>
                    <h3 className="font-weight-bold mb-0" style={{ fontSize: '1.4rem' }}>Bible Institutes &amp; Training</h3>
                  </div>
                </div>
                <p className="text-muted">Equipping pastors, evangelists, and cross-cultural missionaries with biblical knowledge and practical leadership skills:</p>
                <ul className="list-unstyled mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '2.2' }}>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fa fa-check-circle text-primary mt-1 mr-2"></i>
                    <div>
                      <strong>Global Outreach Bible Institute (GOBI)</strong>
                      <span className="d-block text-muted small"><i className="fa fa-map-marker mr-1"></i> Jirem, Taraba State</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fa fa-check-circle text-primary mt-1 mr-2"></i>
                    <div>
                      <strong>Bible School</strong>
                      <span className="d-block text-muted small"><i className="fa fa-map-marker mr-1"></i> Gulbedu, Niger State</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fa fa-check-circle text-primary mt-1 mr-2"></i>
                    <div>
                      <strong>Missionary Training Institute (MTI)</strong>
                      <span className="d-block text-muted small"><i className="fa fa-map-marker mr-1"></i> Bishe, Jos, Plateau State</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Living Seed Primary Schools */}
            <div className="col-md-6 mb-4">
              <div className="p-4 p-md-5 bg-white border rounded shadow-sm h-100" style={{ borderTop: '4px solid #28a745' }}>
                <div className="d-flex align-items-center mb-3">
                  <span className="fa fa-book text-success mr-3" style={{ fontSize: '2rem' }}></span>
                  <div>
                    <span className="badge badge-success px-2 py-1 mb-1">Foundational Education</span>
                    <h3 className="font-weight-bold mb-0" style={{ fontSize: '1.4rem' }}>Living Seed Primary Schools</h3>
                  </div>
                </div>
                <p className="text-muted">Providing Christian values, literacy, and community hope for the younger generation in mission fields:</p>
                <ul className="list-unstyled mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '2.2' }}>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                    <div>
                      <strong>Living Seed Primary School, Kebbi</strong>
                      <span className="d-block text-muted small"><i className="fa fa-map-marker mr-1"></i> Kebbi State</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                    <div>
                      <strong>Living Seed Primary School, Kano</strong>
                      <span className="d-block text-muted small"><i className="fa fa-map-marker mr-1"></i> Kano State</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                    <div>
                      <strong>Living Seed Primary School, Jibawa</strong>
                      <span className="d-block text-muted small"><i className="fa fa-map-marker mr-1"></i> Jibawa</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                    <div>
                      <strong>Living Seed Primary Schools, Jirem (3 Schools)</strong>
                      <span className="d-block text-muted small"><i className="fa fa-map-marker mr-1"></i> Jirem, Taraba State</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="mb-3 text-muted">To support student scholarships, mission teachers' stipends, and learning materials:</p>
            <a href="/donate" className="btn btn-primary px-4 py-2 mr-2 mb-2">Support Our Schools</a>
            <a href="/partner" className="btn btn-outline-primary px-4 py-2 mb-2">Become a Partner</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionsPage