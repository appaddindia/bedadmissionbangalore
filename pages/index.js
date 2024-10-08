import Head from "next/head";
import Demo1About1 from "../src/components/Demo1/Demo1About1";
import Demo1About2 from "../src/components/Demo1/Demo1About2";
import Demo1About3 from "../src/components/Demo1/Demo1About3";
import Demo1Banner3 from "../src/components/Demo1/Demo1Banner3";
import Demo1Courses3 from "../src/components/Demo1/Demo1Courses3";
import Demo1Hero1 from "../src/components/Demo1/Demo1Hero1";
import Demo1News2 from "../src/components/Demo1/Demo1News2";
import Demo1Services6 from "../src/components/Demo1/Demo1Services6";
import Demo1Video3 from "../src/components/Demo1/Demo1Video3";
import Demo8Banner2 from "../src/components/Demo8/Demo8Banner2";
import HomeAbout1 from "../src/components/Home/HomeAbout1";
import HomeBanner1 from "../src/components/Home/HomeBanner1";
import HomeFeatures from "../src/components/Home/HomeFeatures";
import HomeHero from "../src/components/Home/HomeHero";
import HomeIPage from "../src/components/Home/HomeIPage";
import HomeSelect from "../src/components/Home/HomeSelect";
import Slider from "../src/components/Slider";
import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";
import Header2 from "../src/layout/Header2";
const index = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"
        />
        <meta name="title" content="Best B.Ed College in Bangalore" />
        <meta
          name="description"
          content="Looking for the best B.Ed college in Bangalore? Then you are in the right place. Feel free to contact us today."
        />
      </Head>
      {/* <Demo1Hero1 /> */}
      <Slider />
      <Demo1About1 />
      <Demo1About2 />
      <Demo1Courses3 />
      <Demo1About3 />
      <Demo1Services6 />
      <Demo1Video3 />

      <Demo8Banner2 />
      {/* <Demo1Categories3 /> */}
      {/* <Demo1Courses5 /> */}
      {/* <Demo1Reviews3 /> */}
      {/* <Demo1Courses1 /> */}
      {/* <Demo1Courses1 /> */}
      {/* <Demo1Banner5 /> */}
      {/* <Demo1About4 /> */}
      {/* <Demo1Services5 /> */}
      <Demo1News2 />
      <Demo1Banner3 />
    </Layout>
  );
};

export default index;
