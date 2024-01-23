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
            <div className=" mb-40">
              {/* Title 	*/}
              <h3 className="h3-sm">Student Testimonials.</h3>
              {/* Text */}
              <p className="p-md">
                The BED course has been a transformative journey for students,
                fostering deep understanding and practical skills for effective
                teaching in the education field.
              </p>
              {/* Button */}
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
