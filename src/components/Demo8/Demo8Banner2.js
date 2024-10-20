import React from "react";
import Time from "../../utils/time";
import Demo5Reviews1 from "../Demo5/Demo5Reviews1";

const Demo8Banner2 = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(#f8f9fbe1,#f8f9fbe1), url(images/banner2.jpg)",
      }}
      id="banner-2"
      className="bg-whitesmokes wide-60 banner-section"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* BANNER TEXT */}
          <div className="col-md-7">
            {/* <div className="banner-2-txt white-color">
              <h3 className="h3-lg">
                Register now for getting
                <span>200+ courses free access</span>. This offer for limited
                time
              </h3>
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
            </div> */}
            <Demo5Reviews1 />
          </div>
          {/* REGISTER FORM */}
          <div className="col-md-5">
            <div id="register-form">
              <form
                name="registerForm"
                className="row register-form"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Form Input */}
                <div id="input-name" className="col-md-12">
                  <p>Your Name*</p>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="form-control name"
                    placeholder="Enter Your Name*"
                    required
                  />
                </div>
                {/* Form Input */}
                <div id="input-email" className="col-md-12">
                  <p>Your Email*</p>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="form-control email"
                    placeholder="Enter Your Email*"
                    required
                  />
                </div>
                {/* Form Input */}
                <div id="input-phone" className="col-md-12">
                  <p>Your Pnone Number*</p>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="off"
                    className="form-control phone"
                    placeholder="Enter Your Phone Number*"
                    required
                  />
                </div>
                {/* Form Button */}
                <div className="col-md-12 form-btn">
                  <a
                    href="https://api.whatsapp.com/send?phone=9538861888&text=Hello"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                    className="btn btn-md btn-rose tra-black-hover submit"
                  >
                    Register Now
                  </a>
                </div>
                {/* Form Message */}
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

export default Demo8Banner2;
