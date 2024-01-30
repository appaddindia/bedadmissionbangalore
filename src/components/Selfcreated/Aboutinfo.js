import React from "react";

function Aboutinfo() {
  return (
    <section id="about-2" className="wide-60 about-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* ABOUT IMAGE */}
          <div className="col-md-5 col-lg-6">
            <div className="img-block pc-25 mb-40">
              <img
                className="img-fluid"
                src="images/image-01.png"
                alt="about-image"
              />
            </div>
          </div>
          {/* ABOUT TEXT */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block pc-25 mb-40">
              {/* Title */}
              <h3 className="h3-sm">B.Ed Admission in Bangalore University</h3>
              {/* Text */}
              <p>
                Our institute takes pride in its commitment to shaping education
                through comprehensive B.Ed. training programs. With a legacy of
                excellence, we serve as a Beacon of Excellence, driven by a
                Passion for Education. Our dedication to Innovative Teaching
                methodologies creates a transformative educational experience,
                fostering a community of educators committed to shaping the
                future of learning.
              </p>
              {/* List */}
              <p>
                This commitment is reflected in our robust B.Ed. training
                programs, where educators are equipped with the skills and
                expertise needed in today's dynamic educational landscape. As a
                Beacon of Excellence, our institute stands as a guiding light,
                symbolizing outstanding qualities and inspiring others in the
                field of education. Our Passion for Education propels us
                forward, fostering a dynamic and engaging learning environment.
                Embracing Innovative Teaching ensures that our educators stay at
                the forefront of educational advancements, preparing students to
                thrive in an ever-evolving landscape. Together, these principles
                define our institute's mission to shape the future of education.
              </p>

              <a
                href="https://api.whatsapp.com/send?phone=9538861888&text=Hello"
                className="btn btn-tra-rose"
                target="_blank"
              >
                WhatsApp Know
              </a>
            </div>
          </div>
          {/* END ABOUT TEXT */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
}

export default Aboutinfo;
