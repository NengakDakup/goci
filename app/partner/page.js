'use client'

import React, { useState } from 'react'

const PartnerPage = () => {
  const [partnerships, setPartnerships] = useState({
    financial: false,
    prayer: false,
    ministry: false,
  })

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    whatsapp: '',
    email: '',
    note: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleCheckboxChange = (type) => {
    setPartnerships(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
    if (error) setError('')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Check if at least one partnership option is selected
    if (!partnerships.financial && !partnerships.prayer && !partnerships.ministry) {
      setError('Please select at least one type of partnership (Financial, Prayer, or Ministry).')
      return
    }

    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    setError('')
    setSubmitted(true)
  }

  // Pre-fill WhatsApp message text
  const selectedTypes = []
  if (partnerships.financial) selectedTypes.push('Financial Partner')
  if (partnerships.prayer) selectedTypes.push('Prayer Partner')
  if (partnerships.ministry) selectedTypes.push('Ministry Partner')

  const whatsappMessage = encodeURIComponent(
    `*GOCI Partnership Form Submission*\n\n` +
    `*Partnership Type:* ${selectedTypes.join(', ')}\n` +
    `*Name:* ${formData.name}\n` +
    `*Address:* ${formData.address}\n` +
    `*Phone:* ${formData.phone}\n` +
    `*WhatsApp:* ${formData.whatsapp || formData.phone}\n` +
    `*Email:* ${formData.email}\n` +
    (formData.note ? `*Note:* ${formData.note}\n` : '')
  )

  const ministryWhatsAppNumber = '2347033883043'

  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('/images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> 
                <span>Partnership <i className="fa fa-chevron-right"></i></span>
              </p>
              <h1 className="mb-0 bread" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Partner With Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="heading-section text-center mb-5">
                <span className="subheading">Get Involved</span>
                <h2>Be Part of the Harvest Force</h2>
                <p className="lead text-muted">
                  Join hands with Global Outreach for Christ International (GOCI) to advance the gospel among unreached people groups. Choose how you would like to partner with us below.
                </p>
              </div>

              {/* Partnership Options Cards */}
              <div className="row mb-5">
                <div className="col-md-4 mb-4">
                  <div className={`p-4 rounded border h-100 ${partnerships.financial ? 'border-primary shadow-sm bg-light' : 'bg-white'}`}>
                    <div className="d-flex align-items-center mb-3">
                      <span className="fa fa-money text-primary mr-2" style={{ fontSize: '1.6rem' }}></span>
                      <h4 className="font-weight-bold mb-0">Financial Partner</h4>
                    </div>
                    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                      Support missionary allowances, church planting, training of indigenous workers, and educational outreach in unreached communities.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className={`p-4 rounded border h-100 ${partnerships.prayer ? 'border-primary shadow-sm bg-light' : 'bg-white'}`}>
                    <div className="d-flex align-items-center mb-3">
                      <span className="fa fa-heartbeat text-danger mr-2" style={{ fontSize: '1.6rem' }}></span>
                      <h4 className="font-weight-bold mb-0">Prayer Partner</h4>
                    </div>
                    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                      Stand in the gap and intercede consistently for our missionaries, the converts, protection in hostile territories, and the harvest of souls.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className={`p-4 rounded border h-100 ${partnerships.ministry ? 'border-primary shadow-sm bg-light' : 'bg-white'}`}>
                    <div className="d-flex align-items-center mb-3">
                      <span className="fa fa-users text-success mr-2" style={{ fontSize: '1.6rem' }}></span>
                      <h4 className="font-weight-bold mb-0">Ministry Partner</h4>
                    </div>
                    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                      Volunteer your skills, participate in short-term rural missions (Operation GO), medical outreaches, or church development initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Form Card */}
              <div className="card border-0 shadow-sm rounded p-4 p-md-5 bg-white mb-5">
                {submitted ? (
                  <div className="text-center py-5">
                    <div className="mb-4">
                      <span className="fa fa-check-circle text-success" style={{ fontSize: '4.5rem' }}></span>
                    </div>
                    <h3 className="font-weight-bold text-success mb-3">Thank You for Partnering With GOCI!</h3>
                    <p className="lead text-muted mb-4">
                      We have received your partnership submission for <strong>{selectedTypes.join(', ')}</strong>.
                      Our team will reach out to you via Phone/WhatsApp or Email shortly.
                    </p>

                    <div className="d-flex flex-wrap justify-content-center">
                      <a 
                        href={`https://wa.me/${ministryWhatsAppNumber}?text=${whatsappMessage}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-success px-4 py-3 m-2 font-weight-bold"
                      >
                        <i className="fa fa-whatsapp mr-2"></i> Send Directly via WhatsApp
                      </a>
                      <button 
                        onClick={() => { setSubmitted(false); }}
                        className="btn btn-outline-primary px-4 py-3 m-2"
                      >
                        Submit Another Response
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-weight-bold mb-4" style={{ color: '#1a1a1a' }}>Partnership Form</h3>
                    
                    {error && (
                      <div className="alert alert-danger mb-4">
                        <i className="fa fa-exclamation-circle mr-2"></i> {error}
                      </div>
                    )}

                    {/* Checkboxes for Partnership Types */}
                    <div className="form-group mb-4 p-3 bg-light rounded border">
                      <label className="font-weight-bold d-block mb-2" style={{ fontSize: '1.05rem' }}>
                        I would like to partner as: <span className="text-danger">*</span>
                        <small className="text-muted d-block font-weight-normal">(You can tick one or more options)</small>
                      </label>
                      <div className="row mt-3">
                        <div className="col-md-4 mb-2">
                          <div className="custom-control custom-checkbox">
                            <input 
                              type="checkbox" 
                              className="custom-control-input" 
                              id="checkFinancial" 
                              checked={partnerships.financial}
                              onChange={() => handleCheckboxChange('financial')}
                            />
                            <label className="custom-control-label font-weight-bold" htmlFor="checkFinancial" style={{ cursor: 'pointer' }}>
                              Financial Partner
                            </label>
                          </div>
                        </div>

                        <div className="col-md-4 mb-2">
                          <div className="custom-control custom-checkbox">
                            <input 
                              type="checkbox" 
                              className="custom-control-input" 
                              id="checkPrayer" 
                              checked={partnerships.prayer}
                              onChange={() => handleCheckboxChange('prayer')}
                            />
                            <label className="custom-control-label font-weight-bold" htmlFor="checkPrayer" style={{ cursor: 'pointer' }}>
                              Prayer Partner
                            </label>
                          </div>
                        </div>

                        <div className="col-md-4 mb-2">
                          <div className="custom-control custom-checkbox">
                            <input 
                              type="checkbox" 
                              className="custom-control-input" 
                              id="checkMinistry" 
                              checked={partnerships.ministry}
                              onChange={() => handleCheckboxChange('ministry')}
                            />
                            <label className="custom-control-label font-weight-bold" htmlFor="checkMinistry" style={{ cursor: 'pointer' }}>
                              Ministry Partner
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="row">
                      <div className="col-md-12 form-group mb-3">
                        <label className="font-weight-bold" htmlFor="name">Full Name <span className="text-danger">*</span></label>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          required 
                          className="form-control" 
                          placeholder="e.g. John Doe"
                        />
                      </div>

                      <div className="col-md-12 form-group mb-3">
                        <label className="font-weight-bold" htmlFor="address">Residential / Contact Address <span className="text-danger">*</span></label>
                        <input 
                          type="text" 
                          id="address"
                          name="address" 
                          value={formData.address} 
                          onChange={handleInputChange} 
                          required 
                          className="form-control" 
                          placeholder="e.g. Jos, Plateau State, Nigeria"
                        />
                      </div>

                      <div className="col-md-6 form-group mb-3">
                        <label className="font-weight-bold" htmlFor="phone">Phone Number <span className="text-danger">*</span></label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          required 
                          className="form-control" 
                          placeholder="e.g. +234 801 234 5678"
                        />
                      </div>

                      <div className="col-md-6 form-group mb-3">
                        <label className="font-weight-bold" htmlFor="whatsapp">WhatsApp Number</label>
                        <input 
                          type="tel" 
                          id="whatsapp"
                          name="whatsapp" 
                          value={formData.whatsapp} 
                          onChange={handleInputChange} 
                          className="form-control" 
                          placeholder="e.g. +234 801 234 5678"
                        />
                      </div>

                      <div className="col-md-12 form-group mb-3">
                        <label className="font-weight-bold" htmlFor="email">Email Address <span className="text-danger">*</span></label>
                        <input 
                          type="email" 
                          id="email"
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                          className="form-control" 
                          placeholder="e.g. name@example.com"
                        />
                      </div>

                      <div className="col-md-12 form-group mb-4">
                        <label className="font-weight-bold" htmlFor="note">Additional Note / Remarks (Optional)</label>
                        <textarea 
                          id="note"
                          name="note" 
                          rows="3" 
                          value={formData.note} 
                          onChange={handleInputChange} 
                          className="form-control" 
                          placeholder="Any specific mission field, question, or message you'd like to share..."
                        ></textarea>
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="btn btn-primary btn-lg px-5 py-3 font-weight-bold">
                          Submit Partnership Request <i className="fa fa-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* Official Account Details Section */}
              <div className="donation-accounts p-4 p-md-5 bg-light rounded border">
                <div className="text-center mb-4">
                  <span className="subheading">Direct Giving</span>
                  <h3 className="font-weight-bold">Official Ministry Account Details</h3>
                  <p className="text-muted">
                    If you are giving towards missionary support, training, or church planting, you may transfer directly to our First Bank accounts:
                  </p>
                </div>

                <div className="row">
                  {/* Ministry Account */}
                  <div className="col-md-6 mb-4">
                    <div className="p-4 bg-white border rounded shadow-sm h-100" style={{ borderLeft: '5px solid #007bff' }}>
                      <span className="badge badge-primary mb-2 px-2 py-1">Ministry / Missions</span>
                      <h5 className="font-weight-bold mb-2">Global Outreach for Christ International</h5>
                      <p className="mb-2 text-muted small"><strong>Account Type:</strong> Mission Account</p>
                      <div className="p-3 bg-light rounded mb-3">
                        <span className="text-muted d-block small">ACCOUNT NUMBER</span>
                        <span className="font-weight-bold text-primary" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>2049475764</span>
                      </div>
                      <p className="mb-1"><strong>Bank:</strong> First Bank</p>
                      <p className="mb-0 text-muted small">For missionary deployment, unreached people groups &amp; church planting.</p>
                    </div>
                  </div>

                  {/* Mission School Account */}
                  <div className="col-md-6 mb-4">
                    <div className="p-4 bg-white border rounded shadow-sm h-100" style={{ borderLeft: '5px solid #28a745' }}>
                      <span className="badge badge-success mb-2 px-2 py-1">Mission School &amp; Training</span>
                      <h5 className="font-weight-bold mb-2">Missionary Training Institute Committee, Bishe</h5>
                      <p className="mb-2 text-muted small"><strong>Account Type:</strong> Training &amp; Education Account</p>
                      <div className="p-3 bg-light rounded mb-3">
                        <span className="text-muted d-block small">ACCOUNT NUMBER</span>
                        <span className="font-weight-bold text-success" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>2048516040</span>
                      </div>
                      <p className="mb-1"><strong>Bank:</strong> First Bank</p>
                      <p className="mb-0 text-muted small">For Missionary Training Institute (MTI), students &amp; rural mission primary schools.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PartnerPage
