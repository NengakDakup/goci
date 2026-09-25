import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <h2 className="footer-heading">GOCI</h2>
            <p>That the kingdoms of the world will become the Kingdom of our Lord and of his Christ.</p>
            <ul className="ftco-footer-social p-0">
              <li className="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter"></span></a></li>
              <li className="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook"></span></a></li>
              <li className="ftco-animate fadeInUp ftco-animated"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram"></span></a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <h2 className="footer-heading">Latest News</h2>
            <div className="block-21 mb-4 d-flex">
              <a href="/events" className="img mr-4 rounded" style={{ backgroundImage: "url(/images/event-3.jpg)" }}></a>
              <div className="text">
                <h3 className="heading"><a href="/events">Missionary and Pastor's Retreat</a></h3>
                <div className="meta">
                  <div><span className="fa fa-calendar mr-1"></span> Dec. 9–13, 2026</div>
                  <div><span className="fa fa-map-marker mr-1"></span> Bishe, Bassa LGA</div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a href="/events" className="img mr-4 rounded" style={{ backgroundImage: "url(/images/event-2.jpg)" }}></a>
              <div className="text">
                <h3 className="heading"><a href="/events">30 Years Anniversary of the Ministry</a></h3>
                <div className="meta">
                  <div><span className="fa fa-calendar mr-1"></span> Dec. 12, 2026</div>
                  <div><span className="fa fa-map-marker mr-1"></span> Global HQ, Bishe</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="list-unstyled">
              <li><a href="/" className="py-2 d-block">Home</a></li>
              <li><a href="/about" className="py-2 d-block">About</a></li>
              <li><a href="/pillars" className="py-2 d-block">Pillars</a></li>
              <li><a href="/missions" className="py-2 d-block">Missions</a></li>
              <li><a href="/leadership" className="py-2 d-block">Leadership</a></li>
              <li><a href="/events" className="py-2 d-block">Events</a></li>
              <li><a href="/blog" className="py-2 d-block">Blog</a></li>
              <li><a href="/contact" className="py-2 d-block">Contact</a></li>
              <li><a href="/partner" className="py-2 d-block">Partner With Us</a></li>
              <li><a href="/donate" className="py-2 d-block">Donate</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <h2 className="footer-heading">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon fa fa-map"></span><span className="text">Bishe behind Hwol-Azah opp. Army engineer Zaria road, Jos, P.O box, 13497, Plateau state Nigeria</span></li>
                <li><a href="tel:+2347033883043"><span className="icon fa fa-phone"></span><span className="text">+234 7033883043</span></a></li>
                <li><a href="mailto:gocijos@g-mail.com"><span className="icon fa fa-paper-plane"></span><span className="text">gocijos@g-mail.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p className="copyright">
              Copyright GOCI ©{new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
