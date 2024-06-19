"use client";
import React, { useEffect, useState } from "react";
import CourseDetails from "../src/components/Course Details/CourseDetails";
import CourseDetailsCourses5 from "../src/components/Course Details/CourseDetailsCourses5";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import Head from "next/head";
import Demo8Hero8 from "../src/components/Demo8/Demo8Hero8";
import AboutStatistic1 from "../src/components/About/AboutStatistic-1";
import Demo1Banner3 from "../src/components/Demo1/Demo1Banner3";
import Demo1Video3 from "../src/components/Demo1/Demo1Video3";
import BlogListingNewsLetter1 from "../src/components/Blog Listing/BlogListingNewsLetter1";
import Bannerforservice from "../src/components/Demo8/Bannerforservice";

import { usePathname } from "next/navigation";
import courses from "../src/utils/servicedata";

const Bedsanskritcourses = () => {
  const pathname = usePathname();
  const [data, setData] = useState();

  useEffect(() => {
    const value = courses.find((elem) => {
      return (
        pathname.slice(1) ==
        elem.title.toLocaleLowerCase().replace(/\./g, "").replace(/ /g, "-")
      );
    });
    setData(value);
  }, [pathname]);
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"
        />
        <meta name="title" content=" B.Ed in Sanskrit in Bangalore" />
        <meta
          name="description"
          content="We have the best faculty for the best B.Ed in Sanskrit in Bangalore. What are you waiting for? Enrol today."
        />
      </Head>
      <Bannerforservice
        name={data?.title}
        discriftion={data?.description?.banner_title}
        bannerimg={data?.description?.banner_image}
      />
      <AboutStatistic1 />
      <CourseDetails dis={data?.description} />
      <Demo1Video3 />
      <BlogListingNewsLetter1 />
    </Layout>
  );
};

export default Bedsanskritcourses;
