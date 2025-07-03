import React from 'react'
import './../css/home.scss'

function Home() {
  return (
    <div>
      <div className='banner'>
        <div className='overlay'>
          <h1>Looking for parking. <br /> <span>You have came to right place</span></h1>
        </div>
      </div>

      <div className='container mt-5'>
        {/* <section className='my-5'>
          <h2>How Parking Management System Works</h2>

          <div className='row mt-4'>
            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='./map.avif' className='services-card-icon'></img>
                <div className='mt-4'>
                  <h3>Search</h3>
                  <p className='mt-3'>Search for a parking spot according to your needs.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='./book.png' className='services-card-icon'></img>
                <div className='mt-4'>
                  <h3>Book</h3>
                  <p className='mt-3'>Reserved Parking spot and pay desired amount..</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='./parking.png' className='services-card-icon'></img>
                <div className='mt-4'>
                  <h3>Park</h3>
                  <p className='mt-3'>Follow the provided instructions and park your car.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="my-5">
  <h2 className="text-center">How Parking Management System Works</h2>

  <div className="row mt-4 ">
    <div className="col-sm-12 col-md-6 col-lg-4 text-center mb-4">
      <div className="card p-4">
        <img src="./map.avif" className="services-card-icon img-fluid" alt="Search Icon" />
        <div className="mt-4">
          <h3>Search</h3>
          <p className="mt-3">Search for a parking spot according to your needs.</p>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-4 text-center mb-4">
      <div className="card p-4">
        <img src="./book.png" className="services-card-icon img-fluid" alt="Book Icon" />
        <div className="mt-4">
          <h3>Book</h3>
          <p className="mt-3">Reserve a parking spot and pay the desired amount.</p>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-4 text-center">
      <div className="card p-4">
        <img src="./parking.png" className="services-card-icon img-fluid" alt="Park Icon" />
        <div className="mt-4">
          <h3>Park</h3>
          <p className="mt-3">Follow the provided instructions and park your car.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <section className="my-5">
  <h2 className="text-center mt-5">Testimonial</h2>
  <div className="row mt-4">
    <div className="col-sm-12 col-md-6 d-flex justify-content-center">
      <div className="testimonial-card p-4 rounded text-center shadow">
        <img src="./profile-1.jpeg" className="img-fluid rounded-circle mb-3" alt="Harry" width="100" height="100" />
        <p className="mt-4 mb-3">
          "I recently used Parking Management System, a parking booking website, and I was thoroughly impressed with the service. The website was user-friendly and easy to navigate, allowing me to quickly find and book a parking spot. The process was seamless, and I received a confirmation email with all the necessary details. On arrival, the parking lot was well-maintained and had ample space. I highly recommend Parking Management System!"
        </p>
        <span><strong>Harry</strong>, Manager at Google</span>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0">
      <div className="testimonial-card p-4 rounded text-center shadow">
        <img src="./profile-1.webp" className="img-fluid rounded-circle mb-3" alt="Mill" width="100" height="100" />
        <p className="mt-4 mb-3">
          "I cannot express how grateful I am for Parking Management System. It has made the process incredibly convenient and stress-free. With just a few clicks, I can compare prices and book a parking spot in advance. The website provides detailed information, including reviews from other users, which helped me make informed decisions. This website is a game-changer for travelers like me!"
        </p>
        <span><strong>Mill</strong>, Co-founder at Tim Hortons</span>
      </div>
    </div>
  </div>
</section> */}

      </div>
    </div>
  )
}

export default Home