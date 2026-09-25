import React from 'react'

const BlogPage = () => {
  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('/images/church-convention.png')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Blog &amp; News <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Church Blog &amp; Ministry News</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            {/* Post 1: Missionary and Pastor's Retreat */}
            <div className="col-md-6 col-lg-4 d-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="blog-entry align-self-stretch w-100 shadow-sm rounded overflow-hidden" style={{ background: '#fff' }}>
                <a href="/events" className="block-20" style={{ backgroundImage: "url('/images/church-prayer.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '240px', display: 'block' }}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-2">
                    <span className="badge badge-primary mr-2 px-2 py-1">Retreat</span>
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>Dec. 9–13, 2026</span>
                  </div>
                  <h3 className="heading font-weight-bold" style={{ fontSize: '1.2rem' }}>
                    <a href="/events" className="text-dark">Missionary and Pastor&apos;s Retreat 2026</a>
                  </h3>
                  <p className="text-muted mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Annual spiritual gathering and empowerment retreat holding from 9th to 13th December 2026 at Global Headquarter, Bishe, Bassa Local Govt., Plateau State.
                  </p>
                  <p className="mt-3 mb-0">
                    <a href="/events" className="btn btn-sm btn-primary">
                      Event Details <i className="fa fa-arrow-right ml-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Post 2: 30 Years Anniversary */}
            <div className="col-md-6 col-lg-4 d-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="blog-entry align-self-stretch w-100 shadow-sm rounded overflow-hidden" style={{ background: '#fff' }}>
                <a href="/events" className="block-20" style={{ backgroundImage: "url('/images/church-convention.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '240px', display: 'block' }}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-2">
                    <span className="badge badge-success mr-2 px-2 py-1">Anniversary</span>
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>Dec. 12, 2026</span>
                  </div>
                  <h3 className="heading font-weight-bold" style={{ fontSize: '1.2rem' }}>
                    <a href="/events" className="text-dark">30 Years Anniversary of the Ministry</a>
                  </h3>
                  <p className="text-muted mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Celebrating three decades of God&apos;s faithfulness (1996 – 2026) in unreached missions and world evangelization on 12th December 2026 @ Global Headquarter.
                  </p>
                  <p className="mt-3 mb-0">
                    <a href="/events" className="btn btn-sm btn-primary">
                      Event Details <i className="fa fa-arrow-right ml-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Post 3: Frontier Missions */}
            <div className="col-md-6 col-lg-4 d-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="blog-entry align-self-stretch w-100 shadow-sm rounded overflow-hidden" style={{ background: '#fff' }}>
                <a href="/missions" className="block-20" style={{ backgroundImage: "url('/images/church-congregation.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '240px', display: 'block' }}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-2">
                    <span className="badge badge-info mr-2 px-2 py-1">Missions</span>
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>Frontier Outreaches</span>
                  </div>
                  <h3 className="heading font-weight-bold" style={{ fontSize: '1.2rem' }}>
                    <a href="/missions" className="text-dark">Taking The King&apos;s Message to Unreached Fields</a>
                  </h3>
                  <p className="text-muted mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Deploying indigenous missionaries to unreached ethnic groups across northern Nigeria to plant self-governing and self-sustaining churches.
                  </p>
                  <p className="mt-3 mb-0">
                    <a href="/missions" className="btn btn-sm btn-primary">
                      Read More <i className="fa fa-arrow-right ml-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Post 4: Living Seed Primary Schools */}
            <div className="col-md-6 col-lg-4 d-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="blog-entry align-self-stretch w-100 shadow-sm rounded overflow-hidden" style={{ background: '#fff' }}>
                <a href="/about" className="block-20" style={{ backgroundImage: "url('/images/outreach/11.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '240px', display: 'block' }}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-2">
                    <span className="badge badge-warning mr-2 px-2 py-1">Education</span>
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>Schools</span>
                  </div>
                  <h3 className="heading font-weight-bold" style={{ fontSize: '1.2rem' }}>
                    <a href="/about" className="text-dark">Living Seed Primary Schools: Educational Mission</a>
                  </h3>
                  <p className="text-muted mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Providing free, Christ-centered basic education for underserved children across Kebbi, Kano, Jibawa, and Jirem mission fields.
                  </p>
                  <p className="mt-3 mb-0">
                    <a href="/about" className="btn btn-sm btn-primary">
                      Read More <i className="fa fa-arrow-right ml-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Post 5: Bible Institutes */}
            <div className="col-md-6 col-lg-4 d-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="blog-entry align-self-stretch w-100 shadow-sm rounded overflow-hidden" style={{ background: '#fff' }}>
                <a href="/about" className="block-20" style={{ backgroundImage: "url('/images/church-service.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '240px', display: 'block' }}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-2">
                    <span className="badge badge-info mr-2 px-2 py-1">Training</span>
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>Institutes</span>
                  </div>
                  <h3 className="heading font-weight-bold" style={{ fontSize: '1.2rem' }}>
                    <a href="/about" className="text-dark">Equipping Disciple-Makers at Bible Institutes</a>
                  </h3>
                  <p className="text-muted mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Training frontline harvest workers at Global Outreach Bible Institute Jirem (Taraba) and Gulbedu (Niger State).
                  </p>
                  <p className="mt-3 mb-0">
                    <a href="/about" className="btn btn-sm btn-primary">
                      Read More <i className="fa fa-arrow-right ml-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Post 6: Partnership */}
            <div className="col-md-6 col-lg-4 d-flex ftco-animate fadeInUp ftco-animated mb-4">
              <div className="blog-entry align-self-stretch w-100 shadow-sm rounded overflow-hidden" style={{ background: '#fff' }}>
                <a href="/partner" className="block-20" style={{ backgroundImage: "url('/images/church-family.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '240px', display: 'block' }}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-2">
                    <span className="badge badge-primary mr-2 px-2 py-1">Partnership</span>
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>Kingdom Alliance</span>
                  </div>
                  <h3 className="heading font-weight-bold" style={{ fontSize: '1.2rem' }}>
                    <a href="/partner" className="text-dark">Partnering With GOCI: Faith, Prayer, and Action</a>
                  </h3>
                  <p className="text-muted mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Standing in the gap as a prayer partner, ministry collaborator, or financial supporter for frontline gospel work.
                  </p>
                  <p className="mt-3 mb-0">
                    <a href="/partner" className="btn btn-sm btn-primary">
                      Partner Now <i className="fa fa-arrow-right ml-1"></i>
                    </a>
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

export default BlogPage