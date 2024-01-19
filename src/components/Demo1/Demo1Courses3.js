import Link from "next/link";
import React from "react";
const Demo1Courses3 = () => {
  const menu = [
    "aaa1.jpg",
    "aaa3.jpg",
    "aaa1.jpg",
    "aaa1.jpg",
    "aaa1.jpg",
    "aaa1.jpg",
    "aaa1.jpg",
    "aaa1.jpg",
  ];
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(#f8f9fbe1,#f8f9fbe1), url(images/banner1.jpg)",
      }}
      id="courses-3"
      className="bg-lightgrey wide-60 courses-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">Most Popular Courses</h3>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link
                  href="/courses-list"
                  className="btn btn-tra-grey rose-hover"
                >
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* COURSES HOLDER */}
        <div className="row courses-grid">
          {/* COURSE #1 */}
          {menu.map((elem) => {
            return (
              <>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="cbox-1">
                    <Link href="/course-details">
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src={`images/${elem}`}
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div style={{ padding: "18px" }} className="">
                        {/* Course Tags */}
                        {/* <p className="course-tags">
                          <span>Languages</span>
                          <span>English</span>
                        </p> */}
                        {/* Course Title */}
                        <h5 className="h5-xs">
                          Beginner Level English - Foundations
                        </h5>
                        <p style={{ marginBottom: "12px" }}>
                          Aliquam a augue suscipit, luctus neque purus ipsum ...
                        </p>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>4.5 (26 Ratings)</span>
                        </div>
                        {/* <Link
                          href="/categories-list"
                          className="btn btn-md btn-rose tra-black-hover"
                        >
                          Start Learning Now
                        </Link> */}
                        {/* <span className="course-price">
                          <span className="old-price">$149.99</span>
                          $138.99
                        </span> */}
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
          {/* END COURSE #1 */}
          {/* COURSE #2 */}

          {/* END COURSE #8 */}
        </div>
        {/* END COURSES HOLDER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1Courses3;
