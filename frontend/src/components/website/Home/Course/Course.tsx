import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsCalendarFill, BsFillPersonFill } from 'react-icons/bs';
import { RandomDate } from '../../../../utils/RandomDate';
import events from '../../../../resources/Events.json';
import './Course.css';
function Course(): React.ReactElement {

  const today = new Date();
  const date = RandomDate(today, new Date(today.getTime() + (3 * 30 * 24 * 60 * 60 * 1000)))
  const hour = Math.floor(Math.random() * 72) + 1
  const Professors = ["Prof. Henry Smith", "Prof. Olivia Jones", "Prof. Michael Brown", "Prof. Sarah Williams", "Prof. David Johnson", "Prof. Emily Taylor", "Prof. William Miller", "Prof. Susan Garcia", "Prof. James Davis", "Prof. Anna Walker"]
  const event = events[Math.floor(Math.random() * events.length)];

  return (
    <article className="course">
      <div className="calendar">
        <BsCalendarFill />
        <span>{date.day}<br />{date.month.substring(0, 3)}</span>
      </div>
      <div className="info">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <div className="extra">
          <AiOutlineClockCircle />
          <span>{hour} hours</span>
          <BsFillPersonFill />
          <span>{Professors[Math.floor(Math.random() * 10)]}</span>
        </div>
      </div>
    </article>
  )
}

export default Course