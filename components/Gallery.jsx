import React from 'react'

const Gallery = () => {
  const galleryItems = [
    {
      src: '/images/church-prayer.png',
      col: 'col-md-6',
      title: 'Prayer & Empowerment Retreat',
      subtitle: 'Ministers & Congregation gathered in deep prayer under the canopies'
    },
    {
      src: '/images/church-leadership.jpg',
      col: 'col-md-6',
      title: 'Church Leadership & Ministers',
      subtitle: 'Serving leaders, pastors, and workers gathered in fellowship'
    },
    {
      src: '/images/church-humanitarian.jpg',
      col: 'col-md-3',
      title: 'Humanitarian & Welfare Aid',
      subtitle: 'Distributing food relief and support to rural community women'
    },
    {
      src: '/images/church-evangelism.png',
      col: 'col-md-3',
      title: 'Rural Community Evangelism',
      subtitle: 'Frontier gospel outreach in rural Nigerian villages'
    },
    {
      src: '/images/church-convention.png',
      col: 'col-md-3',
      title: 'Women Fellowship & Choir',
      subtitle: 'Joyful praise and celebration in uniform attire'
    },
    {
      src: '/images/church-congregation.jpg',
      col: 'col-md-3',
      title: 'Annual Church Convention',
      subtitle: 'Believers fellowshipping together under God’s grace'
    },
    {
      src: '/images/church-preaching.png',
      col: 'col-md-3',
      title: 'Community Gospel Preaching',
      subtitle: 'Sharing the Good News with children and village families'
    },
    {
      src: '/images/church-discipleship.png',
      col: 'col-md-3',
      title: 'Indoor Bible Teaching & Service',
      subtitle: 'Deep study of the Word and spiritual discipleship'
    },
    {
      src: '/images/church-family.png',
      col: 'col-md-3',
      title: 'Christian Families in Worship',
      subtitle: 'Multi-generational faith and family dedication'
    },
    {
      src: '/images/church-service.jpg',
      col: 'col-md-3',
      title: 'Open-Air Worship Service',
      subtitle: 'Gathering under canopies for worship and prayer'
    },
    {
      src: '/images/outreach/11.jpg',
      col: 'col-md-6',
      title: 'Frontier Mission Field',
      subtitle: 'Planting self-sustaining indigenous churches'
    },
    {
      src: '/images/outreach/6.jpg',
      col: 'col-md-3',
      title: 'Living Seed Primary Schools',
      subtitle: 'Free basic Christian education for rural mission children'
    },
    {
      src: '/images/outreach/7.jpg',
      col: 'col-md-3',
      title: 'Medical Missions & Compassion',
      subtitle: 'Meeting practical healthcare needs in remote villages'
    },
  ]

  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt">
      <div className="container-fluid px-md-0">
        <div className="row no-gutters justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Photo Gallery</span>
            <h2>Our Outreaches, Conventions &amp; Ministries</h2>
            <p className="text-muted mt-2">Glimpses of God&apos;s mighty move across our Nigerian mission fields, conventions, leadership retreats, and welfare outreaches</p>
          </div>
        </div>
        <div className="row no-gutters">
          {galleryItems.map((item, index) => (
            <div className={item.col} key={index}>
              <a
                href={item.src}
                className="image-popup img gallery ftco-animate"
                style={{
                  backgroundImage: `url(${item.src})`,
                  minHeight: '320px',
                  display: 'block',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}
              >
                <span className="overlay"></span>
                <div
                  className="p-3 text-white"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.88))'
                  }}
                >
                  <h6 className="text-white mb-0 font-weight-bold" style={{ fontSize: '0.95rem' }}>{item.title}</h6>
                  <small style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem' }}>{item.subtitle}</small>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery