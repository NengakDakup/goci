import React from 'react'

const EventsPage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Events <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Church Events</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/event-1.jpg)" }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc">
                  <h2 className="mb-4">January Prayer and Fasting</h2>
                  <div className="meta">
                    <p>
                      <span><i className="fa fa-calendar mr-2"></i> January</span>
                      <span><i className="fa fa-map-marker mr-2"></i>All GOCI Church Branches & Online</span>
                    </p>
                  </div>
                  <p>Start the year with spiritual renewal through a dedicated season of fasting and prayer. Join daily prayer sessions and seek God's direction for the new year.</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/event-2.jpg)" }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc">
                  <h2 className="mb-4">Global Mission Convention</h2>
                  <div className="meta">
                    <p>
                      <span><i className="fa fa-calendar mr-2"></i> [Insert Month]</span>
                      <span><i className="fa fa-map-marker mr-2"></i>GOCI Church Headquarters</span>
                    </p>
                  </div>
                  <p>A powerful gathering focused on global evangelism, missions, and outreach. Hear from missionaries, be inspired by testimonies, and participate in impactful mission strategies.</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/event-3.jpg)" }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc">
                  <h2 className="mb-4">Leadership Retreat</h2>
                  <div className="meta">
                    <p>
                      <span><i className="fa fa-calendar mr-2"></i> [Insert Month]</span>
                      <span><i className="fa fa-map-marker mr-2"></i>[Insert Venue]</span>
                    </p>
                  </div>
                  <p>A time for spiritual refreshing, leadership training, and strategic planning for all church leaders, ministers, and workers.</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(images/event-4.jpg)" }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc">
                  <h2 className="mb-4">Zonal Congresses</h2>
                  <div className="meta">
                    <p>
                      <span><i className="fa fa-calendar mr-2"></i> [Insert Month/Frequency]</span>
                      <span><i className="fa fa-map-marker mr-2"></i>Various GOCI Church Zones</span>
                    </p>
                  </div>
                  <p>A special gathering in different church zones for worship, teachings, and empowerment sessions designed to strengthen the church community at a regional level.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventsPage