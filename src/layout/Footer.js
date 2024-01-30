"use client";
import Link from "next/link";
import { useState } from "react";
const Footer = () => {
  const [input, setInput] = useState();
  return (
    <footer id="footer-2" className="footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="col-md-5 col-lg-5 col-xl-4">
            <div className="footer-info mb-40">
              {/* Footer Logo */}
              {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
              <Link href="/">
                <img
                  src="images/logo-a.png"
                  width={230}
                  height={60}
                  alt="header-logo"
                />
              </Link>
              {/* Text */}
              <p>
                We proudly uphold our commitment to shaping the future of
                education through the provision of comprehensive B.Ed. training
                programs.
              </p>
            </div>
          </div>
          {/* FOOTER PRODUCTS LINKS */}
          <div className="col-md-3 col-lg-3 col-xl-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Quick Links</h5>
              {/* Footer Links */}
              <ul className="foo-links clearfix">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/admission">B.Ed Admission</Link>
                </li>
                <li>
                  <Link href="/scholarship">Scholarship</Link>
                </li>
                <li>
                  <Link href="/contacts">Contct Us</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER COMPANY LINKS */}
          <div className="col-md-4 col-lg-4 col-xl-3">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Educational Excellence</h5>
              {/* Footer Links */}
              <ul className="clearfix">
                <li>
                  <Link href="/admission">Professional Qualification</Link>
                </li>
                <li>
                  <Link href="/admission">Specialized Knowledge</Link>
                </li>
                <li>
                  <Link href="/admission">Pedagogical Skills Development</Link>
                </li>
                <li>
                  <Link href="/admission">Practical Teaching Experience</Link>
                </li>
                <li>
                  <Link href="/admission">Diversity Comprehension</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER NEWSLETTER FORM */}
          <div className="col-md-7 col-xl-3">
            <div className="footer-form mb-20">
              {/* Title */}
              <h5 className="h5-md">Stay in Touch</h5>
              {/* Newsletter Form Input */}
              <form className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Ask Your Inquiry"
                    required
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                  />
                  <span className="input-group-btn">
                    <a
                      style={{
                        display: "flex ",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      href={`
                https://api.whatsapp.com/send?phone=9538861888&text=${input}`}
                      className="btn btn-rose tra-rose-hover"
                    >
                      Send Message
                    </a>
                  </span>
                </div>
                {/* Newsletter Form Notification */}
                <label className="form-notification" />
              </form>
            </div>
          </div>
          {/* END FOOTER NEWSLETTER FORM */}
        </div>
        {/* END FOOTER CONTENT */}
        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="row">
            {/* FOOTER COPYRIGHT */}
            <div className="col-lg-8">
              <ul className="bottom-footer-list">
                <li>
                  <a href="https://www.appaddindia.com/">
                    © B.Ed Admission in Bangalore University design by
                    appaddindia.com
                  </a>
                </li>
              </ul>
            </div>
            {/* FOOTER SOCIALS LINKS */}
            <div className="col-lg-4 text-right">
              <ul className="foo-socials text-center clearfix">
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="ico-facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="ico-twitter"
                  >
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="ico-google-plus"
                  >
                    <i className="fab fa-google-plus-g" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="ico-tumblr"
                  >
                    <i className="fab fa-tumblr" />
                  </Link>
                </li>
                {/*
									<li>href="#" class="ico-behance"><i class="fab fa-behance"></i></li>	
									<li>href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></li>									
									<li>href="#" class="ico-instagram"><i class="fab fa-instagram"></i></li>	
									<li>href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></li>
									<li>href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></li>								
									<li>href="#" class="ico-youtube"><i class="fab fa-youtube"></i></li>										
									<li>href="#" class="ico-vk"><i class="fab fa-vk"></i></li>
									<li>href="#" class="ico-yelp"><i class="fab fa-yelp"></i></li>
									<li>href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></li>
								    */}
              </ul>
            </div>
          </div>
        </div>
        {/* END BOTTOM FOOTER */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
