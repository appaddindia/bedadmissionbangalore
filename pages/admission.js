import React from "react";
import Layout from "../src/layout/Layout";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import AdmissionBanner from "../src/components/Demo8/AdmissionBanner";
import BlogListingNews3 from "../src/components/Blog Listing/BlogListingNews3";
import BlogListingNewsLetter1 from "../src/components/Blog Listing/BlogListingNewsLetter1";
import Demo1Video3 from "../src/components/Demo1/Demo1Video3";

function admission() {
  return (
    <Layout>
      <AdmissionBanner />
      <Demo8Hboxes2 />

      <BlogListingNews3 />
      <Demo1Video3 />
      <BlogListingNewsLetter1 />
    </Layout>
  );
}

export default admission;
