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
                    <h5>Payment Options:</h5>
                    <ul>
                      <li>Online platforms via our website</li>
                      <li>Cheques in favor of Global Outreach for Christ International</li>
                      <li>Direct debit to Sterling Bank PLC:</li>
                    </ul>
                    <div className="bank-details">
                      <p><strong>Account Name: Global Outreach Commission International</strong></p>
                      <p><strong>Account Number: 0064400731</strong></p>
                      <p><strong>Bank: Sterling Bank PLC</strong></p>
                    </div>
                  </div>

                  {/* <div className="donate-button-wrapper text-center mt-5">
                    <button className="btn btn-primary btn-lg">Donate Now</button>
                  </div> */}
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