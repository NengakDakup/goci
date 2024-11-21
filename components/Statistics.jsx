import React from 'react'

const Statistics = () => {
  return (
    <section className="ftco-counter bg-primary" id="section-counter">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-5 mb-md-0 text-center text-md-left">
            <h2 className="font-weight-bold" style={{color: '#fff', fontSize: 22, textTransform: 'uppercase'}}>Reaching the unreached with the gospel of our Lord Jesus Christ.</h2>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="18">0</strong>
                  </div>
                  <div className="text">
                    <span>Board Members</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="20">0</strong>
                  </div>
                  <div className="text">
                    <span>Pastors</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="72">0</strong>
                  </div>
                  <div className="text">
                    <span>Churches</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="5">0</strong>
                  </div>
                  <div className="text">
                    <span>Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics