import React from "react";
import Time from "../../utils/time";

const Aboutbanner2 = () => {
  return (
    <section
      style={{
        paddingTop: "80px",
        backgroundImage: "url(../images/aboutbanner.jpg)",
      }}
      id="banner-2"
      className="bg-01 wide-0 banner-section"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* BANNER TEXT */}
          <div className="col-md-7">
            <div className="banner-2-txt white-color">
              <h3 className="h3-lg">
                Register now for getting
                <span>200+ courses free access</span>. This offer for limited
                time
              </h3>
              {/* COUNTDOWN ELEMENT */}
              <div className="countdown">
                <span className="countdown-txt">Ends in</span>
                <div id="clock">
                  <div className="cbox clearfix">
                    <span className="cbox-digit">
                      {Time("2022-09-27 00:00:00").days}
                    </span>{" "}
                    <span className="cbox-txt">d</span>
                  </div>
                  <div className="cbox clearfix">
                    <span className="cbox-digit">
                      {Time("2022-09-27 00:00:00").hours}
                    </span>{" "}
                    <span className="cbox-txt">h</span>
                  </div>
                  <div className="cbox clearfix">
                    <span className="cbox-digit">
                      {Time("2022-09-27 00:00:00").minutes}
                    </span>{" "}
                    <span className="cbox-txt">m</span>
                  </div>
                  <div className="cbox clearfix">
                    <span className="cbox-digit">
                      {Time("2022-09-27 00:00:00").seconds}
                    </span>{" "}
                    <span className="cbox-txt">s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* REGISTER FORM */}
          <div className="col-md-5">
            <div id="register-form">
              <form
                name="registerForm"
                className="row register-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div id="input-name" className="col-md-12">
                  <p>Your Name*</p>
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    placeholder="Enter Your Name*"
                    required
                  />
                </div>
                <div id="input-email" className="col-md-12">
                  <p>Your Email*</p>
                  <input
                    type="email"
                    name="email"
                    className="form-control email"
                    placeholder="Enter Your Email*"
                    required
                  />
                </div>
                <div id="input-phone" className="col-md-12">
                  <p>Your Pnone Number*</p>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control phone"
                    placeholder="Enter Your Phone Number*"
                    required
                  />
                </div>
                <div className="col-md-12 form-btn">
                  <button
                    type="submit"
                    className="btn btn-md btn-rose tra-black-hover submit"
                  >
                    Register Now
                  </button>
                </div>
                <div className="col-md-12 register-form-msg text-center">
                  <span className="loading" />
                </div>
              </form>
            </div>
          </div>
          {/* END REGISTER FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Aboutbanner2;
