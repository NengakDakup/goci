import React from 'react'
import Members from '@/components/Members'

const LeadershipPage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('/images/church-leadership.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Leadership <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Church Leadership</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <span className="subheading">Governance Structure</span>
              <h2 className="mb-4">Leadership of GOCI</h2>
              <p className="lead text-muted mb-5">
                Global Outreach for Christ International is governed by dedicated spiritual and professional leaders committed to stewardship, missionary excellence, and church multiplication.
              </p>
              <div className="row justify-content-center mb-4">
                <div className="col-md-5 mb-3">
                  <div className="p-4 bg-light rounded border text-center shadow-sm">
                    <span className="display-4 font-weight-bold text-primary d-block">7</span>
                    <h4 className="font-weight-bold mt-2">Board of Trustees</h4>
                    <p className="text-muted small mb-0">Custodians of vision, institutional stewardship, and spiritual oversight.</p>
                  </div>
                </div>
                <div className="col-md-5 mb-3">
                  <div className="p-4 bg-light rounded border text-center shadow-sm">
                    <span className="display-4 font-weight-bold text-success d-block">10</span>
                    <h4 className="font-weight-bold mt-2">Board of Directors</h4>
                    <p className="text-muted small mb-0">Operational leadership, policy development, and field mission administration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Members />
    </>
  )
}

export default LeadershipPage