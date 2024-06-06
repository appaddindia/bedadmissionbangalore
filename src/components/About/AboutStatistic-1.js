import Link from "next/link";
import React from "react";
import Counter from "../Counter";
const AboutStatistic1 = () => {
  return (
    <div id="statistic-1" className="bg-yellow statistic-section division">
      <div className="container">
        <div className="row">
          {/* STATISTIC BLOCK #1 */}
          <div className="col-md-4">
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="statistic-block"
            >
              {/* Digits */}
              <div>
                <h5 className="statistic-number">
                  <Counter end={800} />
                </h5>

                <div className="statistic-block-txt">
                  <h5 className="h5-lg">
                    Number<br></br> Students
                  </h5>
                  {/* <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Learn More &gt;
                </Link> */}
                </div>
              </div>
            </div>
          </div>
          {/* STATISTIC BLOCK #2 */}
          <div className="col-md-4">
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="statistic-block"
            >
              {/* Digits */}
              <div>
                <h5 className="statistic-number">
                  <Counter end={5} />
                </h5>

                <div className="statistic-block-txt">
                  <h5 className="h5-lg">
                    Total Number<br></br> of Branches.
                  </h5>
                  {/* <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {`Discover More &gt;`}
                </Link> */}
                </div>
              </div>
            </div>
          </div>
          {/* STATISTIC BLOCK #3 */}
          <div className="col-md-4">
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="statistic-block"
            >
              {/* Digits */}
              <div>
                <h5 className="statistic-number">
                  <Counter end={99} />%
                </h5>

                <div className="statistic-block-txt">
                  <h5 className="h5-lg">
                    Placement<br></br> rate
                  </h5>
                  {/* <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {`Discover More &gt;`}
                </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default AboutStatistic1;
