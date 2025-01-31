import React from 'react'
import events from '../../../../resources/Events.json';
import { RandomDate } from '../../../../utils/RandomDate';
import './Event.css';
function Event(): React.ReactElement {

  const today = new Date()
  const date = RandomDate(today, new Date(today.getTime() + (8 * 30 * 24 * 60 * 60 * 1000)));
  const event = events[Math.floor(Math.random() * events.length)];

  return (
    <div className='event-component'>
      <span>{"" + date.day + " " + date.month + " " + date.year}</span>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <a href="#">Learn more</a>
    </div>
  )
}

export default Event