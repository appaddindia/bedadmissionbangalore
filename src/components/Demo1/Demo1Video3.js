import Link from "next/link";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { VideoContext } from "../../context/video";
import { brandcarousel } from "../sliderProps";
const Demo1Video3 = () => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <section id="video-3" className="bg-scroll video-section division">
      {/* <div className="bg-scroll video-3-txt division">
                <div className="container white-color">
                    <div id="video-3-content" className="row">
                        <div className="col-lg-8 offset-lg-2 video-txt text-center">
                            <h3 className="h3-md">
                                Find the right instructor for you from over 10,000 teachers
                            </h3>
                            <p className="p-lg">
                                Feugiat primis ligula risus auctor laoreet augue egestas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-3-link mb-40 division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 video-link text-center">
                            <div className="play-btn play-btn-rose text-center">
                                <Link href="#" 
                                        onClick={() => showVideo()}
                                        className="video-popup3 video-play-button"
                                    >
                                        <span />

                                </Link>
                                <img
                                    className="img-fluid"
                                    src="images/video-3-img.jpg"
                                    alt="video-preview"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      {/* VIDEO-3 BRANDS */}
      <div className="video-3-brands division">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              {/* Title */}
              <p className="p-md">Our University Partners</p>
              {/* Brands Carousel */}
              <Swiper
                {...brandcarousel}
                className="owl-carousel brands-carousel"
              >
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                  <img
                    className="img-fluid"
                    src="images/bengaluru_city_university_logo.png"
                    alt="brand-logo"
                  />
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                  <img
                    className="img-fluid"
                    src="images/logo2.png"
                    alt="brand-logo"
                  />
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                  <img
                    style={{ width: "50%" }}
                    className="img-fluid"
                    src="images/Bengaluru_North_University_logo.png"
                    alt="brand-logo"
                  />
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                  <img
                    className="img-fluid"
                    src="images/L.png"
                    alt="brand-logo"
                  />
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                  <img
                    className="img-fluid"
                    src="images/11.png"
                    alt="brand-logo"
                  />
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
              </Swiper>
              {/* Brands Carousel */}
            </div>
            {/* End col */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </div>
      {/* END VIDEO-3 BRANDS */}
    </section>
  );
};

export default Demo1Video3;
