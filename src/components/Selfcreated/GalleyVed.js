import Link from "next/link";
import React from "react";
const GalleyVed = () => {
  const menu = [
    {
      link: "ggg1.jpg",
    },
  ];
  return (
    <section
      style={{ marginTop: "0px", paddingTop: "0px" }}
      id="courses-3"
      className="bg-lightgrey wide-60 courses-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">VIDEO GALLERY</h3>

              {/* Button */}
              <div className="title-btn">
                <Link
                  // href="/courses-list"
                  href="/contacts"
                  className="btn btn-tra-grey rose-hover"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* COURSES HOLDER */}
        <div className="row courses-grid">
          {/* COURSE #1 */}
          {menu.map((elem) => {
            return (
              <>
                <div id={elem.id} className="col-md-6 col-lg-6 col-xl-6">
                  <div className="cbox-1">
                    <div>
                      {/* Image */}

                      <div class="thumb">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/gQRtcTwiQLI?si=gxIrfJ9oAzi8hGP9"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      {/* Text */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* END COURSE #1 */}
          {/* COURSE #2 */}

          {/* END COURSE #8 */}
        </div>
        {/* END COURSES HOLDER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default GalleyVed;
