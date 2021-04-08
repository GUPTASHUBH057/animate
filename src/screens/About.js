import React from 'react';

function About(){
    return(
        <section id="about" class="about">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <h2>New to the Challenge?</h2>
          <p>What is a Hackathon?</p>
        </div>

        <div class="row content" data-aos="fade-up">
          <div class="col-lg-6">
            <p>
            Hackathon is an event of any duration where people come together to solve real-life problems providing a technical solution to it. Hackathons are an incredible way to:
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Bring your community together</li>
              <li><i class="ri-check-double-line"></i> Learn new skills and latest technology out there</li>
              <li><i class="ri-check-double-line"></i> Share ideas, collaborate and build amazing projects</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
            A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science!
            </p>
            <a href="#cta" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
    )
}
export default About; 