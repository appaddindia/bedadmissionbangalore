import Link from "next/link";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { VideoContext } from "../../context/video";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";
import courses from "../../utils/servicedata";
import { Swiper, SwiperSlide } from "swiper/react";
import { home3ReviewProps, home3ReviewProps2 } from "../sliderProps";

const CourseDetails = ({ dis }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#courseD", sort, active);
    let list = document.querySelectorAll("#courseD");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section
        style={{ paddingTop: "120px" }}
        id="course-details"
        className="wide-40 course-section division"
      >
        <div className="container">
          <div className="row">
            {/* COURSE DESCRIPTION */}
            <div className="col-lg-8">
              <div className="course-txt pe-30">
                <img
                  src={dis?.image}
                  style={{ width: "100%", marginBottom: "30px" }}
                />
                {/* Course Title */}
                <h2 className="h3-sm">{dis?.h1}</h2>
                {/* Course Shot Description */}
                {dis?.paragraphs.map((elem, i) => {
                  return (
                    <p key={i}>
                      {elem}
                      {dis?.paragraphs.length - 1 == i ? (
                        <strong style={{ marginLeft: "6px" }}>
                          {dis.stronge}
                        </strong>
                      ) : (
                        <strong></strong>
                      )}
                    </p>
                  );
                })}
                {/* WHAT YOU LEARN */}
                <div className="what-you-learn">
                  {/* Title */}
                  <p style={{ marginBottom: "0px" }} className="p-md">
                    {dis?.note}
                  </p>
                </div>
                {/* END WHAT YOU LEARN */}
                {/* COURSE REQUIREMENTS */}
                <div className="cs-requirements cd-block">
                  {/* Small Title */}
                  <h5 className="h5-xl">{dis?.h2_1}</h5>
                  {/* Text */}
                  {dis?.h2_1_paragraphs.map((elem, i) => {
                    return <p key={i}>{elem}</p>;
                  })}
                  {/* List */}
                </div>
                {/* END COURSE REQUIREMENTS */}
                {/* COURSE DESCRIPTION */}
                <div className="cs-description cd-block">
                  {/* Small Title */}
                  <h5 className="h5-xl">{dis?.h2_2}</h5>
                  {/* Text */}
                  {dis?.h2_2_paragraphs.map((elem, i) => {
                    return <p key={i}>{elem}</p>;
                  })}
                  {/* Text */}
                  {/* List */}
                </div>
                {/* END COURSE DESCRIPTION */}
                {/* COURSE TARGET */}

                {/* END COURSE RATING */}
                {/* TESTIMONIAL #1 */}

                {/*END  TESTIMONIAL #4 */}
              </div>
            </div>
            {/* END COURSE DESCRIPTION */}
            {/* COURSE DATA */}
            <div
              style={{
                position: "sticky",
                top: 200,
              }}
              className="col-lg-4"
            >
              <div
                style={{
                  padding: "0px",
                  marginLeft: "0px",
                  marginRight: "0px",
                  position: "sticky",
                  top: 200,
                }}
                className="course-data"
              >
                <div
                  style={{
                    marginLeft: "0px",
                    marginRight: "0px",
                    marginBottom: "0px",
                  }}
                  id="register-form"
                >
                  <form
                    name="registerForm"
                    className="row register-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <h5
                      style={{ marginBottom: "20px" }}
                      className="h5-xl"
                    >{`Book an Appointment`}</h5>
                    {/* Form Input */}
                    <div id="input-name" className="col-md-12">
                      <p>Your Name*</p>
                      <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        className="form-control name"
                        placeholder="Enter Your Name*"
                        required
                      />
                    </div>
                    {/* Form Input */}
                    <div id="input-email" className="col-md-12">
                      <p>Your Email*</p>
                      <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        className="form-control email"
                        placeholder="Enter Your Email*"
                        required
                      />
                    </div>
                    {/* Form Input */}
                    <div id="input-phone" className="col-md-12">
                      <p>Your Pnone Number*</p>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="off"
                        className="form-control phone"
                        placeholder="Enter Your Phone Number*"
                        required
                      />
                    </div>
                    {/* Form Button */}
                    <div className="col-md-12 form-btn">
                      <a
                        href="https://api.whatsapp.com/send?phone=9538861888&text=Hello"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                        className="btn btn-md btn-rose tra-black-hover submit"
                      >
                        Register Now
                      </a>
                    </div>
                    {/* Form Message */}
                    <div className="col-md-12 register-form-msg text-center">
                      <span className="loading" />
                    </div>
                  </form>
                </div>
                {/* <div
                  style={{ marginTop: "0px", marginBottom: "0px" }}
                  className="what-you-learn"
                >
                  <h5 className="h5-xl">{`What you'll learn`}</h5>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="txt-list">
                        {courses.map((elem) => (
                          <Link href="">
                            <li style={{ marginBottom: "8px" }}>
                              {elem.title}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* Image */}
                {/* <img
                                    className="img-fluid"
                                    src="images/courses/course-5-img.jpg"
                                    alt="course-preview"
                                /> */}
                {/* Course Price */}
                {/* <div className="course-data-price text-center">
                                    $74.99
                                    <span className="old-price">$124.99</span>
                                    <p className="p-sm">16 days left at this price!</p>
                                </div> */}
                {/* Links */}
                {/* <div className="course-data-links">
                  <Link href="#" className="btn btn-md btn-tra-grey rose-hover">
                    Add To List
                  </Link>
                </div> */}
                {/* List */}
                {/* <div style={{ marginTop: "0px" }} className="course-data-list">
                  <span>This course includes:</span>
                  <p>
                    <i className="fas fa-graduation-cap" />
                    English, German, Italian and 7 more
                  </p>
                  <p>
                    <i className="far fa-play-circle" /> 3 hours on-demand video
                  </p>
                  <p>
                    <i className="fas fa-file-archive" /> 12 downloadable
                    resources
                  </p>
                  <p>
                    <i className="far fa-bookmark" /> Full lifetime access
                  </p>
                  <p>
                    <i className="fas fa-mobile-alt" />
                    Access on mobile and TV
                  </p>
                  <p>
                    <i className="far fa-id-card" />
                    Certificate of Completion
                  </p>
                </div> */}
              </div>
              <Swiper style={{ padding: "0px" }} {...home3ReviewProps2}>
                {/* TESTIMONIAL #1 */}
                {courses.map((elem, i) => (
                  <SwiperSlide
                    key={i}
                    style={{ padding: "0px", margin: "0px", width: "100%" }}
                    className="review-1"
                  >
                    <div
                      style={{ boxShadow: "0px solid #f5f5f5" }}
                      className="col-12"
                    >
                      <div className="cbox-1">
                        <Link href={elem?.description?.link}>
                          <img
                            className="img-fluid"
                            src={elem?.description?.image}
                            alt="course-preview"
                          />

                          <div
                            style={{ border: "0px solid #f5f5f5" }}
                            className="cbox-1-txt"
                          >
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
                              <span>{`5 / ${elem?.description?.number_of_reviews}`}</span>
                            </div>
                            <div
                              style={{ marginTop: "18px" }}
                              className="col-md-12 form-btn"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignContent: "center",
                                }}
                                className="btn btn-md btn-rose tra-black-hover submit"
                              >
                                Read More
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}

                {/* END TESTIMONIAL #8 */}
                <div className="owl-dots"></div>
              </Swiper>
            </div>
            {/* END COURSE DATA */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <Paggination active={active} setActive={setActive} state={state} /> */}
    </Fragment>
  );
};

export default CourseDetails;
