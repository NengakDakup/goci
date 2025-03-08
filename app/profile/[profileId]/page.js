import Members from "@/components/Members";
import members from "@/data/members";

async function ProfilePage({ params }) {

  const { profileId } = await params
  const member = members.find(m => m.slug === profileId);

  if (!member) return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('/images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row flex-column-reverse flex-md-row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-8 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Leadership Profile <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{profileId} Profile Not found</h1>
            </div>

          </div>
        </div>
      </section>
    </>

  )


  return (
    <>
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('/images/bg_1.jpg')`, height: '844px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row flex-column-reverse flex-md-row no-gutters slider-text js-fullheight align-items-end" style={{ height: '844px' }}>
            <div className="col-md-8 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs mb-2" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Leadership Profile <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{member.name}</h1>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="blog-entry">
                <img
                  src={member.image}
                  alt="Profile Picture"
                  className="img-fluid rounded"
                />
                <div className="text p-4">
                  <div className="mb-2">
                    <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{member.name}</div>
                    <div><a href="#" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{member.position}</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {member.profileHTML}

      <Members />
    </>
  );
}

export default ProfilePage;