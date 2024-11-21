import React from 'react'

const Hero = () => {
  return (
    <section className="hero-wrap js-fullheight">
		<div className="home-slider js-fullheight owl-carousel">
			

			<div className="slider-item js-fullheight" style={{backgroundImage:'url(/images/bg_2.jpg)'}}>
				<div className="overlay"></div>
				<div className="container">
					<div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
						<div className="col-md-8 ftco-animate">
							<div className="text mt-md-5 w-100 text-center">
								<h2>Global Outreach for Christ International (GOCI)</h2>
								<h1 style={{fontSize: '1.5rem'}}>The kingdom people with the King’s message to the kingdoms of the world.</h1>
								<p className="mb-4 pb-3">
                                    A faith-based, non-profit Christian mission agency founded in 1996, dedicated to fulfilling Christ’s mandate of world evangelization. Our vision is to be a mission agency with a global presence, reaching the unreached with the gospel of our Lord Jesus Christ.
                                </p>
								<p className="mb-0"><a href="#" className="btn btn-primary py-3 px-2 px-md-4">More About Us</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Hero