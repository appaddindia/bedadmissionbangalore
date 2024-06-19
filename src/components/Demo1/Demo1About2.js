import Link from "next/link";
import React from "react";
const Demo1About2 = () => {
  return (
    <section id="about-2" className="wide-60 about-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* ABOUT IMAGE */}
          <div className="col-md-5 col-lg-6">
            <div className="img-block pc-25 mb-40">
              <img
                className="img-fluid"
                src="images/Group 181950.png"
                alt="about-image"
              />
            </div>
          </div>
          {/* ABOUT TEXT */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block pc-25 mb-40">
              {/* Title */}
              <h3 className="h3-sm">Best B.Ed college in Bangalore</h3>
              {/* Text */}
              <p>
                We take pride in our commitment to shaping the future of
                education by providing comprehensive B.Ed. training programs.
                With a legacy of excellence, our institute has been a beacon of
                knowledge, equipping educators with the skills and expertise
                needed to thrive in today's dynamic educational landscape.
              </p>
              {/* List */}
              <ul className="txt-list mb-15">
                <li>
                  <b>A Beacon of Excellence</b> symbolizes an entity that
                  radiates outstanding qualities, serving as a guiding light for
                  others.
                </li>
                <li>
                  <b>Passion for Education</b> reflects a fervent and dedicated
                  commitment to the field of education.
                </li>
                <li>
                  <b>Innovative Teaching</b> refers to the application of
                  creative and forward-thinking approaches in the field of
                  education.
                </li>
                <li>
                  <b>Student-Centered Learning</b> revolves around an
                  educational approach where students take an active role in
                  their learning process.
                </li>
              </ul>

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
};

export default Demo1About2;
