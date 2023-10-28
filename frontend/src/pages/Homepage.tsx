import React from 'react';
import Event from '../components/website/Home/Event';
import Course from '../components/website/Home/Course';
import Lessons from '../components/website/Home/Lessons';
import { NavLink } from 'react-router-dom';
import { IoIosMailOpen } from 'react-icons/io';

function Homepage(): React.ReactElement {
  return (
    <main id='Homepage'>
      <section id="home" className='section-1'>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <h1>Providing interdisciplinary <br /><span className='bold'>Online & Presential Courses and tests</span></h1>
        <hr />
        <div className="events">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </section>
      <section id="studywus" className="section-2">
        <h2>Study with Us</h2>
        <hr />
        <span className='subtitle'>culpa eveniet explicabo laudantium laboriosam eligendi totam facere voluptas officia veritatis tempora error maiores, dolore blanditiis! Eaque?</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui impedit odio nihil quaerat? Repudiandae corrupti quae voluptas obcaecati, assumenda culpa in deserunt, odio reprehenderit exercitationem nisi explicabo ad aliquid laborum. Repudiandae corrupti quae voluptas obcaecati</p>
        <Lessons />
      </section>
      <section id="courses" className='section-3'>
        <h2>Our courses</h2>
        <hr />
        <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam laboriosam, incidunt modi minima</span>
        <div className="courses">
          <div className="couple">
            <Course />
            <Course />
          </div>
          <div className="couple">
            <Course />
            <Course />
          </div>
          <div className="couple">
            <Course />
            <Course />
          </div>
        </div>
        <NavLink to='courses' className="button">See more courses</NavLink>
      </section>
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
    </main>
  )
}

export default Homepage