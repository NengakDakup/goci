import React from 'react'

const EventsPage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('/images/church-prayer.png')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Events <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Church Events &amp; Retreats</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {/* Event: Missionary and Pastor's Retreat */}
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="img" style={{ backgroundImage: "url(/images/church-prayer.png)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '260px' }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc w-100">
                  <span className="badge badge-primary px-3 py-1 mb-2 font-weight-bold" style={{ fontSize: '0.85rem' }}>Annual Gathering</span>
                  <h2 className="mb-3 font-weight-bold">Missionary and Pastor&apos;s Retreat</h2>
                  <div className="meta mb-3">
                    <p className="mb-0 text-muted">
                      <span className="mr-3"><i className="fa fa-calendar mr-2 text-primary"></i> <strong>9th to 13th December 2026</strong></span>
                      <span><i className="fa fa-map-marker mr-2 text-danger"></i> Global Headquarter, Bishe, Bassa Local Govt., Plateau State</span>
                    </p>
                  </div>
                  <p className="lead" style={{ fontSize: '1rem', color: '#555' }}>
                    A vital season of spiritual empowerment, strategic mission review, and fellowship for all serving missionaries and pastors across our 10 mission fields and stations.
                  </p>
                </div>
              </div>
            </div>

            {/* Event: 30 Years Anniversary */}
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="img" style={{ backgroundImage: "url(/images/church-convention.png)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '260px' }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc w-100">
                  <span className="badge badge-success px-3 py-1 mb-2 font-weight-bold" style={{ fontSize: '0.85rem' }}>Landmark Celebration</span>
                  <h2 className="mb-3 font-weight-bold">30 Years Anniversary of the Ministry</h2>
                  <div className="meta mb-3">
                    <p className="mb-0 text-muted">
                      <span className="mr-3"><i className="fa fa-calendar mr-2 text-primary"></i> <strong>12th December 2026</strong></span>
                      <span><i className="fa fa-map-marker mr-2 text-danger"></i> Global Headquarter, Bishe, Bassa Local Govt., Plateau State</span>
                    </p>
                  </div>
                  <p className="lead" style={{ fontSize: '1rem', color: '#555' }}>
                    Celebrating three decades of God&apos;s faithfulness (1996 – 2026) in taking the King&apos;s message to the kingdoms of the world, pioneering church planting, and reaching the unreached.
                  </p>
                </div>
              </div>
            </div>

            {/* Event: January Prayer and Fasting */}
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="img" style={{ backgroundImage: "url(/images/church-service.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '260px' }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc w-100">
                  <span className="badge badge-info px-3 py-1 mb-2 font-weight-bold" style={{ fontSize: '0.85rem' }}>Spiritual Renewal</span>
                  <h2 className="mb-3 font-weight-bold">January Prayer and Fasting</h2>
                  <div className="meta mb-3">
                    <p className="mb-0 text-muted">
                      <span className="mr-3"><i className="fa fa-calendar mr-2 text-primary"></i> January</span>
                      <span><i className="fa fa-map-marker mr-2 text-danger"></i> All GOCI Church Branches &amp; Online</span>
                    </p>
                  </div>
                  <p className="lead" style={{ fontSize: '1rem', color: '#555' }}>
                    Start the year with spiritual renewal through a dedicated season of fasting and prayer. Join daily prayer sessions and seek God&apos;s direction for the new year.
                  </p>
                </div>
              </div>
            </div>

            {/* Event: Global Mission Convention */}
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="img" style={{ backgroundImage: "url(/images/church-congregation.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '260px' }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc w-100">
                  <span className="badge badge-primary px-3 py-1 mb-2 font-weight-bold" style={{ fontSize: '0.85rem' }}>Evangelism Convention</span>
                  <h2 className="mb-3 font-weight-bold">Global Mission Convention</h2>
                  <div className="meta mb-3">
                    <p className="mb-0 text-muted">
                      <span className="mr-3"><i className="fa fa-calendar mr-2 text-primary"></i> Annual Gathering</span>
                      <span><i className="fa fa-map-marker mr-2 text-danger"></i> GOCI Church Headquarters</span>
                    </p>
                  </div>
                  <p className="lead" style={{ fontSize: '1rem', color: '#555' }}>
                    A powerful gathering focused on global evangelism, missions, and outreach. Hear from missionaries, be inspired by testimonies, and participate in impactful mission strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Event: Leadership Retreat */}
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="img" style={{ backgroundImage: "url(/images/outreach/11.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '260px' }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc w-100">
                  <span className="badge badge-warning px-3 py-1 mb-2 font-weight-bold" style={{ fontSize: '0.85rem' }}>Leadership Equipping</span>
                  <h2 className="mb-3 font-weight-bold">Leadership Retreat</h2>
                  <div className="meta mb-3">
                    <p className="mb-0 text-muted">
                      <span className="mr-3"><i className="fa fa-calendar mr-2 text-primary"></i> Quarterly Schedule</span>
                      <span><i className="fa fa-map-marker mr-2 text-danger"></i> Bishe Headquarters</span>
                    </p>
                  </div>
                  <p className="lead" style={{ fontSize: '1rem', color: '#555' }}>
                    A time for spiritual refreshing, leadership training, and strategic planning for all church leaders, ministers, and workers.
                  </p>
                </div>
              </div>
            </div>

            {/* Event: Zonal Congresses */}
            <div className="col-md-12 event-wrap d-md-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="img" style={{ backgroundImage: "url(/images/church-family.png)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '260px' }}></div>
              <div className="text p-4 px-md-5 d-flex align-items-center">
                <div className="desc w-100">
                  <span className="badge badge-info px-3 py-1 mb-2 font-weight-bold" style={{ fontSize: '0.85rem' }}>Regional Fellowship</span>
                  <h2 className="mb-3 font-weight-bold">Zonal Congresses</h2>
                  <div className="meta mb-3">
                    <p className="mb-0 text-muted">
                      <span className="mr-3"><i className="fa fa-calendar mr-2 text-primary"></i> Regional Schedule</span>
                      <span><i className="fa fa-map-marker mr-2 text-danger"></i> Various GOCI Church Zones</span>
                    </p>
                  </div>
                  <p className="lead" style={{ fontSize: '1rem', color: '#555' }}>
                    A special gathering in different church zones for worship, teachings, and empowerment sessions designed to strengthen the church community at a regional level.
                  </p>
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