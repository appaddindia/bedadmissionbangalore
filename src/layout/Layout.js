import { useContext, useEffect } from "react";
import VideoPopup from "../components/VideoPopup";
import { VideoContext } from "../context/video";
import { aTagClick, stickNav } from "../utils/utils";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import CustomScript from "./CustomScript";

const Layout = ({ children, footer, headerBtn }) => {
  useEffect(() => {
    aTagClick();
    window.addEventListener("scroll", stickNav);
  });
  const videoContext = useContext(VideoContext);
  const { video } = videoContext;
  return (
    <div className="page" id="page">
      <Header headerBtn={headerBtn} />
      {children}
      <CustomScript />
      {footer === 2 ? <Footer2 /> : <Footer />}
    </div>
  );
};

export default Layout;
