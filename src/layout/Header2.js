import Link from "next/link";
import React from "react";
const Header2 = () => {
    return (
        <header id="header" className="header white-menu navbar-dark">
            <div className="header-wrapper">
                {/* MOBILE HEADER */}
                <div className="wsmobileheader clearfix">
                    <Link href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            id="wsnavtoggle"
                            className="wsanimated-arrow"
                        >
                            <span />

                    </Link>
                    <span className="smllogo smllogo-black">
                        <img
                            src="images/logo.png"
                            width={172}
                            height={40}
                            alt="mobile-logo"
                        />
                    </span>
                    <span className="smllogo smllogo-white">
                        <img
                            src="images/logo-white.png"
                            width={172}
                            height={40}
                            alt="mobile-logo"
                        />
                    </span>
                </div>
                {/* NAVIGATION MENU */}
                <div className="wsmainfull menu clearfix">
                    <div className="wsmainwp clearfix">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
                        <div className="desktoplogo">
                            <Link href="/demo-1"
                                className="logo-black">
                                <img
                                    src="images/logo.png"
                                    width={172}
                                    height={40}
                                    alt="header-logo"
                                />

                            </Link>
                        </div>
                        <div className="desktoplogo">
                            <Link href="/demo-1"
                                className="logo-white">
                                <img
                                    src="images/logo-white.png"
                                    width={172}
                                    height={40}
                                    alt="header-logo"
                                />

                            </Link>
                        </div>
                        {/* MAIN MENU */}
                        <nav className="wsmenu clearfix">
                            <ul className="wsmenu-list">
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        About

                                    </Link>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true">
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Pages <span className="wsarrow" />

                                    </Link>
                                    <div className="wsmegamenu clearfix halfmenu">
                                        <div className="container-fluid">
                                            <div className="row">
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list left-link-list">
                                                    <li>
                                                        <Link href="/about">
                                                            About Us Page
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/categories-list">

                                                            Categories
                                                            Listing

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/category-details">

                                                            Category Details

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/courses-list">

                                                            Courses Listing

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/course-details">

                                                            Course Details

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/teachers-list">

                                                            Teachers Listing

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/teacher-profile">

                                                            Teacher Profile

                                                        </Link>
                                                    </li>
                                                </ul>
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                                    <li>
                                                        <Link href="/become-a-teacher">

                                                            Become A Teacher

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pricing">

                                                            Pricing Plans
                                                            Page

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/reviews">
                                                            Reviews Page
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/faqs">
                                                            FAQs Page
                                                        </Link>
                                                    </li >
                                                    <li>
                                                        <Link href="/blog-listing">
                                                            Blog Listing
                                                        </Link>
                                                    </li >
                                                    <li>
                                                        <Link href="/single-post">
                                                            Single Post
                                                        </Link>
                                                    </li >
                                                    <li>
                                                        <Link href="/contacts">
                                                            Contacts Page
                                                        </Link>
                                                    </li >
                                                </ul >
                                            </div >
                                        </div >
                                    </div >
                                </li >
                                {/* END DROPDOWN MENU */}
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true">
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Categories
                                        <span className="wsarrow" />

                                    </Link>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                Development
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                Finance &amp; Accounting
                                            </Link>
                                        </li >
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                IT &amp; Software
                                            </Link>
                                        </li >
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                Office Productivity
                                            </Link>
                                        </li >
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                Photography
                                            </Link>
                                        </li >
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                Math &amp; Science
                                            </Link>
                                        </li >
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                Languages
                                            </Link>
                                        </li >
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                Marketing
                                            </Link>
                                        </li >
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                Health &amp; Fitness
                                            </Link>
                                        </li >
                                    </ul >
                                </li >
                                {/* END DROPDOWN MENU */}
                                {/* MEGAMENU */}
                                <li aria-haspopup="true">
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Mega Menu
                                        <span className="wsarrow" />

                                    </Link>
                                    <div className="wsmegamenu clearfix">
                                        <div className="container">
                                            <div className="row">
                                                {/* MEGAMENU QUICK LINKS */}
                                                <div className="col-md-12 col-lg-3">
                                                    {/* Title */}
                                                    <h3 className="title">
                                                        Top 5 Online Courses:
                                                    </h3>
                                                    <ul className="link-list clearfix">
                                                        <li>
                                                            <Link href="#"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                            >
                                                                English for
                                                                Tourism

                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                            >
                                                                Python
                                                                Programming
                                                                - Working
                                                                with Lists
                                                                and Files

                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                            >
                                                                Computer
                                                                Networking -
                                                                Wired and
                                                                Wireless
                                                                Networks

                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                            >
                                                                Marketing
                                                                Management -
                                                                Capturing
                                                                Marketing
                                                                Insights

                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                            >
                                                                iOS App
                                                                Development:
                                                                Data
                                                                Persistence
                                                                with Core
                                                                Data

                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* END MEGAMENU QUICK LINKS */}
                                                {/* MEGAMENU FEATURED NEWS */}
                                                <div className="col-md-12 col-lg-5">
                                                    {/* Title */}
                                                    <h3 className="title">
                                                        Featured News:
                                                    </h3>
                                                    {/* Image */}
                                                    <div className="fluid-width-video-wrapper mb-15">
                                                        <img
                                                            src="images/blog/featured-news.jpg"
                                                            alt="featured-news"
                                                        />
                                                    </div>
                                                    {/* Text */}
                                                    <h5 className="h5-md">
                                                        <Link href="/single-post">

                                                            Study smart and
                                                            save time with
                                                            these 5 tips

                                                        </Link>
                                                    </h5>
                                                    <p className="wsmwnutxt">
                                                        Porta semper lacus
                                                        cursus, feugiat primis
                                                        ultrice in ligula risus
                                                        auctor tempus feugiat
                                                        dolor impedit magna...
                                                    </p>
                                                </div>
                                                {/* END MEGAMENU FEATURED NEWS */}
                                                {/* MEGAMENU LATEST NEWS */}
                                                <div className="col-md-12 col-lg-4">
                                                    {/* Title */}
                                                    <h3 className="title">
                                                        Latest News:
                                                    </h3>
                                                    {/* Latest News */}
                                                    <ul className="latest-news">
                                                        {/* Post #1 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-1.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <Link href="/single-post">

                                                                    Etiam
                                                                    sapien
                                                                    risus
                                                                    ante
                                                                    auctor
                                                                    tempus
                                                                    an
                                                                    accumsan...

                                                                </Link>
                                                                <p>
                                                                    18 hours ago
                                                                </p>
                                                            </div>
                                                        </li>
                                                        {/* Post #2 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-2.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <Link href="/single-post">

                                                                    Blandit
                                                                    tempor
                                                                    sapien
                                                                    ipsum,
                                                                    porta
                                                                    risus
                                                                    auctor
                                                                    justo...

                                                                </Link>
                                                                <p>
                                                                    Feb 17, 2020
                                                                </p>
                                                            </div>
                                                        </li>
                                                        {/* Post #3 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-3.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <Link href="/single-post">

                                                                    Cursus
                                                                    risus an
                                                                    auctor
                                                                    risus
                                                                    laoreet
                                                                    undo
                                                                    auctor
                                                                    varius...

                                                                </Link>
                                                                <p>
                                                                    Feb 07, 2020
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul >
                                                </div >
                                                {/* END MEGAMENU LATEST NEWS */}
                                            </div >
                                            {/* End row */}
                                        </div >
                                        {/* End container */}
                                    </div >
                                    {/* End wsmegamenu */}
                                </li >
                                {/* END MEGAMENU */}
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple">
                                    <Link href="/blog-listing">
                                        Blog
                                    </Link>
                                </li >
                                {/* SIMPLE NAVIGATION LINK */}
                                < li className="nl-simple">
                                <Link href="/contacts">
                                    Contacts
                                </Link >
                            </li >
                            {/* DROPDOWN MENU 
						          	<li aria-haspopup="true">
						          		href="#" class="lang-select">
							          		<img src="images/icons/flags/uk.png" alt="flag-icon" /> En <span class="wsarrow"></span>
							          	
	            						<ul class="sub-menu last-sub-menu">
						           			<li aria-haspopup="true">href="#"><img src="images/icons/flags/germany.png" alt="flag-icon" /> Deutch</li>
						           			<li aria-haspopup="true">href="#"><img src="images/icons/flags/spain.png" alt="flag-icon" /> Español</li>
						           			<li aria-haspopup="true">href="#"><img src="images/icons/flags/france.png" alt="flag-icon" /> Français</li>
						              		<li aria-haspopup="true">href="#"><img src="images/icons/flags/italy.png" alt="flag-icon" /> Italiano</li>
						              		<li aria-haspopup="true">href="#"><img src="images/icons/flags/russia.png" alt="flag-icon" /> Русский</li>
						              		<li aria-haspopup="true">href="#"><img src="images/icons/flags/china.png" alt="flag-icon" /> 简体中文</li>
						           		</ul>
								    </li> */}
                            {/* HEADER BUTTON */}
                            <li className="nl-simple">
                                <Link href="/pricing"
                                    className="btn btn-rose tra-black-hover last-link">
                                    Get Started

                                </Link>
                            </li>
                        </ul >
                    </nav >
                    {/* END MAIN MENU */}
                </div >
            </div >
            {/* END NAVIGATION MENU */}
        </div >
    {/* End header-wrapper */ }
        </header >
    );
};

export default Header2;
