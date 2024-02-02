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
                <h2 style={{ textAlign: "center" }}>BANGALORE UNIVERSITY</h2>
                <h5 style={{ textAlign: "center" }}>
                  BANGALORE UNIVERSITY REGULATIONS OF CHOICE BASED CREDIT SYSTEM
                  (CBCS) SEMESTER SCHEME TWO YEAR B.Ed PROGRAM
                </h5>
                <h6 style={{ fontSize: "18px" }}>
                  Definitions of Key Terms Used In Credit Based Semesters &
                  Grading System
                </h6>
                <h6 style={{ fontSize: "18px" }}>Programme</h6>
                <p>
                  B.Ed two years programme of study spreads over four semesters
                  with four term end examinations, the successful completion of
                  which would lead to the award of a bachelor’s degree in
                  education.
                </p>
                <p>
                  <b>Course:</b> A course is essentially a constituent of a
                  program and may be a composite of several subject matter to be
                  covered in a semester.
                </p>
                <h6 style={{ fontSize: "18px" }}>Hard core courses</h6>
                <p>
                  Compulsory subjects of study which support the main discipline
                </p>
                <h6 style={{ fontSize: "18px" }}>Soft core courses</h6>
                <p>
                  An option for the candidate to choose a course from a pool of
                  courses offered by the respective B.Ed. colleges of Bangalore
                  University. Each candidate should choose a combination of two
                  soft core courses for the B.Ed. programme from the
                  combinations offered by the respective colleges.
                </p>
                <h6 style={{ fontSize: "18px" }}>Optional Courses</h6>
                <p>
                  A candidate has to select any one of the electives prescribed
                  by Bangalore University and offered by the respective B.Ed.
                  colleges.
                </p>
                <h6 style={{ fontSize: "18px" }}>
                  Enhancing professional Competency (EPC) course
                </h6>
                <p>
                  Field based activities conducted to enhance the professional
                  competencies and skill.
                </p>
                <h6 style={{ fontSize: "18px" }}>Credit</h6>
                <p>
                  Credit is a unit of academic input measured in terms of the
                  study hours. It reflects the number of “study hours “ in a
                  particular period of time devoted to various aspects of the
                  teaching learning process such as attending classes, engaging
                  in assignments, projects, seminars ,community activities &
                  practical courses required for the course etc.
                </p>
                <h6 style={{ fontSize: "18px" }}>Grade</h6>
                <p>
                  Grade means a letter symbol (ABC) which indicates the broad
                  level of performance of a student in an answer, course,
                  semester, and programme.
                </p>
                <h6 style={{ fontSize: "18px" }}>Grade Point Average (GPA)</h6>
                <p>
                  The means of grades obtained on a number of subjects / tasks
                  for a specialized period is the GPA
                </p>
                <p>
                  GPA is calculated by dividing sum of the weighed grade points
                  obtained by a student in a semester by the total number of
                  credits taken by him/ her in a semester. The value shall be
                  rounded off to two decimal places.
                </p>
                <h6 style={{ fontSize: "18px" }}>
                  Cumulative Grade Point Average (CGPA)
                </h6>
                <p>
                  CGPA is the value obtained by dividing the sum of the credit
                  multiplied by GPA for four semesters by the total credits for
                  the entire programme. The value shall be rounded off to two
                  decimal places. CGPA will be converted to letter grades for
                  the final results.
                </p>
                <h6 style={{ fontSize: "18px" }}>Reflective Journal (RJ)</h6>
                <p>
                  A student-teacher generated locally standardized daily log
                  book maintained under supervision of the mentors is visualized
                  as a reflective journal.
                </p>
                <h6 style={{ fontSize: "18px" }}>
                  Regulations Governing the Degree of Bachelor of Education,
                  Bangalore University
                </h6>
                <p>
                  <b>Title;</b> Bachelor of Education [B. Ed]
                </p>
                <h6 style={{ fontSize: "18px", marginTop: "30px" }}>
                  Eligibility for Admission
                </h6>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>1.1 </h6>
                  <p>
                    A citizen of India who has passed any Bachelor’s degree
                    examination of Bangalore University or any University in
                    India or abroad recognized as equivalent through 10+2+3/4/5
                    pattern of education who has obtained 50% of marks in
                    aggregate of all the subjects he/she has studied for degree
                    is eligible for admission to B.Ed. programme.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>1.2 </h6>
                  <p>
                    The candidate with less than 50% aggregate in the degree,
                    but a Masters Degree with 50% is also eligible for B.Ed.
                    programme.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>1.3 </h6>
                  <p>
                    In the case of SC/ST, Category -1 and physically challenged
                    student 45% marks in aggregate of all the subjects he/she
                    has studied for degree course or 45% in post graduation.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>1.4 </h6>
                  <p>
                    A candidate for the admission to degree of education (B.Ed.)
                    must fulfill the eligibility criteria as per the directives
                    of Govt. of Karnataka from time to time.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>1.4 </h6>
                  <div>
                    <h5>
                      Eligibility for opting French/German Soft core (Pedagogy){" "}
                    </h5>
                    <h6 style={{ fontSize: "18px" }}>
                      a. Any Graduate, who has studied any ONE of the following
                      languages:
                    </h6>
                    <ul style={{ listStyleType: "unset" }}>
                      <li>
                        B.A French/ or Major French from recognized University.
                        Or
                      </li>
                      <li> II language French in Degree Or</li>
                      <li>
                        Advance Diploma in French or equivalent from any
                        recognized University Or
                      </li>
                      <li>DALF B2 level in French from Alliance Française.</li>
                      <li>
                        B.A German / or Major German from recognized University.
                        Or
                      </li>
                      <li>II language German in Degree Or </li>
                      <li>
                        Advance Diploma in German or equivalent from any
                        recognized University. Or
                      </li>
                      <li>
                        {" "}
                        Level B2.2 in German from Goethe Institute- Max Muller
                        Bhavan.
                      </li>
                    </ul>
                  </div>
                </div>
                <h6 style={{ marginTop: "40px", fontSize: "18px" }}>
                  2 Allocation of seats
                </h6>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>2.1 </h6>
                  <p>
                    College shall admit all the candidates allotted by the
                    Government of Karnataka.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>2.2 </h6>
                  <p>
                    For filling the other seats the respective colleges shall
                    select the candidates following eligibility criteria as
                    envisaged in Regulations 1.1 to 1.5.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>2.3 </h6>
                  <p>
                    The college should get the selected candidates both under
                    Government and Management quota within the last date fixed
                    for admission by the Bangalore University.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>2.4 </h6>
                  <p>
                    The total intake of all B Ed colleges shall be as fixed by
                    NCTE / Government of Karnataka from time to time.
                  </p>
                </div>
                <h6 style={{ marginTop: "20px", fontSize: "18px" }}>
                  3 Duration of the course
                </h6>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>3.1 </h6>
                  <p>
                    The duration of study for B.Ed. CBCS Semester Programme
                    shall extend over a period of two years with four semesters
                    of total 96 credits. The first semester shall be for 24
                    credits, second semester shall be for 24 credits, third
                    semester shall be for 24 credits and the fourth semester
                    shall be for 24 credits.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>3.1 </h6>
                  <div>
                    <p>
                      The practice in teaching programme shall be conducted in
                      three phases.
                    </p>
                    <p>
                      Phase I - Pre internship programme during the second
                      semester for the duration of four weeks for 04 credits.
                    </p>
                    <p>
                      Phase II – Internship programme during third semester for
                      the duration of ten weeks for 12 credits
                    </p>
                    <p>
                      Phase III - Post internship programme during fourth
                      semester for the duration of six weeks for 08 credits.
                    </p>
                  </div>
                </div>
                <h6 style={{ marginTop: "20px", fontSize: "18px" }}>
                  4 Medium of Instruction
                </h6>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>4.1 </h6>
                  <p>
                    The Medium of Instruction is either English or Kannada.
                    However, student can opt for English or Kannada for Practice
                    teaching. Student teachers are allowed to write theory
                    examination either in English or Kannada.
                  </p>
                </div>
                <h6 style={{ marginTop: "20px", fontSize: "18px" }}>
                  5 Attendance
                </h6>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>5.1 </h6>
                  <p>
                    A candidate shall be considered to have satisfied the
                    requirement of attendance for a semester if he/she attends
                    not less than 80% of the number of classes actually held
                    till the end of the semester in each of the subjects & 90%
                    for practical activities.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>5.2 </h6>
                  <p>
                    A student teacher must submit all assignments at end of each
                    semester to qualify him / her to appear for respective
                    semester examination.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>5.3 </h6>
                  <p>
                    A student should compulsorily participate in all the
                    activities of the semester and submit the reports at the end
                    of each semester.
                  </p>
                </div>
                <h6 style={{ marginTop: "20px", fontSize: "18px" }}>
                  6. Internship{" "}
                </h6>
                <p style={{ marginBottom: "0px" }}>
                  Internship is an integral component of teacher’s preparation
                  in B.Ed. programme. It helps the prospective teachers to
                  acquire the professional skills required for teaching.{" "}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  The internship programme runs in three phases:
                </p>
                <div style={{ marginLeft: "10px" }}>
                  <p style={{ marginBottom: "0px" }}>1. Pre- internship</p>
                  <p style={{ marginBottom: "0px" }}>2. School - internship</p>
                  <p>3. Post- internship</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>1 </h6>
                  <p>
                    <b>Pre internship:</b>
                    It is a college based programme which takes place during the
                    second semester for 4 weeks. During this phase the
                    prospective teachers are exposed to various teaching skills
                    to ensure an understanding of teaching process. The student
                    teachers are also engaged in the practice of teaching skills
                    and its integration in simulated condition.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>2 </h6>
                  <p>
                    <b>School internship:</b>
                    It is a school based programme which takes place in the
                    third semester. During this phase the student teachers are
                    actually placed in a specific school for duration of 10
                    weeks. They are exposed to the school culture by getting
                    involved in various activities. During this phase
                    prospective teachers are engaged in various curricular and
                    co-curricular activities like teaching (20+20 lessons in
                    each peadagogy subject), administration of achievement
                    tests, remedial teaching, participation and organization of
                    various activities, observation of records maintained in the
                    schools etc.They experience, practice, clarify and reflect
                    upon several aspects related to the teaching to internalize
                    the role of a teacher.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h6 style={{ paddingRight: "8px" }}>3 </h6>
                  <div>
                    <p>
                      <b>Post internship:</b>
                      This is a final phase of internship programme which takes
                      place in the fourth semester for the duration of 8 weeks.
                      The student teachers are involved in other added
                      experiences like community based activities, visits to
                      special schools, review of textbooks etc. It provides the
                      opportunity to exhibit and analyze their work, done during
                      internship programme. Student teacher’s teaching aspects
                      are finally assessed through practical examination and
                      viva -voce.
                    </p>
                    <p>
                      The student teacher should select any one of the following
                      levels for the internship programme in both the pedagogy
                      subjects:
                    </p>
                    <ul style={{ marginLeft: "10px" }}>
                      <li>1. 6 th to 8th Std., or 9 th to 10th</li>
                      <li>2. 11th to 12th ( only for PG qualified students)</li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="../images/FINAL-B.Ed_.-SYLLABUS-2400-MARKS.pdf"
                    className="btn btn-tra-rose"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
                {/* <h6 style={{ marginTop: "15px" }}>
                  7. Course Framework & Scheme of Examination
                </h6> */}
                {/* <h6>FIRST SEMESTER </h6>
                <img style={{ width: "100%" }} src="../images/aaaaa1.png"></img>
                <p style={{ fontSize: "14px", marginTop: "10px" }}>
                  <b>EPC 1- Communication skills and Expository writing:</b> is
                  a practical activity conducted 04 hrs a week and shall be
                  treated as equivalent to 02 hrs of theory teaching.
                </p>
                <p style={{ fontSize: "14px", marginTop: "10px" }}>
                  <b>EPC 2 - Understanding self, personality & yoga:</b> is a
                  practical activity conducted 04 hrs a week and shall be
                  treated as equivalent to 02 hrs of theory teaching.
                </p> */}
                {/* <h6>SECOND SEMESTER</h6>
                <img style={{ width: "100%" }} src="../images/aaaaa2.png"></img>

                <p style={{ fontSize: "14px", marginTop: "10px" }}>
                  <b>EPC3: ICT Applications:</b> is a practical activity
                  conducted 4 hours a week and shall be treated as equivalent to
                  2 hours of teaching
                </p> */}
                {/* <p style={{ fontSize: "14px", marginTop: "10px" }}>
                  <b>EPC 4:</b> Fine Art and theatre: is a practical activity
                  conducted 4 hours a week and shall be treated as equivalent to
                  2 hours of teaching
                </p> */}
                {/* <h6>EPC 5: Pre internship Programme -</h6>
                <img style={{ width: "100%" }} src="../images/aaaaa.png"></img>
                <h6 style={{ marginTop: "10px" }}>THIRD SEMESTER:</h6> */}
              </div>
            </div>
            {/* END BLOG POSTS HOLDER */}
            {/* SIDEBAR */}
            <aside id="sidebar" className="col-lg-3 gydh">
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
                                  style={{
                                    marginTop: "8px",
                                    marginBottom: "4px",
                                  }}
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
