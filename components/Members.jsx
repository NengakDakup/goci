import React from 'react'

const Members = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Members</span>
            <h2>Board Members</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="staff">
              <div className="img" style={{backgroundImage: 'url(/images/team/livingstone.jpg)'}}></div>
              <div className="text text-1">
                <h3>Livingstone William</h3>
                <span>Coordinator</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="staff">
              <div className="img" style={{backgroundImage: 'url(/images/team/comfort.jpg)'}}></div>
              <div className="text text-2">
                <h3>Prof. Comfort Nanko Piwuna</h3>
                <span>Chairman</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="staff">
              <div className="img" style={{backgroundImage: 'url(/images/team/markus.jpg)'}}></div>
              <div className="text text-3">
                <h3>Dcn. Pharm. Markus Audu Kanda</h3>
                <span>Member</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="staff">
              <div className="img" style={{backgroundImage: 'url(/images/team/abraham.jpg)'}}></div>
              <div className="text text-4">
                <h3>Dns. Hargirga Frama Abraham</h3>
                <span>Member</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="staff">
              <div className="img" style={{backgroundImage: 'url(/images/team/yenmikat.jpg)'}}></div>
              <div className="text text-4">
                <h3>Mrs. Yenmikat N. Zwalda</h3>
                <span>Member</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="staff">
              <div className="img" style={{backgroundImage: 'url(/images/team/staff-4.jpg)'}}></div>
              <div className="text text-4">
                <h3>Rev. John Kalma</h3>
                <span>Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members