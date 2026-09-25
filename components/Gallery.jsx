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
      src: '/images/church-congregation.jpg',
      col: 'col-md-3',
      title: 'Annual Church Convention',
      subtitle: 'Fellowship and joy among believers'
    },
    {
      src: '/images/church-convention.png',
      col: 'col-md-3',
      title: 'Women Fellowship & Choir',
      subtitle: 'Gathering of faithful worshippers in uniform attire'
    },
    {
      src: '/images/church-family.png',
      col: 'col-md-3',
      title: 'Christian Families in Worship',
      subtitle: 'Generations gathering together in the presence of God'
    },
    {
      src: '/images/church-service.jpg',
      col: 'col-md-3',
      title: 'Convention Service',
      subtitle: 'Worship service under the convention tent'
    },
    {
      src: '/images/outreach/11.jpg',
      col: 'col-md-6',
      title: 'Rural Mission Outreach',
      subtitle: 'Bringing the King’s message to virgin mission territories'
    },
    {
      src: '/images/outreach/1.jpg',
      col: 'col-md-3',
      title: 'Frontier Village Mission',
      subtitle: 'Reaching underserved rural communities'
    },
    {
      src: '/images/outreach/2.jpg',
      col: 'col-md-3',
      title: 'Mission Field Ministry',
      subtitle: 'Pioneering indigenous church planting movements'
    },
    {
      src: '/images/outreach/17.jpg',
      col: 'col-md-3',
      title: 'Community Evangelism',
      subtitle: 'Spreading the gospel across northern Nigeria'
    },
    {
      src: '/images/outreach/4.jpg',
      col: 'col-md-3',
      title: 'Discipleship & Training',
      subtitle: 'Equipping new converts and indigenous leaders'
    },
    {
      src: '/images/outreach/6.jpg',
      col: 'col-md-3',
      title: 'Living Seed Primary Schools',
      subtitle: 'Free Christian education for rural mission children'
    },
    {
      src: '/images/outreach/7.jpg',
      col: 'col-md-3',
      title: 'Medical & Humanitarian Aid',
      subtitle: 'Demonstrating Christ’s compassion in rural villages'
    },
  ]

  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt">
      <div className="container-fluid px-md-0">
        <div className="row no-gutters justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Gallery</span>
            <h2>Our Outreaches, Conventions &amp; Ministries</h2>
            <p className="text-muted mt-2">Glimpses of God&apos;s mighty move across our mission fields, retreats, and church gatherings</p>
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
                  minHeight: '300px',
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
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.85))'
                  }}
                >
                  <h6 className="text-white mb-0 font-weight-bold" style={{ fontSize: '0.95rem' }}>{item.title}</h6>
                  <small style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>{item.subtitle}</small>
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