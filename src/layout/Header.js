import Link from "next/link";
import React, { useState } from "react";
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
      <div className="header-wrapper">
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
          <div className="wsmainwp clearfix">
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
              <Link href="d#hero-3" className="logo-white">
                <img
                  src="images/logo-a.png"
                  width={230}
                  height={60}
                  alt="header-logo"
                />
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix" style={{ maxHeight: "700px" }}>
              <div className="overlapblackbg" onClick={() => onClick()} />
              <ul className="wsmenu-list">
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="/">Home</Link>
                </li>
                <li className="nl-simple">
                  <Link href="/about">About</Link>
                </li>
                {/* DROPDOWN MENU */}

                {/* END DROPDOWN MENU */}
                {/* DROPDOWN MENU */}

                {/* END DROPDOWN MENU */}
                {/* MEGAMENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="/admission">B.Ed Admission</Link>
                </li>
                <li className="nl-simple">
                  <Link href="/scholarship">Scholarship</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="/contacts">Contacts</Link>
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
