import Link from "next/link";
import React, { useState } from "react";
import courses from "../utils/servicedata";
const Header = ({ headerBtn }) => {
  const [openSubMen, setOpenSubMen] = useState(null);
  const onClick = () => {
    const body = document.querySelector("body");
    body.classList.toggle("wsactive");
  };
  const activeFun = (name) => setOpenSubMen(name === openSubMen ? "" : name);
  const activeLi = (name) =>
    name === openSubMen ? "d-block" : "d-md-block d-sm-none";
  const iconChange = (name) => (name === openSubMen ? "ws-activearrow" : "");

  return (
    <header id="header" className="header white-menu navbar-dark">
      <div className="container">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <Link
            href="#"
            onClick={() => onClick()}
            id="wsnavtoggle"
            className="wsanimated-arrow"
          >
            <span />
          </Link>
          <span className="smllogo smllogo-black">
            <img
              src="images/logo-a.png"
              width={172}
              height={40}
              alt="header-logo"
            />
          </span>
          <span className="smllogo smllogo-white">
            <img
              src="images/logo-a.png"
              width={172}
              height={40}
              alt="header-logo"
            />
          </span>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix" id="wsmainfull">
          <div className="container clearfix">
            {/* LOGO IMAGE */}
            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
            <div className="desktoplogo">
              <Link href="/" className="logo-black">
                <img
                  src="images/logo-a.png"
                  width={230}
                  height={60}
                  alt="header-logo"
                />
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/" className="logo-white">
                <img
                  src="images/logo-a.png"
                  width={230}
                  height={60}
                  alt="header-logo"
                />
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix big" style={{ maxHeight: "700px" }}>
              <div className="overlapblackbg" onClick={() => onClick()} />
              <ul className="wsmenu-list">
                {/* SIMPLE NAVIGATION LINK */}

                <li className="nl-simple">
                  <Link
                    style={{ paddingLeft: "5px", paddingRight: "5px" }}
                    href="/"
                    onClick={() => onClick()}
                  >
                    Home
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link
                    style={{ paddingLeft: "5px", paddingRight: "5px" }}
                    href="/about"
                    onClick={() => onClick()}
                  >
                    About
                  </Link>
                </li>
                {/* DROPDOWN MENU */}

                {/* END DROPDOWN MENU */}
                {/* DROPDOWN MENU */}

                {/* END DROPDOWN MENU */}
                {/* MEGAMENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li aria-haspopup="true" className="nl-simple">
                  <Link href="/courses">
                    courses <span className="wsarrow" />
                  </Link>
                  <div className="wsmegamenu clearfix halfmenu">
                    <div className="container-fluid">
                      <div className="row">
                        {/* Links */}
                        <ul className="row  link-list left-link-list">
                          {courses.map((elem) => {
                            return (
                              <>
                                <li className="col-lg-6 col-md-12 col-xs-12">
                                  <Link href={elem.description.link}>
                                    {elem.title}
                                  </Link>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-haspopup="true">
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    More <span className="wsarrow" />
                  </Link>
                  <div
                    style={{ width: "20%" }}
                    className="wsmegamenu clearfix halfmenu"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        {/* Links */}
                        <ul className="col-lg-12 col-md-12 col-xs-12 link-list left-link-list">
                          <li>
                            <Link
                              style={{
                                paddingLeft: "5px",
                                paddingRight: "5px",
                              }}
                              href="/admission"
                              onClick={() => onClick()}
                            >
                              B.Ed Admission
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{
                                paddingLeft: "5px",
                                paddingRight: "5px",
                              }}
                              href="/scholarship"
                              onClick={() => onClick()}
                            >
                              Scholarship
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{
                                paddingLeft: "5px",
                                paddingRight: "5px",
                              }}
                              href="/gallery"
                              onClick={() => onClick()}
                            >
                              Gallery
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li
                  style={{ paddingLeft: "5px", paddingRight: "5px" }}
                  className="nl-simple"
                >
                  <Link href="/contacts" onClick={() => onClick()}>
                    Contacts
                  </Link>
                </li>
                <li className="nl-simple">
                  <a
                    href="https://api.whatsapp.com/send?phone=9538861888&text=Hello"
                    className="btn btn-md btn-rose tra-white-hover"
                  >
                    Start Learning Now!
                  </a>
                </li>
                {/* DROPDOWN MENU */}

                {/* END DROPDOWN MENU */}
                {/* HEADER BUTTON 
								    <li class="nl-simple" >
								    	<a href="#" class="btn btn-rose tra-black-hover last-link">Get Started</a>
								    </li> */}
              </ul>
            </nav>

            <nav
              className="wsmenu clearfix small"
              style={{ maxHeight: "100vh" }}
            >
              <div className="overlapblackbg" onClick={() => onClick()} />
              <ul className="wsmenu-list">
                {/* SIMPLE NAVIGATION LINK */}

                <li className="nl-simple">
                  <Link
                    style={{ paddingLeft: "20px", paddingRight: "5px" }}
                    href="/"
                    onClick={() => onClick()}
                  >
                    Home
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link
                    style={{ paddingLeft: "20px", paddingRight: "5px" }}
                    href="/about"
                    onClick={() => onClick()}
                  >
                    About
                  </Link>
                </li>

                <li className="nl-simple">
                  <Link
                    style={{ paddingLeft: "20px", paddingRight: "5px" }}
                    href="/courses"
                    onClick={() => onClick()}
                  >
                    courses
                  </Link>
                </li>
                {courses.map((elem) => {
                  return (
                    <>
                      <li className="nl-simple">
                        <Link
                          style={{ paddingLeft: "40px", paddingRight: "5px" }}
                          href={elem.description.link}
                          onClick={() => onClick()}
                        >
                          {elem.title}
                        </Link>
                      </li>
                    </>
                  );
                })}

                {/* DROPDOWN MENU */}

                {/* END DROPDOWN MENU */}
                {/* DROPDOWN MENU */}

                {/* END DROPDOWN MENU */}
                {/* MEGAMENU */}
                {/* SIMPLE NAVIGATION LINK */}

                <li aria-haspopup="true">
                  <div
                    style={{ width: "20%" }}
                    className="wsmegamenu clearfix halfmenu"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        {/* Links */}
                        <ul className="col-lg-12 col-md-12 col-xs-12 link-list left-link-list">
                          <li>
                            <Link
                              style={{
                                paddingLeft: "5px",
                                paddingRight: "5px",
                              }}
                              href="/admission"
                              onClick={() => onClick()}
                            >
                              B.Ed Admission
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{
                                paddingLeft: "5px",
                                paddingRight: "5px",
                              }}
                              href="/scholarship"
                              onClick={() => onClick()}
                            >
                              Scholarship
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{
                                paddingLeft: "5px",
                                paddingRight: "5px",
                              }}
                              href="/gallery"
                              onClick={() => onClick()}
                            >
                              Gallery
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link
                    style={{ paddingLeft: "20px", paddingRight: "5px" }}
                    href="/admission"
                    onClick={() => onClick()}
                  >
                    B.Ed Admission
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link
                    style={{ paddingLeft: "20px", paddingRight: "5px" }}
                    href="/scholarship"
                    onClick={() => onClick()}
                  >
                    Scholarship
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link
                    style={{ paddingLeft: "20px", paddingRight: "5px" }}
                    href="/gallery"
                    onClick={() => onClick()}
                  >
                    Gallery
                  </Link>
                </li>
                <li
                  style={{ paddingLeft: "2px", paddingRight: "5px" }}
                  className="nl-simple"
                >
                  <Link href="/contacts" onClick={() => onClick()}>
                    Contacts
                  </Link>
                </li>
                <li
                  style={{ position: "sticky", bottom: "0px" }}
                  className="nl-simple"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=9538861888&text=Hello"
                    className="btn btn-md btn-rose tra-white-hover"
                  >
                    Start Learning Now!
                  </a>
                </li>
                {/* DROPDOWN MENU */}

                {/* END DROPDOWN MENU */}
                {/* HEADER BUTTON 
								    <li class="nl-simple" >
								    	<a href="#" class="btn btn-rose tra-black-hover last-link">Get Started</a>
								    </li> */}
              </ul>
            </nav>

            {/* END MAIN MENU */}
          </div>
        </div>
        {/* END NAVIGATION MENU */}
      </div>
      {/* End header-wrapper */}
    </header>
  );
};

export default Header;
