import React from "react";

const CategoriesListAbout4 = () => {
  return (
    <section
      style={{ padding: "50px 0px" }}
      id="about-4"
      className="bg-lightgrey"
    >
      <div className="container">
        {/* ABOUT TEXT */}
        <div className="row">
          <div className="col-xl-12">
            <div className="a4-txt">
              {/* Title */}
              <h5 className="h5-xl text-center">
                *Scholarships subject to central/state government and college
                rules.
              </h5>
              {/* Text */}
              <p>
                Scholarships are crucial for equalizing educational
                opportunities and offering financial aid to deserving
                individuals from various backgrounds. The Government of India
                supports this through different scholarship programs, following
                central and state regulations as well as college policies. These
                include National Merit Scholarships for outstanding academic
                achievements, scholarships for Backward Classes and Minorities
                to promote inclusivity, and SC/ST scholarships addressing the
                needs of marginalized communities. Tailored scholarships for the
                Physically Handicapped aim to overcome financial barriers and
                support their education. This diverse range of initiatives
                reflects the government's commitment to creating a more
                equitable educational environment for all.
              </p>
              <h6 style={{ marginTop: "10px" }}>The Scholarship offers:</h6>
              <p>1. Govt. of India National Merit Scholarships</p>
              <p>2. Scholarships for Backward Class and Minorities</p>
              <p>3. Govt. of India SC/ST Scholarships</p>
              <p>4. Physically Handicapped Scholarships</p>
            </div>
          </div>
        </div>
        {/* END ABOUT TEXT */}
        {/* ABOUT IMAGE */}
        <div className="row">
          <div className="col-md-12">
            <div className="img-block">
              <img
                className="img-fluid"
                src="images/image-031.jpg"
                alt="about-image"
              />
            </div>
          </div>
        </div>
        {/* ABOUT BOXES */}
        <div className="a4-boxes">
          <div className="row d-flex align-items-center">
            {/* BOX #1 */}
            <div className="col-md-4">
              <div className="abox-4 icon-sm">
                {/* Icon */}
                <span className="flaticon-004-computer" />
                {/* Text */}
                <div className="abox-4-txt">
                  <h5 className="h5-lg">CAREER CONSULTANCY</h5>
                  <p className="grey-color">
                    Get relevant career paths traced by experts to ascertain the
                    best opportunities
                  </p>
                </div>
              </div>
            </div>
            {/* END BOX #1 */}
            {/* BOX #2 */}
            <div className="col-md-4">
              <div className="abox-4 icon-sm">
                {/* Icon */}
                <span className="flaticon-028-learning-1" />
                {/* Text */}
                <div className="abox-4-txt">
                  <h5 className="h5-lg">LEARNING SUPPORT</h5>
                  <p className="grey-color">
                    Unparalleled guidance from industry mentors, teaching
                    assistants and peers
                  </p>
                </div>
              </div>
            </div>
            {/* END BOX #2 */}
            {/* BOX #3 */}
            <div className="col-md-4">
              <div className="abox-4 icon-sm">
                {/* Icon */}
                <span className="flaticon-032-tablet" />
                {/* Text */}
                <div className="abox-4-txt">
                  <h5 className="h5-lg">PLACEMENT ASSISTANCE</h5>
                  <p className="grey-color">
                    Make informed career choices with career counselling
                    sessions from industry experts
                  </p>
                </div>
              </div>
            </div>
            {/* END BOX #3 */}
          </div>
          {/* End row */}
        </div>
        {/* END ABOUT BOXES */}
      </div>
      {/* End container */}
    </section>
  );
};

export default CategoriesListAbout4;
