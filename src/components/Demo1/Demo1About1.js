import React from "react";
const Demo1About1 = () => {
  return (
    <section
      style={{ backgroundImage: `url('/demo/images/about-1.jpg')` }}
      id="about-1"
      className="bg-05 about-section division"
    >
      <div className="container white-color">
        <div className="row d-flex align-items-center">
          {/* ABOUT BOX #1 */}
          <div className="col-md-4">
            <div className="abox-1 icon-xs">
              {/* Icon */}
              <span className="flaticon-004-computer" />
              {/* Text */}
              <div className="abox-1-txt">
                <h5 className="h5-md">CAREER CONSULTANCY</h5>
                <p className="p-md">
                  Get relevant career paths traced by experts to ascertain the
                  best opportunities
                </p>
              </div>
            </div>
          </div>
          {/* END ABOUT BOX #1 */}
          {/* ABOUT BOX #2 */}
          <div className="col-md-4">
            <div className="abox-1 icon-xs">
              {/* Icon */}
              <span className="flaticon-028-learning-1" />
              {/* Text */}
              <div className="abox-1-txt">
                <h5 className="h5-md">LEARNING SUPPORT</h5>
                <p className="p-md">
                  Unparalleled guidance from industry mentors, teaching
                  assistants and peers
                </p>
              </div>
            </div>
          </div>
          {/* END ABOUT BOX #2 */}
          {/* ABOUT BOX #3 */}
          <div className="col-md-4">
            <div className="abox-1 icon-xs">
              {/* Icon */}
              <span className="flaticon-032-tablet" />
              {/* Text */}
              <div className="abox-1-txt">
                <h5 className="h5-md">PLACEMENT ASSISTANCE</h5>
                <p className="p-md">
                  Make informed career choices with career counselling sessions
                  from industry experts
                </p>
              </div>
            </div>
          </div>
          {/* END ABOUT BOX #3 */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1About1;
