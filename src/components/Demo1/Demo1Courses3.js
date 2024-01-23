import Link from "next/link";
import React from "react";
const Demo1Courses3 = () => {
  const menu = [
    {
      name: "Professional Qualification",
      img: "aaa4.jpg",
      rate: 5,
      des: "B.Ed is a professional degree that provides individuals with the necessary qualifications and credentials to become certified teachers or educators in various educational settings.",
    },
    {
      name: "Specialized Knowledge",
      img: "aaa5.jpg",
      rate: 5,
      des: "The program equips students with in-depth knowledge of educational theories, teaching methodologies, and strategies, enabling them to develop effective teaching practices.",
    },
    {
      name: "Pedagogical Skills Development",
      img: "aaa6.jpg",
      rate: 5,
      des: "B.Ed programs focus on the development of pedagogical skills, including lesson planning, classroom management, and the ability to create engaging and effective learning experiences.",
    },
    {
      name: "Practical Teaching Experience",
      img: "aaa7.jpg",
      rate: 5,
      des: "Many B.Ed programs include practical teaching experiences, such as internships or teaching practicums, allowing students to apply theoretical knowledge in real classroom settings.",
    },
    {
      name: "Diversity Comprehension",
      img: "aaa8.jpg",
      rate: 5,
      des: "B.Ed programs emphasize understanding and addressing the needs of diverse learners, including those with different learning styles, abilities, and cultural backgrounds.",
    },
    {
      name: "Professional Networking",
      img: "aaa9.jpg",
      rate: 5,
      des: "Students in B.Ed programs have opportunities to network with educators, administrators, and fellow students, building connections that can be valuable throughout their teaching careers.",
    },
    {
      name: "Career Advancement",
      img: "aaa10.jpg",
      rate: 5,
      des: "B.Ed is often a prerequisite for obtaining teaching positions in schools, and having this degree can open doors to various career advancement opportunities within the field of education.",
    },
    {
      name: "Educational Impact",
      img: "aaa11.jpg",
      rate: 5,
      des: "Educators play a crucial role in shaping the future by imparting knowledge and skills to the next generation. Completing a B.Ed program allows individuals to contribute to societal development through education.",
    },
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
              <h3 className="h3-sm">Unleashing Educational Excellence</h3>
              {/* Text */}
              <p className="p-md">
                Pursuing a Bachelor of Education (B.Ed) degree offers several
                advantages for individuals aspiring to become educators. Here
                are eight benefits of undertaking a B.Ed program
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
                        src={`images/${elem.img}`}
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
                        <h5 className="h5-xs">{elem.name}</h5>
                        <p style={{ marginBottom: "12px" }}>
                          {elem.des.slice(0, 90)}...
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
