import React from "react";
import About2 from "../src/components/About/About2";
import Aboutbanner2 from "../src/components/About/Aboutbanner2";
import Aboutbanner3 from "../src/components/About/Aboutbanner3";
import Aboutcategories4 from "../src/components/About/Aboutcategories4";
import Aboutcourses3 from "../src/components/About/Aboutcourses3";
import Aboutnews1 from "../src/components/About/Aboutnews1";
import Aboutreviews1 from "../src/components/About/Aboutreviews1";
import Aboutservices5 from "../src/components/About/Aboutservices5";
import AboutStatistic1 from "../src/components/About/AboutStatistic-1";
import Aboutteam2 from "../src/components/About/Aboutteam2";
import Video1 from "../src/components/Video1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import Demo1About2 from "../src/components/Demo1/Demo1About2";
import Demo8Hero8 from "../src/components/Demo8/Demo8Hero8";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import Demo8Newsletter1 from "../src/components/Demo8/Demo8Newsletter1";
import Demo1Services6 from "../src/components/Demo1/Demo1Services6";
import Demo1Video3 from "../src/components/Demo1/Demo1Video3";
import Demo1About3 from "../src/components/Demo1/Demo1About3";
import Demo1Banner3 from "../src/components/Demo1/Demo1Banner3";
import Aboutinfo from "../src/components/Selfcreated/Aboutinfo";

const about = () => {
  return (
    <Layout>
      <div className="inner-page-wrapper">
        <Demo8Hero8 />
        {/* END HERO-8 */}
        {/* HERO BOXES-2
                      ============================================= */}
        <Demo8Hboxes2 />
        {/* <Demo1About2 /> */}
        <Aboutinfo />
        <Demo1Services6 />
        <Demo1Video3 />
        {/* <About2 /> */}
        {/* End ABOUT-2 */}
        {/* STATISTIC-1
				============================================= */}
        {/* <AboutStatistic1 /> */}
        {/* END STATISTIC-1 */}
        {/* COURSES-3
				============================================= */}
        {/* <Aboutcourses3 /> */}
        {/* END COURSES-3 */}
        {/* VIDEO-1
				============================================= */}
        {/* <Video1 /> */}
        {/* END VIDEO-1 */}
        {/* CATEGORIES-4
				============================================= */}
        {/* <Aboutcategories4 /> */}
        {/* END CATEGORIES-4 */}
        {/* BANNER-2
				============================================= */}
        {/* END BANNER-2 */}
        {/* SERVICES-5
				============================================= */}
        <Aboutservices5 />
        {/* End SERVICES-5 */}
        {/* TEAM-2
				============================================= */}
        {/* <Aboutteam2 /> */}
        {/* END TEAM-2 */}
        {/* NEWS-1
				============================================= */}
        {/* <Aboutnews1 /> */}
        {/* End NEWS-1 */}
        {/* TESTIMONIALS-1
				============================================= */}
        {/* <Aboutreviews1 /> */}
        {/* END TESTIMONIALS-1 */}
        {/* BANNER-3
				============================================= */}

        <Demo1Banner3 />
      </div>
    </Layout>
  );
};

export default about;
