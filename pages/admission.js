import React from "react";
import Layout from "../src/layout/Layout";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import AdmissionBanner from "../src/components/Demo8/AdmissionBanner";
import BlogListingNews3 from "../src/components/Blog Listing/BlogListingNews3";
import BlogListingNewsLetter1 from "../src/components/Blog Listing/BlogListingNewsLetter1";
import Demo1Video3 from "../src/components/Demo1/Demo1Video3";
import Head from "next/head";

function admission() {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"
        />
      </Head>
      <AdmissionBanner />
      <Demo8Hboxes2 />

      <BlogListingNews3 />
      <Demo1Video3 />
      <BlogListingNewsLetter1 />
    </Layout>
  );
}

export default admission;
