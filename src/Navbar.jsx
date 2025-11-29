import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="top-nav">
                <h5 className="lang">Language | Search...</h5>

                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Surgeries</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button className="login-btn">LOGIN</button>
            </nav>

         <div className="header">
    <img src="src/hospin.png" className="logo" />

    <div className="header-right">
        <div className="toll">
            <p>Toll Free No</p>
            <h4>1800 666 888</h4>
        </div>

        <button className="btn appoint">Appointment</button>
        <button className="btn loc">Location</button>
    </div>
</div>

            <div className="special-nav">
                <ul>
                    <li>ORTHOPEDICS</li>
                    <li>CARDIOLOGY</li>
                    <li>LAPAROSCOPY</li>
                    <li>PROCTOLOGY</li>
                    <li>GASTROENTEROLOGY</li>
                    <li>ONCOLOGY</li>
                    <li>COSMETIC</li>
                    <li>INFERTILITY</li>
                    <li>GYNECOLOGY</li>
                    <li>VASCULAR</li>
                    <li>ENT</li>
                    <li>OPTHAL</li>
                    <li>VIEW ALL</li>
                </ul>
            </div>

            <div className="description">
                <div>
                    <h5>Consult Top Doctors Online</h5>
                    <h2>
                        Find Specialized Doctors <br /> & Get Quality Treatment
                    </h2>
                    <p>
                        Usually we try to do as much as possible so that our patients do not
                        have any difficulties and receive prompt treatment.
                    </p>

                    <button className="btn number">1800 666 888</button>
                    <button className="btn book">Book Free Consultation</button>
                </div>

                <img src="src/Dr.png" className="doctor-img" alt="Doctors" />
            </div>

          <div className="specialities-box">
    <div className="specialities">
        <h2>Our Specialities</h2>

        <ul>
            <li>Hair Transplant</li>
            <li>Spine</li>
            <li>Bypass</li>
            <li>Hip Replacement</li>
        </ul>

        <button className="btn view">View More</button>
    </div>
</div>
            <div className="workflow">
                <h6>How HospiOne Works</h6>
                <h3>A Simplified Procedure To <br /> Cure Your Health</h3>

                <div className="steps">
                    <div>
                        <img src="src/registration.png" alt="" />
                        <p>Registration</p>
                    </div>

                    <div>
                        <img src="src/specialist.png" alt="" />
                        <p>Talk To Specialist</p>
                    </div>

                    <div>
                        <img src="src/book_appointemnt.png" alt="" />
                        <p>Book Appointment</p>
                    </div>

                    <div>
                        <img src="src\Choosedr.png" alt="" />
                        <p>Choose A Doctor</p>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="f-one">
                    <img src="src/hospin.png" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis.
                    </p>
                    <h6>1800 222 666</h6>
                    <h6>info@hospione.com</h6>
                </div>

                <div className="f-two">
                    <h4>INFORMATION</h4>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Media</li>
                        <li>Blog</li>
                        <li>Privacy Policy</li>
                        <li>FAQ's</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className="f-three">
                    <h4>PATIENT CARE</h4>
                    <ul>
                        <li>Find a Doctor</li>
                        <li>Book Physical Appointment</li>
                        <li>Patient Testimonials</li>
                        <li>FAQ's</li>
                    </ul>
                </div>

                <div className="f-four">
                    <h4>CENTERS OF EXCELLENCE</h4>
                    <ul>
                        <li>Orthopedics</li>
                        <li>Cardiology</li>
                        <li>Laparoscopy</li>
                        <li>Proctology</li>
                        <li>Gastroenterology</li>
                        <li>Oncology</li>
                        <li>Cosmetic</li>
                        <li>Infertility</li>
                    </ul>
                </div>

                <div className="f-five">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li>Ask a Query</li>
                        <li>Give Your Feedback</li>
                        <li>Hospi One Lifeline</li>
                        <li>Become A Arogyasathi</li>
                        <li>Career</li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Navbar;
