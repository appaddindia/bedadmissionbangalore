import React from "react";
import Layout from "../src/layout/Layout";
import ScholarshipBanner from "../src/components/Demo8/ScholarshipBanner";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import Demo1Video3 from "../src/components/Demo1/Demo1Video3";
import BlogListingNewsLetter1 from "../src/components/Blog Listing/BlogListingNewsLetter1";
import Demo8Banner2 from "../src/components/Demo8/Demo8Banner2";
import Demo1Banner3 from "../src/components/Demo1/Demo1Banner3";
import Demo1News2 from "../src/components/Demo1/Demo1News2";
import CategoriesListCategories2 from "../src/components/Categories Listing/CategoriesListCategories2";
import CategoriesListAbout4 from "../src/components/Categories Listing/CategoriesListAbout4";
import Head from "next/head";

function scholarship() {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"
        />
      </Head>
      <ScholarshipBanner />
      <div style={{ marginTop: "-20px" }}>
        <Demo1Video3 />
      </div>
      <CategoriesListAbout4 />
      <Demo1News2 />
      {/* <Demo1Video3 /> */}
      <BlogListingNewsLetter1 />
    </Layout>
  );
}

export default scholarship;
