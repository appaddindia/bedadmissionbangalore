import Link from "next/dist/client/link";
const Footer2 = () => {
    return (
        <footer id="footer-1" className="footer division">
            <div className="container">
                {/* FOOTER CONTENT */}
                <div className="row">
                    {/* FOOTER INFO */}
                    <div className="col-md-12 col-xl-3">
                        <div className="footer-info mb-40">
                            {/* Footer Logo */}
                            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
                            <img
                                src="images/logo.png"
                                width={172}
                                height={40}
                                alt="footer-logo"
                            />
                        </div>
                    </div>
                    {/* FOOTER PRODUCTS LINKS */}
                    <div className="col-md-4 col-xl-3">
                        <div className="footer-links mb-40">
                            {/* Footer Links */}
                            <ul className="foo-links clearfix">
                                <li>
                                    <Link href="/about">
                                        About eTreeks
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/reviews">
                                        Our Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-listing">
                                        From the Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* FOOTER COMPANY LINKS */}
                    <div className="col-md-4 col-xl-3">
                        <div className="footer-links mb-40">
                            {/* Footer Links */}
                            <ul className="clearfix">
                                <li>
                                    <Link href="/categories-list">
                                        Courses Catalog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories-list">Popular Categories</Link>
                                </li>
                                <li>
                                    <Link href="/pricing">
                                        Premium Learning
                                    </Link>
                                </li>
                            </ul>
                        </div >
                    </div >
                    {/* FOOTER COMPANY LINKS */}
                    < div className="col-md-4 col-xl-3" >
                        <div className="footer-links mb-40">
                            {/* Footer Links */}
                            <ul className="clearfix">
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Terms &amp; Privacy

                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Site Map

                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div >
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

export default Footer2;
