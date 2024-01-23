import Link from "next/link";
import React from "react";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import Aboutbanner2 from "../src/components/About/Aboutbanner2";
import Demo8Hero8 from "../src/components/Demo8/Demo8Hero8";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import NewBannercontact from "../src/components/Demo8/NewBannercontact";
const contacts = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
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
                <div className="section-title title-centered mb-60">
                  {/* Title 	*/}
                  <h3 className="h3-sm">Need Help? Get in Touch</h3>
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
                    <h5 className="h5-md">Our Location</h5>
                    {/* Text */}
                    <p>
                      5TH BLOCK, A/8, 2nd Floor, 20th Main Rd, opp. Sapna Book
                      House, Koramangala, Bengaluru, Karnataka 560 095
                    </p>
                    {/* Button */}
                    <Link
                      href="/contacts"
                      className="btn btn-tra-grey rose-hover"
                    >
                      Find Location On Map
                    </Link>
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
                    <h5 className="h5-md">Partnership Request</h5>
                    {/* Text */}
                    <p>
                      Please contact us with your question and needs, our team
                      would be delighted to assist you promptly
                    </p>
                    {/* Button */}
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href="mailto:yourdomain@mail.com"
                      className="btn btn-tra-grey rose-hover"
                    >
                      info@digitaleducationmission
                    </Link>
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
                    <p>
                      Have questions about teaching and career opportunities?
                    </p>
                    {/* Button */}
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href="mailto:yourdomain@mail.com"
                      className="btn btn-tra-grey rose-hover"
                    >
                      095388 61888
                    </Link>
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
        <div id="gmap" className="map-section division">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="google-map">
                  {/* Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31108.450326021237!2d77.616466!3d12.936215000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150dddd072b5%3A0x7d5c2cd27437beb6!2sDigital%20Distance%20Education%20Mission!5e0!3m2!1sen!2sin!4v1706004115402!5m2!1sen!2sin" />
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </div>
      </div>
    </Layout>
  );
};

export default contacts;
