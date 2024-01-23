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
              <h3 className="h3-sm">Transformative B.Ed. Program</h3>
              {/* Text */}
              <p className="p-md">
                Revolutionize your educational journey with our transformative
                B.Ed. program, blending modern infrastructure, rich resources,
                and practical labs.
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link
                  href="/blog-listing"
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
              <h5 className="h5-sm">Modern Classroom Infrastructure</h5>
              {/* Text */}
              <p>
                Immerse yourself in our B.Ed. program with cutting-edge
                classrooms equipped with interactive technology, fostering an
                engaging and dynamic learning environment that prepares future
                educators for innovative teaching methodologies.
              </p>
              {/* Post Author */}
            </div>
          </div>
          {/* END ARTICLE #1 */}
          {/* ARTICLE #2 */}
          <div className="col-md-6 col-lg-3">
            <div id="a2-2" className="article-2 b-right">
              <h5 className="h5-sm">Resource-Rich Library</h5>
              {/* Text */}
              <p>
                Explore boundless knowledge at our extensive library, curated
                with a diverse collection of educational resources. From
                textbooks to research materials, our library serves as a hub for
                B.Ed. students to delve into the depths of pedagogy and
                educational theory.
              </p>
            </div>
          </div>
          {/* END ARTICLE #2 */}
          {/* ARTICLE #3 */}
          <div className="col-md-6 col-lg-3">
            <div id="a2-3" className="article-2 b-right">
              <h5 className="h5-sm">Online Learning Platforms</h5>
              {/* Text */}
              <p>
                Embrace flexible online learning for B.Ed. students, offering
                accessible, interactive digital resources. Our commitment to
                technology-enhanced education enables seamless coursework
                engagement and peer collaboration, enhancing your learning
                journey.
              </p>
            </div>
          </div>
          {/* END ARTICLE #3 */}
          {/* ARTICLE #4 */}
          <div className="col-md-6 col-lg-3">
            <div id="a2-4" className="article-2">
              {/* Post Data */}
              {/* Title */}
              <h5 className="h5-sm">Practical Teaching Labs</h5>
              {/* Text */}
              <p>
                Experience hands-on learning in our well-equipped teaching labs,
                designed to simulate real-world classroom scenarios. Our B.Ed.
                program emphasizes practical training, ensuring that students
                develop the necessary skills to excel in the art of teaching.
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
