import React from 'react';

function Home(){
    return (
      <div>
        <section
          id="hero"
          class="d-flex flex-column justify-content-end align-items-center"
        >
          <div
            id="heroCarousel"
            class="container carousel carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-item active">
              <div class="carousel-container">
                <h2 class="animate__animated animate__fadeInDown">
                  YOU READY FOR ANIMATE? <br/> <span>We Are!</span>

                  
                </h2>
                <p style={{fontWeight: 500, fontSize: 25}} class="animate__animated fanimate__adeInUp">
                  "Every idea is worth a try, no big ones got it in single go".
                </p>
                <a
                  href="https://skillenza.com/challenge/animate-dsciiitkota"
                  class="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Register with Skillenza
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );}

export default Home;