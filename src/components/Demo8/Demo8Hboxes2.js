import React from "react";
import Counter from "../Counter";

const Demo8Hboxes2 = () => {
  return (
    <section id="hboxes-2" className="hero-boxes-section division">
      <div className="container">
        <div className="hero-boxes-holder">
          <div className="row">
            {/* STATISTIC BLOCK #1 */}
            <div className="col-md-4">
              <div className="statistic-block">
                {/* Digits */}
                <h5 className="statistic-number">
                  <Counter end={800} />
                </h5>
                {/* Text */}
                <div className="statistic-block-txt">
                  <h5 className="h5-lg">Number Students</h5>
                </div>
              </div>
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div className="col-md-4">
              <div className="statistic-block">
                {/* Digits */}
                <h5 className="statistic-number">
                  <Counter end={5} />
                </h5>
                {/* Text */}
                <div className="statistic-block-txt">
                  <h5 className="h5-lg">Total Number of Branches.</h5>
                </div>
              </div>
            </div>
            {/* STATISTIC BLOCK #3 */}
            <div className="col-md-4">
              <div className="statistic-block">
                {/* Digits */}
                <h5 className="statistic-number">
                  <Counter end={99} />%
                </h5>
                {/* Text */}
                <div className="statistic-block-txt">
                  <h5 className="h5-lg">Placement rate</h5>
                </div>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End hero-boxes-holder */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo8Hboxes2;
