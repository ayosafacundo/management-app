import React from 'react';
import { IoIosMailOpen } from 'react-icons/io';
import { RiFacebookBoxFill, RiTwitterLine, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';
import Logo from '../Logo';
import { Link } from 'react-router-dom';


function Footer(): React.ReactElement {
  return (
    <footer id="HomeFooter">
      <section className='registry'>
        <div>
          <span>ONE STOP OnlInE CoUrSe SolUtiOnS</span>
          <h5>Where yout Needs and Courses Meet</h5>
        </div>
        <a href='#' className='button'>Register Now</a>
      </section>
      <section className="emailregister">
        <div>
          <IoIosMailOpen />
          <h5>NEVER MISS IMPORTANT UPDATES & PROMOTIONS</h5>
        </div>
        <form action="POST">
          <input type="email" placeholder='Enter your email address here...' />
          <input type="submit" value="Submit" />
        </form>
      </section>
      <section className="last">
        <div className="nav">
          <Link to="#home">Home</Link>
          <Link to="#studywus">Online Course</Link>
          <Link to="#courses">Physical Course</Link>
          <Link to="/aboutus">About Claymore</Link>
          <Link to="/login">Login</Link>
          <Link to="#">Register</Link>
        </div>
        <div className="copynsocials">
          <div className="copyright">
            <Logo />
            <span>All lefts reserved.</span>
          </div>
          <div className="socials">
            <span>Connect with us</span>
            <div className="links">
              <a href="www.x.com" rel='noopener noreferrer' target='_blank'><RiTwitterLine /></a>
              <a href="www.x.com" rel='noopener noreferrer' target='_blank'><RiFacebookBoxFill /></a>
              <a href="www.x.com" rel='noopener noreferrer' target='_blank'><RiYoutubeFill /></a>
              <a href="www.x.com" rel='noopener noreferrer' target='_blank'><RiWhatsappFill /></a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer