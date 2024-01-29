import React, { Fragment, useState } from "react";

const BlogListingNewsLetter1 = () => {
  const [input, setInput] = useState();
  return (
    <Fragment>
      <section id="newsletter-1" className="newsletter-section division">
        <div className="container">
          <div className="bg-fixed newsletter-holder">
            <div className="row">
              {/* SECTION TITLE */}
              <div className="col-md-6 col-lg-5">
                <div className="newsletter-txt white-color">
                  <h3 className="h3-sm">Stay in Touch</h3>
                  <p>
                    Eliminate barriers, empower professionals, and unleash
                    career growth potential globally.
                  </p>
                </div>
              </div>
              {/* NEWSLETTER FORM */}
              <div className="col-md-6 col-lg-7">
                <form
                  className="newsletter-form white-color"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="input-group">
                    <input
                      type="email"
                      autoComplete="off"
                      className="form-control"
                      placeholder="Ask Question"
                      required
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                    />
                    <span className="input-group-btn">
                      <a
                        href={`
                https://api.whatsapp.com/send?phone=9538861888&text=${input}`}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="btn btn-md btn-rose tra-white-hover"
                      >
                        Send Message
                      </a>
                    </span>
                  </div>
                  {/* Newsletter Form Notification */}
                  <label className="form-notification" />
                </form>
              </div>
              {/* END NEWSLETTER FORM */}
            </div>
            {/* End row */}
          </div>
          {/* End newsletter-holder */}
        </div>
        {/* End container */}
      </section>
    </Fragment>
  );
};

export default BlogListingNewsLetter1;
