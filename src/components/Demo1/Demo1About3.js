import Link from "next/link";
import React from "react";
const Demo1About3 = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          style={{
            position: "absolute",
            zIndex: 200,
            width: "20%",
            right: "0%",
            marginTop: "-60px",
          }}
          className=""
          src="images/cap.png"
        />
      </div>
      <section id="about-3" className="pt-100 about-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* ABOUT TEXT */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block pc-25">
                {/* Title */}
                <h3 className="h3-sm">
                  Enrolling in Bangalore Univercity B.Ed. program.
                </h3>
                {/* Text */}
                <p>
                  Explore our diverse range of B.Ed. programs designed to cater
                  to the evolving needs of the education sector. Whether you are
                  a recent graduate or a seasoned professional looking to
                  enhance your teaching abilities, our programs are tailored to
                  suit various career stages and goals.
                </p>
                {/* List */}
                <ul className="txt-list mb-15">
                  <li>
                    <b>Foundations of Education:</b> Build a solid understanding
                    of the principles and theories that form the basis of
                    effective teaching and learning.
                  </li>
                  <li>
                    <b>Pedagogical Techniques:</b> Develop innovative and
                    engaging teaching methodologies that cater to diverse
                    learning styles.
                  </li>
                  <li>
                    <b>Classroom Management:</b> Acquire practical skills in
                    maintaining a positive and productive learning environment.
                  </li>
                  <li>
                    <b>Specialized Tracks:</b> Choose from a variety of
                    specialized tracks to align your training with your specific
                    interests, such as inclusive education, educational
                    technology, and more.
                  </li>
                </ul>
                {/* Button */}
                <a
                  // href="/categories-list"
                  // href="
                  href="https://api.whatsapp.com/send?phone=9538861888&text=Hello"
                  className="btn btn-md btn-rose tra-black-hover"
                >
                  Start Learning Now
                </a>
              </div>
            </div>
            {/* END ABOUT TEXT */}
            {/* ABOUT IMAGE */}
            <div className="col-md-5 col-lg-6">
              <div style={{ position: "relative" }} className="img-block">
                <img
                  className="img-fluid"
                  src="images/image-02.png"
                  alt="about-image"
                />
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
    </>
  );
};

export default Demo1About3;
