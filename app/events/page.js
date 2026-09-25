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
            {/* Event: Missionary and Pastor's Retreat */}
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(/images/event-3.jpg)" }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc">
                  <span className="badge badge-primary px-3 py-1 mb-2 font-weight-bold" style={{ fontSize: '0.85rem' }}>Annual Gathering</span>
                  <h2 className="mb-4">Missionary and Pastor's Retreat</h2>
                  <div className="meta">
                    <p>
                      <span><i className="fa fa-calendar mr-2"></i> 9th to 13th December 2026</span>
                      <span><i className="fa fa-map-marker mr-2"></i> Global Headquarter, Bishe, Bassa Local Govt., Plateau State</span>
                    </p>
                  </div>
                  <p>A vital season of spiritual empowerment, strategic mission review, and fellowship for all serving missionaries and pastors across our 10 mission fields and stations.</p>
                </div>
              </div>
            </div>

            {/* Event: 30 Years Anniversary */}
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(/images/event-2.jpg)" }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc">
                  <span className="badge badge-success px-3 py-1 mb-2 font-weight-bold" style={{ fontSize: '0.85rem' }}>Landmark Celebration</span>
                  <h2 className="mb-4">30 Years Anniversary of the Ministry</h2>
                  <div className="meta">
                    <p>
                      <span><i className="fa fa-calendar mr-2"></i> 12th December 2026</span>
                      <span><i className="fa fa-map-marker mr-2"></i> Global Headquarter, Bishe, Bassa Local Govt., Plateau State</span>
                    </p>
                  </div>
                  <p>Celebrating three decades of God's faithfulness (1996 – 2026) in taking the King's message to the kingdoms of the world, pioneering church planting, and reaching the unreached.</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
              <div className="img" style={{ backgroundImage: "url(/images/event-1.jpg)" }}></div>
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