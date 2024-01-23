import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home3ReviewProps } from "./sliderProps";
const SuccessStories = () => {
  return (
    <Swiper {...home3ReviewProps}>
      {/* TESTIMONIAL #1 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p style={{ height: "90px", overflowY: "scroll" }}>
          The B.Ed course provided a comprehensive and well-structured
          curriculum that covered all aspects of educational theory and
          practice. The emphasis on practical teaching experiences was
          particularly beneficial, allowing me to apply what I learned in real
          classroom settings.
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
          {/* Author Avatar */}
          <div className="author-avatar">
            <img
              className="img-fluid"
              src="images/rrr1.jpg"
              alt="review-author-avatar"
            />
          </div>
          {/* Testimonial Author */}
          <div className="review-author">
            {/* Rating */}
            <div className="tst-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h5 className="h5-xs">Veeresh Patil</h5>
            <span>Hubbli</span>
          </div>
        </div>
      </SwiperSlide>
      {/*END  TESTIMONIAL #1 */}
      {/* TESTIMONIAL #2 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p style={{ height: "90px", overflowY: "scroll" }}>
          Undertaking the B.Ed program equipped me with invaluable pedagogical
          skills. The focus on lesson planning, classroom management, and the
          integration of technology has significantly enhanced my ability to
          create engaging and effective learning experiences for students.
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
          {/* Author Avatar */}
          <div className="author-avatar">
            <img
              className="img-fluid"
              src="images/rrr2.jpg"
              alt="review-author-avatar"
            />
          </div>
          {/* Testimonial Author */}
          <div className="review-author">
            {/* Rating */}
            <div className="tst-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <h5 className="h5-xs">Sachin Deshai</h5>
            <span>Bangalore</span>
          </div>
        </div>
      </SwiperSlide>
      {/* END TESTIMONIAL #2 */}
      {/* TESTIMONIAL #3 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p style={{ height: "90px", overflowY: "scroll" }}>
          The B.Ed program's commitment to understanding and addressing the
          needs of diverse learners was a standout feature. The emphasis on
          inclusivity has prepared me to create a supportive and accessible
          learning environment for students with various backgrounds and
          learning styles.
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
          {/* Author Avatar */}
          <div className="author-avatar">
            <img
              className="img-fluid"
              src="images/rrr3.jpg"
              alt="review-author-avatar"
            />
          </div>
          {/* Testimonial Author */}
          <div className="review-author">
            {/* Rating */}
            <div className="tst-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h5 className="h5-xs">Deepa Patil</h5>
            <span>Mysore</span>
          </div>
        </div>
      </SwiperSlide>
      {/* END TESTIMONIAL #3 */}
      {/* TESTIMONIAL #4 */}

      {/* END TESTIMONIAL #8 */}
      <div className="owl-dots"></div>
    </Swiper>
  );
};

export default SuccessStories;
