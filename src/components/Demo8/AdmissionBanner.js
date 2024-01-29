import React from "react";

function AdmissionBanner() {
  return (
    <section
      style={{
        padding: "100px 0px 125px",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.205), rgba(0, 0, 0, 0.205)),url(../images/admissionbanner.jpg)",
      }}
      id="hero-8"
      className="bg-scroll hero-section division"
    >
      <div className="container">
        <div className="row">
          {/* HERO TEXT */}
          <div className="col-md-12">
            <div
              style={{ marginTop: "60px" }}
              className="hero-txt text-center white-color"
            >
              {/* Title */}
              <h4 className="h4-xs">B.Ed Admission</h4>
              <h2 style={{ fontSize: "36px" }} className="h2-sm">
                Committed to Tomorrow's Leaders: Comprehensive B.Ed.
                Initiatives.
              </h2>
              {/* Button */}
              <a
                href="tel:9538861888"
                className="btn btn-md btn-rose tra-white-hover"
              >
                Start Learning Now
              </a>
            </div>
          </div>
          {/* END HERO TEXT */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
}

export default AdmissionBanner;
