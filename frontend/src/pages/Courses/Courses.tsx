import React from 'react';
import LevelBox from '../../components/website/Courses/LevelBox.tsx';
import { LevelBoxType } from '../../components/interfaces.ts';
import { RandomDate } from '../../utils/RandomDate.ts';
import events from '../../resources/Events.json';
import { FaChalkboardTeacher, FaSchool, FaUserGraduate } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import './Courses.css';
function Courses(): React.ReactElement {
  const getDates = (): React.ReactElement[] => {
    const dates = [];
    let date = new Date();
    let maxDate = new Date(date.getTime() + (10 * 24 * 60 * 60 * 1000));
    let randomDate;
    for (let i = 0; i < 5; i++) {
      randomDate = RandomDate(date, maxDate);
      date = maxDate;
      maxDate = new Date(date.getTime() + (10 * 24 * 60 * 60 * 1000))
      dates.push((
        <div className='date' key={i}>
          <h4>{randomDate.day + " - " + randomDate.month.substring(0, 3)}</h4>
          <p>{events[Math.floor(Math.random() * 23)].title}</p>
        </div>
      ))
    }
    return dates;
  }

  return (
    <main id='courses'>
      <section id='home'>
        <h1>Welcome to<br />
          <span>Claymore University</span>
        </h1>
      </section>
      <section id='levels'>
        <LevelBox type={LevelBoxType.engineering} />
        <LevelBox type={LevelBoxType.socials} />
        <LevelBox type={LevelBoxType.laws} />
        <LevelBox type={LevelBoxType.medicine} />
      </section>
      <section id="diary">
        <h2>Calendar</h2>
        <div className="dates">
          {getDates()}
        </div>
      </section>
      <section id="alumni">
        <div className="box">
          <FaUserGraduate />
          <span className='number'>3980</span>
          <span>Students</span>
        </div>
        <div className="box">
          <FaSchool />
          <span className='number'>25</span>
          <span>Years of history</span>
        </div>
        <div className="box">
          <FaChalkboardTeacher />
          <span className='number'>458</span>
          <span>Educators</span>
        </div>
        <div className="box">
          <BsPeopleFill />
          <span className='number'>1496</span>
          <span>Virtual Students</span>
        </div>
      </section>
    </main>
  )
}

export default Courses