import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const BlogListingNews3 = () => {
  const menu = [
    {
      name: "Professional Qualification",
      img: "aaa4.jpg",
      id: "unleashing-1",
      rate: 5,
      des: "B.Ed is a professional degree that provides individuals with the necessary qualifications and credentials to become certified teachers or educators in various educational settings.",
    },
    {
      name: "Specialized Knowledge",
      img: "aaa5.jpg",
      id: "unleashing-2",
      rate: 5,
      des: "The program equips students with in-depth knowledge of educational theories, teaching methodologies, and strategies, enabling them to develop effective teaching practices.",
    },
    {
      name: "Pedagogical Skills Development",
      img: "aaa6.jpg",
      rate: 5,
      id: "unleashing-3",
      des: "B.Ed programs focus on the development of pedagogical skills, including lesson planning, classroom management, and the ability to create engaging and effective learning experiences.",
    },
    {
      name: "Practical Teaching Experience",
      img: "aaa7.jpg",
      rate: 5,
      id: "unleashing-4",
      des: "Many B.Ed programs include practical teaching experiences, such as internships or teaching practicums, allowing students to apply theoretical knowledge in real classroom settings.",
    },
    {
      name: "Diversity Comprehension",
      img: "aaa8.jpg",
      rate: 5,
      id: "unleashing-5",
      des: "B.Ed programs emphasize understanding and addressing the needs of diverse learners, including those with different learning styles, abilities, and cultural backgrounds.",
    },
    {
      name: "Professional Networking",
      img: "aaa9.jpg",
      rate: 5,
      id: "unleashing-6",
      des: "Students in B.Ed programs have opportunities to network with educators, administrators, and fellow students, building connections that can be valuable throughout their teaching careers.",
    },
    {
      name: "Career Advancement",
      img: "aaa10.jpg",
      rate: 5,
      id: "unleashing-7",
      des: "B.Ed is often a prerequisite for obtaining teaching positions in schools, and having this degree can open doors to various career advancement opportunities within the field of education.",
    },
    {
      name: "Educational Impact",
      img: "aaa11.jpg",
      rate: 5,
      id: "unleashing-8",
      des: "Educators play a crucial role in shaping the future by imparting knowledge and skills to the next generation. Completing a B.Ed program allows individuals to contribute to societal development through education.",
    },
  ];
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#article", sort, active);
    let list = document.querySelectorAll("#article");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section
        style={{ paddingTop: "50px", marginBottom: "70px" }}
        id="news-3"
        className="pt-100 news-section division"
      >
        <div className="container">
          <div className="row">
            {/* BLOG POSTS HOLDER */}
            <div className="col-lg-9">
              <div className="posts-holder pe-25">
                {/* ARTICLE #1 */}
                <h4 className="h4-sm">
                  <div>Admission for B.Ed Course 2024 in Bangalore</div>
                </h4>
                <p>
                  Admissions for the B.Ed (Bachelor of Education) course for
                  2024 are currently ongoing. This course is a perfect
                  opportunity for individuals passionate about teaching and
                  making a difference in the education field. By pursuing a
                  B.Ed, you can develop and enhance your teaching skills,
                  shaping the careers and minds of young students. If you're
                  interested in becoming an educationist, this program can
                  provide you with the necessary knowledge and qualifications.
                </p>
                <h4 className="h4-sm">
                  <div>B.Ed Course Overview:</div>
                </h4>
                <p>
                  B.Ed two years programme of study spreadsover four semesters
                  with four term end examinations, the successful completion of
                  which would lead to the award of a bachelor’s degree in
                  education.
                </p>
                <h4 className="h4-sm">
                  <div>Eligibility :</div>
                </h4>
                <p>
                  1 A citizen of India who has passed any Bachelor’s degree
                  examination of Bangalore University or any University in India
                  or abroad recognized as equivalent through 10+2+3/4/5 pattern
                  of education who has obtained 50% of marks in aggregate of all
                  the subjects he/she has studied for degree is eligible for
                  admission to B.Ed. programme.
                </p>
                <p>
                  2 The candidate with less than 50% aggregate in the degree,
                  but a Masters Degree with 50% is also eligible for B.Ed.
                  programme.
                </p>
                <p>
                  3 In the case of SC/ST, Category -1 and physically challenged
                  student 45% marks in aggregate of all the subjects he/she has
                  studied for degree course or 45% in post graduation.
                </p>
                <p>
                  4 A candidate for the admission to degree of education (B.Ed.)
                  must fulfill the eligibility criteria as per the directives of
                  Govt. of Karnataka from time to time.
                </p>
                <h4 className="h4-sm">
                  <div>Details of Working Duration, Credits and Marks</div>
                </h4>
                <p>
                  There shall be at least two hundred working days each year and
                  100 working days for each semester, excluding the period of
                  admission and inclusive of classroom transaction, practicum,
                  field study and conduct of examination. The department/college
                  shall work for a minimum of thirty six hours in a week during
                  which faculty and students concerned with the conduct of the
                  programme shall be available all the time for interaction,
                  dialogue, consultation and mentoring programme.
                </p>
                <h6>
                  The details of total number of working days and its
                  distribution with credits and curricular components are as
                  follows:
                </h6>
                <img
                  style={{ padding: "10px 0px", width: "100%" }}
                  src="../images/aaaa1.jpg"
                ></img>
                <p>
                  Each Credit is equivalence of 25 marks and 23 hours of theory
                  work load. In case of 100 marks theory course there shall be
                  60 periods of class room presentation and hands on experience
                  and similar hours of equivalent tutorials, seminars, hands on
                  experience and similar works.
                </p>
                <h6>Credits, Marks and Passing Standards:</h6>
                <h4
                  style={{ marginTop: "10px", marginBottom: "0px" }}
                  className="h4-sm"
                >
                  <div>SEMESTER I</div>
                </h4>
                <img
                  style={{ padding: "10px 0px", width: "100%" }}
                  src="../images/aaaa2.jpg"
                ></img>
                <p>
                  Note: – Per C – Perspective Course, PedC- Pedagogic Course,
                  and EPC – Enhancing Professional Capacity Course
                </p>
                <h4
                  style={{ marginTop: "10px", marginBottom: "0px" }}
                  className="h4-sm"
                >
                  <div>SEMESTER II</div>
                </h4>
                <img
                  style={{ padding: "10px 0px", width: "100%" }}
                  src="../images/aaaa3.png"
                ></img>
                <p>
                  Note: – Per C – Perspective Course, Ped C- Pedagogic Course,
                  and EPC – Enhancing Professional Capacity Course
                </p>
                <h4
                  style={{ marginTop: "10px", marginBottom: "0px" }}
                  className="h4-sm"
                >
                  <div>SEMESTER III</div>
                </h4>
                <img
                  style={{ padding: "10px 0px", width: "100%" }}
                  src="../images/aaaa4.png"
                ></img>
                <p>
                  Note: Per C – Perspective Course, Ped C- Pedagogic Course, and
                  EPC – Enhancing Professional Capacity Course Point to be
                  noted: Optional Courses are-GUIDANCE AND COUNSELLING / VALUE
                  EDUCATION / HEALTH AND PHYSICAL EDUCATION / WOMEN EDUCATION /
                  PEACE EDUCATION / HUMAN RESOURCE DEVELOPMENT. Students are
                  required to choose any one from these two.
                </p>
                <h4
                  style={{ marginTop: "10px", marginBottom: "0px" }}
                  className="h4-sm"
                >
                  <div>SEMESTER-IV</div>
                </h4>
                <img
                  style={{ padding: "10px 0px", width: "100%" }}
                  src="../images/aaaa5.png"
                ></img>
                <p>
                  Note: Per C – Perspective Course, Ped C- Pedagogic Course, and
                  EPC – Enhancing Professional Capacity Course
                </p>
                <h4
                  style={{ marginTop: "10px", marginBottom: "0px" }}
                  className="h4-sm"
                >
                  <div>Credit Marks Details</div>
                </h4>
                <p>
                  The B.Ed Programme has various inputs designed with the due
                  proportion prescribed by the NCTE. Theoretical Courses,
                  Practice lesson Field Engagement, Co-Practice lesson in puts
                  and proportions to the total:
                </p>
                <img
                  style={{ padding: "10px 0px", width: "100%" }}
                  src="../images/aaaa6.png"
                ></img>

                {/* END ARTICLE #1 */}
                {/* ARTICLE #2 */}

                {/* END ARTICLE #4 */}
              </div>
            </div>
            {/* END BLOG POSTS HOLDER */}
            {/* SIDEBAR */}
            <aside id="sidebar" className="col-lg-3">
              {/* SEARCH FIELD */}
              <div className="sticky">
                <div id="search-field" className="sidebar-div mb-30">
                  <div className="mt-20">
                    <h4 className="h5-sm">
                      <div>Unleashing Educational Excellence</div>
                    </h4>
                  </div>
                </div>
                {/* BLOG CATEGORIES */}
                <div
                  style={{ position: "sticky", top: "10px" }}
                  className="blog-categories sidebar-div mb-50"
                >
                  <ul className="blog-category-list clearfix">
                    {menu.map((elem) => {
                      return (
                        <>
                          <li>
                            <a
                              style={{ marginBottom: "14px" }}
                              href={`#/${elem.name.replace(/\s/g, "")}`}
                            >
                              {elem.name}
                            </a>
                            <div id={`${elem.name.replace(/\s/g, "")}`}>
                              {/* Article Preview */}
                              <div className="col-md-12">
                                <img
                                  className="img-fluid"
                                  src={`images/${elem.img}`}
                                  alt="article-preview"
                                />
                              </div>
                              {/* Article Text */}
                              <div className="col-md-12">
                                {/* Title */}
                                <p>{elem.des}</p>
                                {/* Post Tags */}
                                <div className="tags-cloud">
                                  <span className="badge">
                                    <a href="tel:9538861888">Contact Us</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </aside>
            {/* END SIDEBAR */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
    </Fragment>
  );
};

export default BlogListingNews3;
