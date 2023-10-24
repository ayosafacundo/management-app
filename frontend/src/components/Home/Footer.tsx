import React from 'react';
import { IoIosMailOpen } from 'react-icons/io';
import { RiFacebookBoxFill, RiTwitterLine, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';


function Footer(): React.ReactElement {
  return (
    <footer id="HomeFooter">
      <section className='registry'>
        <div>
          <span>ONE STOP OnlInE CoUrSe SolUtiOnS</span>
          <h5>Where yout Needs and Courses Meet</h5>
        </div>
        <NavLink to='login' className='button'>Register Now</NavLink>
      </section>
      <section className="emailregister">
        <div>
          <IoIosMailOpen />
          <h5>NEVER MISS IMPORTANT UPDATES & promotions</h5>
        </div>
        <form action="POST">
          <input type="email" placeholder='Enter your email address here...' />
          <input type="submit" value="Submit" />
        </form>
      </section>
      <section className="last">
        <div className="nav">
          <NavLink to="/management-app" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>Courses</NavLink>
          <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active" : ""}>About Claymore</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
        </div>
        <div className="copynsocials">
          <div className="copyright">
            <Logo />
            <span>All lefts reserved.</span>
          </div>
          <div className="socials">
            <span>Connect with us</span>
            <div className="links">
              <a href="https://www.x.com" rel='noopener noreferrer' target='_blank'><RiTwitterLine /></a>
              <a href="https://www.facebook.com" rel='noopener noreferrer' target='_blank'><RiFacebookBoxFill /></a>
              <a href="https://www.youtube.com" rel='noopener noreferrer' target='_blank'><RiYoutubeFill /></a>
              <a href="https://www.whatsapp.com" rel='noopener noreferrer' target='_blank'><RiWhatsappFill /></a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer