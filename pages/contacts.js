import Link from "next/link";
import React from "react";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import Aboutbanner2 from "../src/components/About/Aboutbanner2";
import Demo8Hero8 from "../src/components/Demo8/Demo8Hero8";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import NewBannercontact from "../src/components/Demo8/NewBannercontact";
import Head from "next/head";
import BlogListingNewsLetter1 from "../src/components/Blog Listing/BlogListingNewsLetter1";
const contacts = () => {
  return (
    <Layout headerBtn>
      <Head>
        <meta
          name="google-site-verification"
          content="7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"
        />
        <meta name="title" content="Best B.Ed Degree College in Bangalore" />
        <meta
          name="description"
          content="We are the best B.Ed Degree College in Bangalore. Feel free to contact us to learn more and get your degree."
        />
      </Head>
      <NewBannercontact />
      {/* END HERO-8 */}
      {/* HERO BOXES-2
                  ============================================= */}
      <Demo8Hboxes2 />
      {/* <PageTitle pageTitle="Contact Us" /> */}
      <section id="contacts-2" className="wide-100 contacts-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title title-centered mb-30">
                {/* Title 	*/}
                <h2 className="h3-sm">Best B.Ed Degree College in Bangalore</h2>
              </div>
            </div>
          </div>
          <div className="contacts-2-holder">
            <div className="row d-flex align-items-center">
              {/* CONTACT BOX #1 */}
              <div className="col-lg-4">
                <div className="contact-box b-right">
                  {/* Icon */}
                  <img
                    className="img-75"
                    src="images/icons/pin.png"
                    alt="contacts-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md">DIGITAL DISTANCE EDUCATION MISSION</h5>
                  {/* Text */}
                  <p>
                    # A/8, 2nd Floor, 5th Block, 80 Feet Road, Koramangala, Opp.
                    Sapna Book House, Bangalore – 560095.
                  </p>
                  {/* Button */}
                  <div>
                    <div>
                      <a
                        href="https://www.google.com/maps/place/Digital+Distance+Education+Mission/@12.9362154,77.6138915,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae150dddd072b5:0x7d5c2cd27437beb6!8m2!3d12.9362154!4d77.6164664!16s%2Fg%2F11rk8x3kdh?entry=ttu"
                        className="btn btn-tra-grey rose-hover"
                      >
                        Find Location On Map
                      </a>
                    </div>
                    <div>
                      <a
                        style={{ marginTop: "10px" }}
                        href="mailto:digitaleducation855@gmail.com"
                        className="btn btn-tra-grey rose-hover"
                      >
                        digitaleducation855@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* CONTACT BOX #2 */}
              <div className="col-lg-4">
                <div className="contact-box b-right">
                  {/* Icon */}
                  <img
                    className="img-75"
                    src="images/icons/world-map.png"
                    alt="contacts-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md">NATIONAL DIGITAL EDUCATION MISSION</h5>
                  {/* Text */}
                  <p>
                    # 55/1, 2ND Floor, 16th Cross, 6th Phase, J.P Nagar, (Near
                    Frank’s School), Bangalore – 560078
                  </p>
                  {/* Button */}
                  <div>
                    <div>
                      <a
                        href="https://www.google.com/maps/place/National+Digital+Education/@12.9057044,77.5777403,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15b8f51bce2f:0xf9daaed0b230ef49!8m2!3d12.9057044!4d77.5803152!16s%2Fg%2F11t6xcy59p?entry=ttu"
                        className="btn btn-tra-grey rose-hover"
                      >
                        Find Location On Map
                      </a>
                    </div>
                    <div>
                      <a
                        style={{ marginTop: "10px" }}
                        href="mailto:nationaleducation24@gmail.com"
                        className="btn btn-tra-grey rose-hover"
                      >
                        nationaleducation24@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* CONTACT BOX #3 */}
              <div className="col-lg-4">
                <div className="contact-box">
                  {/* Icon */}
                  <img
                    className="img-75"
                    src="images/icons/request.png"
                    alt="contacts-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md">Need Help?</h5>
                  {/* Text */}
                  <p>Have questions about teaching and career opportunities?</p>
                  {/* Button */}
                  <div>
                    <div>
                      <a
                        href="tel:9538861888"
                        className="btn btn-tra-grey rose-hover"
                      >
                        095388 61888
                      </a>
                    </div>
                    <div>
                      <a
                        style={{ marginTop: "10px" }}
                        href="https://api.whatsapp.com/send?phone=9538861888&text=Hello"
                        className="btn btn-tra-grey rose-hover"
                      >
                        Contact via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End row */}
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="section-title title-centered mb-30 mt-60">
                {/* Title 	*/}
                <h3 className="h3-sm">CAMPUS ADDRESSES</h3>
              </div>
            </div>
          </div>
          <div className="contacts-2-holder">
            <div className="row d-flex align-items-center">
              {/* CONTACT BOX #1 */}
              <div className="col-lg-4">
                <div className="contact-box b-right">
                  {/* Icon */}
                  <img
                    className="img-75"
                    src="images/icons/pin.png"
                    alt="contacts-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md">KALANIKETAN COLLEGE OF EDUCATION</h5>
                  {/* Text */}
                  <p>
                    # 42/1, A.E.C.S Layout, Kudlu Off Hour Road, Bangalore –
                    560066
                  </p>
                  {/* Button */}
                  <div>
                    <div>
                      <a
                        href="https://www.google.com/maps/place/Kalaniketan+College+Of+Education/@12.8858598,77.6467749,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae14a970db42a3:0xcb7067837931997f!8m2!3d12.8858598!4d77.6493498!16s%2Fg%2F11nnv_1tqh?entry=ttu"
                        className="btn btn-tra-grey rose-hover"
                      >
                        Find Location On Map
                      </a>
                    </div>
                    <div>
                      <a
                        style={{ marginTop: "10px" }}
                        href="mailto:kalaniketancollege@gmail.com"
                        className="btn btn-tra-grey rose-hover"
                      >
                        kalaniketancollege@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* CONTACT BOX #2 */}
              <div className="col-lg-4">
                <div className="contact-box b-right">
                  {/* Icon */}
                  <img
                    className="img-75"
                    src="images/icons/world-map.png"
                    alt="contacts-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md">
                    FLORENCE ENGLISH INSTITUTE OF B.Ed Training
                  </h5>
                  {/* Text */}
                  <p>9th Cross, 1st Phase, J.P Nagar, Bangalore – 560078</p>
                  {/* Button */}
                  <a
                    href="https://www.google.com/maps/place/FLORENCE+ENGLISH+INSTITUTE+OF+B.ED+TRAINING/@12.9097809,77.5716884,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15701d7d0fe9:0xabeab9a5d399a083!8m2!3d12.9097809!4d77.5742633!16s%2Fg%2F11p16m3ynl?entry=ttu"
                    className="btn btn-tra-grey rose-hover"
                  >
                    Find Location On Map
                  </a>
                  <a
                    style={{ marginTop: "10px" }}
                    href="mailto:florencecollege855@gmil.com"
                    className="btn btn-tra-grey rose-hover"
                  >
                    florencecollege855@gmil.com
                  </a>
                </div>
              </div>
              {/* CONTACT BOX #3 */}
              <div className="col-lg-4">
                <div className="contact-box">
                  {/* Icon */}
                  <img
                    className="img-75"
                    src="images/icons/request.png"
                    alt="contacts-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md">Require assistance?</h5>
                  {/* Text */}
                  <p>
                    Are you curious about teaching or exploring career
                    opportunities?
                  </p>
                  {/* Button */}
                  <div>
                    <div>
                      <a
                        href="tel:9538861888"
                        className="btn btn-tra-grey rose-hover"
                      >
                        095388 61888
                      </a>
                    </div>
                    <div>
                      <a
                        style={{ marginTop: "10px" }}
                        href="https://api.whatsapp.com/send?phone=9538861888&text=Hello"
                        className="btn btn-tra-grey rose-hover"
                      >
                        Contact via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
          {/* End contacts-holder */}
        </div>
        {/* End container */}
      </section>
      {/* END CONTACTS-2 */}
      {/* GOOGLE MAP
				============================================= */}
      {/* <div id="gmap" className="map-section division">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31108.450326021237!2d77.616466!3d12.936215000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150dddd072b5%3A0x7d5c2cd27437beb6!2sDigital%20Distance%20Education%20Mission!5e0!3m2!1sen!2sin!4v1706004115402!5m2!1sen!2sin" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <BlogListingNewsLetter1 />
    </Layout>
  );
};

export default contacts;
