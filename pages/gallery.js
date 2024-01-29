import React from "react";
import Gallerybanner from "../src/components/Demo8/Gallerybanner";
import Layout from "../src/layout/Layout";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import GalleryBox from "../src/components/Selfcreated/GalleryBox";

function gallery() {
  return (
    <Layout>
      <Gallerybanner />
      <Demo8Hboxes2 />
      <GalleryBox />
    </Layout>
  );
}

export default gallery;
