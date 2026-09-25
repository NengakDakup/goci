import React from 'react'

const PillarsPage = () => {
  const pillars = [
    {
      title: 'Church Mission',
      description: 'Reaching the unreached with the gospel of our Lord Jesus Christ, planting indigenous and self-sustaining churches, and deploying missionaries across virgin territories.',
      image: '/images/church-evangelism.png'
    },
    {
      title: 'Education',
      description: 'Equipping future generations and church leaders through our Missionary Training Institute (MTI), Global Outreach Bible Institute (GOBI, Jirem, Taraba State), Bible School (Gulbedu, Niger State), and Living Seed Primary Schools across Kebbi, Kano, Jibawa, and Jirem (3 schools).',
      image: '/images/outreach/11.jpg'
    },
    {
      title: 'Social Service',
      description: 'Demonstrating the love of Christ through practical humanitarian aid, rural medical outreaches, clean water projects, and community relief initiatives.',
      image: '/images/church-humanitarian.jpg'
    },
    {
      title: 'Media and Publicity',
      description: 'Amplifying the King’s message to the kingdoms of the world through strategic media broadcasting, digital outreach, storytelling, and publication.',
      image: '/images/church-convention.png'
    },
    {
      title: 'Entrepreneurship',
      description: 'Fostering economic empowerment, vocational training, and sustainable livelihood programs to support self-reliant families and transforming local economies.',
      image: '/images/church-preaching.png'
    }
  ];

  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('/images/church-prayer.png')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Our Pillars <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Our Pillars</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-8 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Core Foundations</span>
              <h2>The Pillars of Our Ministry</h2>
              <p className="mt-3">
                Our pillars define our strategic mission and operational focus across communities, church planting, human development, and media propagation.
              </p>
            </div>
          </div>

          <div className="row d-flex">
            {pillars.map((pillar, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4 d-flex ftco-animate fadeInUp ftco-animated">
                <div className="blog-entry align-self-stretch w-100 shadow-sm rounded overflow-hidden bg-white">
                  <div 
                    className="block-20" 
                    style={{ 
                      backgroundImage: `url('${pillar.image}')`,
                      height: '240px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center' 
                    }}
                  ></div>
                  <div className="text p-4">
                    <h3 className="heading font-weight-bold mb-3">
                      <span className="text-primary mr-2">0{index + 1}.</span> {pillar.title}
                    </h3>
                    <p className="text-muted" style={{ lineHeight: '1.7' }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PillarsPage
