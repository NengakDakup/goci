import React from 'react'
import members from '@/data/members'

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
          {members.map((member, i) => {
            return (
              <div className="col-md-6 col-lg-3">
                <div className="staff">
                  <div className="img" style={{ backgroundImage: `url(${member.image})` }}></div>
                  <div className="text text-1">
                    <h3>{member.name}</h3>
                    <span>{member.position}</span>
                    <div className="mt-2">
                      <a href={`/profile/${member.slug}`} style={{ color: 'white', textDecoration: 'underline' }}>View Profile <i className="fa fa-arrow-right ml-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Members