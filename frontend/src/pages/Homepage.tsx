import React from 'react';
import Event from '../components/Home/Event';
import Course from '../components/Home/Course';
import Lessons from '../components/Home/Lessons';

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
        <a href='#' className="button">See more courses</a>
      </section>
    </main>
  )
}

export default Homepage