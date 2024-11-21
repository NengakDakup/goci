import React from 'react'

const Header = () => {
  return (
    <>
    <div className="wrap">
		<div className="container">
			<div className="row">
				<div className="col-md-6 d-flex align-items-center">
					<p className="mb-0 location">
						<span className="fa fa-map-marker mr-2"></span> Bishe behind Hwol-Azah, opposite Army Engineer Zaria Road, Jos, Plateau State, Nigeria.
					</p>
				</div>
				<div className="col-md-6 d-flex justify-content-md-end">
					<div className="social-media">
						<p className="mb-0 d-flex">
							<a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
							<a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
							<a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
							<a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div className="container">
			<a className="navbar-brand" href="index.html">GOCI</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="oi oi-menu"></span> Menu
			</button>

			<div className="collapse navbar-collapse" id="ftco-nav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
					<li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
					<li className="nav-item"><a href="ministries.html" className="nav-link">Ministries</a></li>
					<li className="nav-item"><a href="sermons.html" className="nav-link">Sermons</a></li>
					<li className="nav-item"><a href="events.html" className="nav-link">Events</a></li>
					<li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
					<li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
					<li className="nav-item cta"><a href="contact.html" className="nav-link">Donate</a></li>
				</ul>
			</div>
		</div>
	</nav>
    </>
  )
}

export default Header