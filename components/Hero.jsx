import React from 'react'

const Hero = () => {
  return (
    <section className="hero-wrap js-fullheight">
		<div className="home-slider js-fullheight owl-carousel">
			<div className="slider-item js-fullheight" style={{backgroundImage:'url(/images/bg_1.jpg)'}}>
				<div className="overlay"></div>
				<div className="container">
					<div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
						<div className="col-md-8 ftco-animate">
							<div className="text mt-md-5 w-100 text-center">
								<h2>Transforming Live</h2>
								<h1 className="mb-3">Total Surrender to God</h1>
								<p className="mb-4 pb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.</p>
								<p className="mb-0"><a href="#" className="btn btn-primary py-3 px-2 px-md-4">Become A Volunteer</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="slider-item js-fullheight" style={{backgroundImage:'url(/images/bg_2.jpg)'}}>
				<div className="overlay"></div>
				<div className="container">
					<div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
						<div className="col-md-8 ftco-animate">
							<div className="text mt-md-5 w-100 text-center">
								<h2>Welcome to Salvation Church</h2>
								<h1 className="mb-3">Perfect Church For Imperfect People</h1>
								<p className="mb-4 pb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.</p>
								<p className="mb-0"><a href="#" className="btn btn-primary py-3 px-2 px-md-4">Become A Volunteer</a></p>
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