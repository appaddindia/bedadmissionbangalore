import Link from "next/link";
import React from "react";
const Footer = () => {
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
                            <img
                                src="images/logo.png"
                                width={172}
                                height={40}
                                alt="footer-logo"
                            />
                            {/* Text */}
                            <p>
                                Aliquam orci a nullam tempor sapien gravida donec enim ipsum
                                porta justo velna an auctor undo congue magna laoreet augue
                                sapien
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
                                    <Link href="/about">
                                        About eTreeks
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories-list">
                                        Courses Catalog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/reviews">
                                        Our Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing">
                                        Premium Learning
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-listing">
                                        From the Blog
                                    </Link>
                                </li>
                            </ul>
                        </div >
                    </div >
                    {/* FOOTER COMPANY LINKS */}
                    < div className="col-md-4 col-lg-4 col-xl-3" >
                        <div className="footer-links mb-40">
                            {/* Title */}
                            <h5 className="h5-md">Popular Categories</h5>
                            {/* Footer Links */}
                            <ul className="clearfix">
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Business English

                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Software Development

                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Finance &amp; Accounting

                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Health and Fitness

                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Office Productivity

                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div >
                    {/* FOOTER NEWSLETTER FORM */}
                    < div className="col-md-7 col-xl-3" >
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
                                        placeholder="Your Email Address"
                                        required
                                    />
                                    <span className="input-group-btn">
                                        <button
                                            type="submit"
                                            className="btn btn-rose tra-rose-hover"
                                        >
                                            Subscribe
                                        </button>
                                    </span>
                                </div>
                                {/* Newsletter Form Notification */}
                                <label className="form-notification" />
                            </form>
                        </div>
                    </div >
                    {/* END FOOTER NEWSLETTER FORM */}
                </div >
                {/* END FOOTER CONTENT */}
                {/* BOTTOM FOOTER */}
                <div className="bottom-footer">
                    <div className="row">
                        {/* FOOTER COPYRIGHT */}
                        <div className="col-lg-8">
                            <ul className="bottom-footer-list">
                                <li>
                                    <p>© Copyright eTreeks {new Date().getFullYear()}</p>
                                </li>
                                <li>
                                    <p>
                                        <Link
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            href="tel:123456789"
                                        >
                                            508.746.9892

                                        </Link>
                                    </p>
                                </li>
                                <li>
                                    <p className="last-li">
                                        <Link
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            href="mailto:yourdomain@mail.com"
                                        >
                                            hello@domain.com

                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* FOOTER SOCIALS LINKS */}
                        <div className="col-lg-4 text-right">
                            <ul className="foo-socials text-center clearfix">
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="ico-facebook"
                                    >
                                        <i className="fab fa-facebook-f" />

                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="ico-twitter"
                                    >
                                        <i className="fab fa-twitter" />

                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="ico-google-plus"
                                    >
                                        <i className="fab fa-google-plus-g" />

                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
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
            </div >
            {/* End container */}
        </footer >
    );
};

export default Footer;
