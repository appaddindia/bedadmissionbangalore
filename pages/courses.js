"use client";
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
import Head from "next/head";
import CustomScript from "../src/layout/CustomScript";
import Bannerforservice from "../src/components/Demo8/Bannerforservice";

function courses() {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"
        />
      </Head>
      <Bannerforservice
        name="courses"
        discriftion="Top B.Ed courses Bangalore University"
        bannerimg="images/young-man-pointiing-education-icon_112554-1033.avif"
      />
      <AboutStatistic1 />
      <Aboutcourses3 />

      <Demo1Video3 />
      <Demo1Banner3 />
    </Layout>
  );
}

export default courses;
