import React from "react";
import Gallerybanner from "../src/components/Demo8/Gallerybanner";
import Layout from "../src/layout/Layout";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import GalleryBox from "../src/components/Selfcreated/GalleryBox";
import GalleyVed from "../src/components/Selfcreated/GalleyVed";
import Head from "next/head";

function gallery() {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"
        />
      </Head>
      <Gallerybanner />
      <Demo8Hboxes2 />
      <GalleryBox />
      <GalleyVed />
    </Layout>
  );
}

export default gallery;
