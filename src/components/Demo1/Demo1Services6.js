import Link from "next/link";
import React from "react";
const Demo1Services6 = () => {
  return (
    <section
      style={{ backgroundImage: `url('/demo/images/features.jpg')` }}
      id="services-6"
      className="bg-03 wide-60 services-section division"
    >
      <div className="container white-color">
        {/* SERVICES TEXT */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">
            <div className="services-6-txt">
              {/* Title */}
              <h3 className="h3-md">
                Get Quality Education with Digital Education Mission
              </h3>
              {/* Text */}
              <p className="p-md">
                Embark on a transformative educational journey with our esteemed
                B.Ed. program, offered in collaboration with the Digital
                Education Mission. At the heart of our mission is the commitment
                to providing you with a quality education that goes beyond
                traditional boundaries.
              </p>
              {/* Button */}
              <Link href="#" className="btn btn-md btn-rose tra-white-hover">
                Start Learning Now!
              </Link>
            </div>
          </div>
        </div>
        {/* END SERVICES TEXT */}
        {/* SERVICE BOXES */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              {/* SERVICE BOX #1 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-031-select" />
                <h5 className="h5-xs">
                  Skills<br></br> Instructor
                </h5>
              </div>
              {/* SERVICE BOX #2 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-028-learning-1" />
                <h5 className="h5-xs">
                  Online<br></br> Classes
                </h5>
              </div>
              {/* SERVICE BOX #3 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-006-diploma" />
                <h5 className="h5-xs">
                  Job<br></br> Support
                </h5>
              </div>
              {/* SERVICE BOX #4 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-013-elearning-5" />
                <h5 className="h5-xs">
                  Varied<br></br> learning
                </h5>
              </div>
              {/* SERVICE BOX #5 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-001-book" />
                <h5 className="h5-xs">Empowering Futures</h5>
              </div>
            </div>
          </div>
        </div>
        {/* END SERVICE BOXES */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1Services6;
