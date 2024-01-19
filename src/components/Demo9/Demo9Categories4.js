import Link from "next/link";
import React from "react";

const Demo9Categories4 = () => {
    return (
        <section id="categories-4" className="wide-60 categories-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-80">
                            {/* Title 	*/}
                            <h3 className="h3-sm">Our Course Categories</h3>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                                primis libero tempus, blandit posuere and ligula varius magna a
                                porta
                            </p>
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="/categories-list"
                                    className="btn btn-tra-grey rose-hover">
                                    View All Categorie

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* CATEGORIE BOX #1 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-blue">
                                    <img
                                        src="images/icons/categories/development.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Computer Science</h5>
                                <p>341 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            Artificial Intelligence,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Internet of Things,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Algorithms &amp; Data Structures,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Information,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Technology,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Blockchain &amp; Cryptocurrency,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Quantum Computing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Machine Learning,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            DevOps,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Network &amp; Security,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Core IT Skills
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #1 */}
                    {/* CATEGORIE BOX #2 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-green">
                                    <img
                                        src="images/icons/categories/money.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Business</h5>
                                <p>428 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            Human Resources,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Project Management,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Entrepreneurship,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Tourism &amp; Hospitality,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Finance,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Sales,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Communications,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            E-Commerce,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Leadership &amp; Management,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Business Strategy
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #2 */}
                    {/* CATEGORIE BOX #3 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-red">
                                    <img
                                        src="images/icons/categories/design.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Lifestyle</h5>
                                <p>268 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            Arts &amp; Crafts,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Food &amp; Beverage,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Beauty &amp; Makeup,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Home Improvement,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Travel,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Pet Care &amp; Training,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Gaming,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Photography,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Skilled Trades
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #3 */}
                    {/* CATEGORIE BOX #4 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-teal">
                                    <img
                                        src="images/icons/categories/human-mind.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Humanities</h5>
                                <p>417 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            History,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Literature,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Foreign Language,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Grammar &amp; Writing,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Philosophy,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Religion,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            ESL,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Culture,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Sports,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Journalism,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Ethics
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #4 */}
                    {/* CATEGORIE BOX #5 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-yellow">
                                    <img
                                        src="images/icons/categories/chip.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Programming</h5>
                                <p>284 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            Mobile Development,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Web Development,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Game Development,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Software Testing,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Programming Languages,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Databases,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Cloud Computing,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Software Development,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Development Tools
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #5 */}
                    {/* CATEGORIE BOX #6 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-violet">
                                    <img
                                        src="images/icons/categories/heartbeat.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Health &amp; Medicine</h5>
                                <p>179 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            Anatomy,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Veterinary Science,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Care Nursing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Nutrition &amp; Wellness,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Disease &amp; Disorders,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Public Health,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Mental Health,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Fitness,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Yoga,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Meditation,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Safety &amp; First Aid,
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #6 */}
                    {/* CATEGORIE BOX #7 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-orange">
                                    <img
                                        src="images/icons/categories/calculator.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Mathematics</h5>
                                <p>369 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            Discrete Math,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Statistics &amp; Probability,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Spatial Analysis,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Algebra &amp; Geometry,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Foundations of Mathematics,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Calculus,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Trigonometry,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Probability
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #7 */}
                    {/* CATEGORIE BOX #8 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-lightgreen">
                                    <img
                                        src="images/icons/categories/gear.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Engineering</h5>
                                <p>219 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            Chemical Engineering,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Civil Engineering,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Electrical Engineering,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Mechanical Engineering,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Robotics,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Nanotechnology,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Manufacturing,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Textiles,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Structural Engineering
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #8 */}
                    {/* CATEGORIE BOX #9 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="c4-box">
                            {/* Icon */}
                            <div className="c4-box-ico mb-15 clearfix">
                                <div className="c4-ico bg-skyblue">
                                    <img
                                        src="images/icons/categories/science.png"
                                        alt="category-icon"
                                    />
                                </div>
                                <h5 className="h5-md">Social Sciences</h5>
                                <p>370 Courses</p>
                            </div>
                            {/* List */}
                            <div className="c4-box-txt">
                                <ul className="c4-box-list">
                                    <li>
                                        <Link href="/courses-list">
                                            Sociology,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Economics,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Psychology,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Anthropology,
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            Political Science,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Urban Planning,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Human Rights,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Law,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Sustainability,
                                        </Link>
                                    </li >
                                    <li>
                                        <Link href="/courses-list">
                                            Public Policy
                                        </Link>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* END CATEGORIE BOX #9 */}
                </div >
                {/* End row */}
                {/* ALL COURSES BUTTON */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="all-courses-btn">
                            <Link href="/categories-list"
                                className="btn btn-md btn-tra-grey rose-hover">
                                Browse All Courses

                            </Link>
                        </div>
                    </div>
                </div>
            </div >
            {/* End container */}
        </section >
    );
};

export default Demo9Categories4;
