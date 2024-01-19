import React from "react";
import SuccessStories from "../SuccessStories";
import Link from "next/link";

const Demo5Reviews1 = () => {
  return (
    <section className="">
      <div className="">
        <div className="row">
          <div className="col-md-12">
            {/* <div className="section-title title-centered mb-60">
        
              <h3 className="h3-sm">Success Stories From Our Students</h3>
       
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
            </div> */}
            <div className="section-title mb-40">
              {/* Title 	*/}
              <h3 className="h3-sm">Popular Courses</h3>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus.
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
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div style={{ marginBottom: "45px" }} className="col-md-12">
            <SuccessStories />
          </div>
        </div>
        {/* END TESTIMONIALS CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo5Reviews1;
