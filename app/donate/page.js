import React from 'react'

const DonatePage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Donate <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Make Donations</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="donation-content">
                <h2 className="mb-4">Be Part of the Harvest Force</h2>

                <div className="donation-way mb-5">
                  <h4>1. Become Prayer Partners</h4>
                  <p>The missions church is a praying Church. The history of missions is a history of prayer. Everything vital to the success of the world's evangelization hinges on prayer.</p>
                  <ul className="prayer-points">
                    <li>Pray for our missionaries</li>
                    <li>Pray for God's word to prosper among the nations</li>
                    <li>Pray for God's provision of resources</li>
                    <li>Pray for our converts</li>
                  </ul>
                </div>

                <div className="donation-way mb-5">
                  <h4>2. Visit Our Work</h4>
                  <p>The ministry offers opportunities through 'OPERATION GO' for individuals, families or groups to experience rural mission firsthand.</p>
                </div>

                <div className="donation-way mb-5">
                  <h4>3. Financial Support</h4>
                  <p>For the progress of Global missions, we need your support to reach unreached people groups. God loves a cheerful giver.</p>

                  <div className="payment-details mt-4">
                    <h5>Direct Bank Transfer / Deposit:</h5>
                    <p className="text-muted">You can make donations directly to either of our official First Bank accounts below:</p>

                    <div className="row mt-4">
                      {/* Ministry Account */}
                      <div className="col-md-6 mb-4">
                        <div className="p-4 bg-white border rounded shadow-sm h-100" style={{ borderLeft: '5px solid #007bff' }}>
                          <span className="badge badge-primary mb-2 px-2 py-1" style={{ fontSize: '0.85rem' }}>Ministry / Missions</span>
                          <h4 className="font-weight-bold mb-3" style={{ fontSize: '1.2rem', color: '#1a1a1a' }}>Global Outreach for Christ International</h4>
                          <p className="mb-2 text-muted" style={{ fontSize: '0.95rem' }}>
                            <strong>Account Type:</strong> Mission Account
                          </p>
                          <div className="p-3 bg-light rounded mb-3">
                            <span className="text-muted d-block small">ACCOUNT NUMBER</span>
                            <span className="font-weight-bold text-primary" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>2049475764</span>
                          </div>
                          <p className="mb-1"><strong>Bank:</strong> First Bank</p>
                          <p className="mb-0 text-muted small">Supports missionary allowances, church planting, and field outreaches.</p>
                        </div>
                      </div>

                      {/* Mission School / Training Institute Account */}
                      <div className="col-md-6 mb-4">
                        <div className="p-4 bg-white border rounded shadow-sm h-100" style={{ borderLeft: '5px solid #28a745' }}>
                          <span className="badge badge-success mb-2 px-2 py-1" style={{ fontSize: '0.85rem' }}>Mission School &amp; Training</span>
                          <h4 className="font-weight-bold mb-3" style={{ fontSize: '1.2rem', color: '#1a1a1a' }}>Missionary Training Institute Committee, Bishe</h4>
                          <p className="mb-2 text-muted" style={{ fontSize: '0.95rem' }}>
                            <strong>Account Type:</strong> Training &amp; Education Account
                          </p>
                          <div className="p-3 bg-light rounded mb-3">
                            <span className="text-muted d-block small">ACCOUNT NUMBER</span>
                            <span className="font-weight-bold text-success" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>2048516040</span>
                          </div>
                          <p className="mb-1"><strong>Bank:</strong> First Bank</p>
                          <p className="mb-0 text-muted small">Supports the Missionary Training Institute (MTI), students, and mission schools.</p>
                        </div>
                      </div>
                    </div>

                    <div className="alert alert-info mt-3 p-4 rounded text-center">
                      <h5 className="font-weight-bold mb-2">Looking to Partner With Us Regularly?</h5>
                      <p className="mb-3">Whether you feel called to support us financially, uphold us in prayer, or join our ministry teams, we would love to connect with you.</p>
                      <a href="/partner" className="btn btn-primary px-4 py-2">
                        Fill Partnership Form <i className="fa fa-arrow-right ml-2"></i>
                      </a>
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

export default DonatePage