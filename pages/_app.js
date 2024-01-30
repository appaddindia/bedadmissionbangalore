import Head from "next/head";
import { useEffect, useState } from "react";
import "swiper/css";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <VideoState>
      <Head>
        <meta
          name="google-site-verification"
          content="googlee9727d745293ef4b"
        />
        <title>B.Ed Admission in Bangalore University</title>
        <link
          rel="shortcut icon"
          href="images/logo.png"
          type="images/logo.png"
        />
      </Head>
      {loader && <PreLoader />}
      <div className="wsmenucontainer">
        <Component {...pageProps} />
      </div>
    </VideoState>
  );
}

export default MyApp;
