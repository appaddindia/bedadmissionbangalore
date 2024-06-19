"use client";
import Link from "next/link";
import React from "react";
import courses from "../../utils/servicedata";

const Aboutcourses3 = () => {
  return (
    <section
      style={{ paddingBottom: "0px" }}
      id="courses-3"
      className="wide-60 courses-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title title-centered mb-60">
              {/* Title  */}
              <h3 className="h3-sm">B.Ed correspondence course in Bangalore</h3>

              <p className="p-md">
                Explore top online B.Ed courses for Bangalore University
                admissions, featuring comprehensive curriculum, expert faculty,
                and flexible learning options.
              </p>
            </div>
          </div>
        </div>
        {/* COURSES HOLDER */}

        <div className="row courses-grid">
          {courses.map((elem, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-3">
              <div className="cbox-1">
                <Link href={elem?.description?.link}>
                  <img
                    className="img-fluid"
                    src={elem.description.image}
                    alt="course-preview"
                    style={{ width: "100%" }}
                  />

                  <div className="cbox-1-txt">
                    <h5 className="h5-xs">{elem.title}</h5>
                    <p style={{ marginBottom: "5px" }}>
                      {elem.description.paragraphs[0].slice(0, 76)}...
                    </p>
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>{` 5 / ${elem?.description.number_of_reviews}`}</span>
                    </div>
                    <div>
                      <span className="course-price">Free Course</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutcourses3;
