import Link from "next/link";
import React from "react";
const Demo1News2 = () => {
  return (
    <section id="news-2" className="wide-60 news-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-70">
              {/* Title 	*/}
              <h3 className="h3-sm">B.Ed. Success Tales</h3>
              {/* Text */}
              <p className="p-md">
                Empowering Journeys: Inspiring Stories from B.Ed. Graduates in
                Bangalore University's Online Program
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link
                  // href="/blog-listing"
                  href="/contacts"
                  className="btn btn-tra-grey rose-hover"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* NEWS GRID */}
        <div className="row d-flex align-items-center">
          {/* ARTICLE #1 */}
          <div className="col-md-6 col-lg-3">
            <div id="a2-1" className="article-2 b-right">
              {/* Post Data */}
              {/* Title */}
              <h5 className="h5-sm">Sneha Patel</h5>
              {/* Text */}
              <p style={{ height: "130px", overflowY: "scroll" }}>
                Hi, I'm Sneha Patel, sharing my success story as a student at
                B.Ed Admission in Bangalore University. Originally pursuing
                engineering, I realized my true passion lay in education. The
                online B.Ed. course not only made this transition possible but
                also empowered me to become a dedicated and passionate educator.
              </p>
              {/* Post Author */}
            </div>
          </div>
          {/* END ARTICLE #1 */}
          {/* ARTICLE #2 */}
          <div className="col-md-6 col-lg-3">
            <div id="a2-2" className="article-2 b-right">
              <h5 className="h5-sm">Rohit Sharma</h5>
              {/* Text */}
              <p style={{ height: "130px", overflowY: "scroll" }}>
                Hey there! I'm Rohit Sharma, a tech enthusiast turned teacher.
                Thanks to B.Ed Admission in Bangalore University's online
                program, I seamlessly shifted gears from the IT world to
                education. Now, I'm combining my love for technology with the
                art of teaching, creating an engaging learning experience for my
                students.
              </p>
            </div>
          </div>
          {/* END ARTICLE #2 */}
          {/* ARTICLE #3 */}
          <div className="col-md-6 col-lg-3">
            <div id="a2-3" className="article-2 b-right">
              <h5 className="h5-sm">Reema Singh</h5>
              {/* Text */}
              <p style={{ height: "130px", overflowY: "scroll" }}>
                Hello, everyone! I'm Reema Singh, a working professional who
                aspired to make a difference in education. Enrolling in B.Ed
                Admission in Bangalore University's online course allowed me to
                pursue my dream without disrupting my career. Now, I'm
                successfully managing both my job and my passion for teaching.
              </p>
            </div>
          </div>
          {/* END ARTICLE #3 */}
          {/* ARTICLE #4 */}
          <div className="col-md-6 col-lg-3">
            <div id="a2-4" className="article-2">
              {/* Post Data */}
              {/* Title */}
              <h5 className="h5-sm">Rahul Verma</h5>
              {/* Text */}
              <p style={{ height: "130px", overflowY: "scroll" }}>
                Namaste! I'm Rahul Verma, sharing my transformative journey as a
                student at B.Ed Admission in Bangalore University. The online
                B.Ed. program not only honed my teaching skills but also
                equipped me with the tools to create an inclusive and dynamic
                virtual classroom environment, impacting the lives of my
                students.
              </p>
              {/* Post Author */}
            </div>
          </div>
          {/* END ARTICLE #4 */}
        </div>
        {/* END NEWS GRID */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1News2;
