import React from 'react';
import { AiFillRocket, AiFillStar } from 'react-icons/ai';
import { GiBrain } from 'react-icons/gi';
import { FaWrench } from 'react-icons/fa';
import * as resources from '../../../resources/images';


function Article(): React.ReactElement {
  return (
    <section className="path">
      <article className="pathmodule start grey">
        <div className="route">
          <AiFillRocket className='icon reverse' />
          <div className="verticalline"></div>
        </div>
      </article>
      <article className='pathmodule'>
        <div className="route">
          <AiFillStar className='icon' />
          <div className="verticalline"></div>
        </div>
        <div className="content">
          <h3>Why a university website?</h3>
          <div className='text'>
            <p>I wanted to create a big, all-in-one webapp that featured all the necessary skills I would need to learn and polish, but at the same time it needed to be easy enough for me to do without suffering from burnout. I started by brainstorming ideas, and then I searched for online resources to help me. Eventually, I found a website called sharpen.design, which is a challenge creator for designers. I created a challenge for myself to design a management app for UC Berkeley, but I modified it to create a homepage and entire campus for a fictitious university.
            </p>
            <img src={resources.idea} alt="Sharpen.design Challenge" />
          </div>
        </div>
      </article>
      <article className='pathmodule'>
        <div className="route">
          <GiBrain className='icon' />
          <div className="verticalline"></div>
        </div>
        <div className="content">
          <h3>The start of the journey</h3>
          <div className='text'>
            <p>I created the repository on February 24th, 2023, and I worked on it on and off for six months before committing to a redesign and changing from Create-react-app to Vite + Typescript for scalability. At the start of the project, I didn't know most of the technologies I would need, but that didn't stop me. I figured that I would eventually need to learn everything myself, so I decided to start by making something I liked. Despite the challenges, I was determined to complete the project. I knew that I would learn a lot along the way, and I was excited to see what I could create.
            </p>
            <p>My first proof of concept was crude and bad-looking, but I had accepted that I was awful at designing a website. One of the biggest challenges I faced was learning React-Router-Dom. The library was in the middle of migrating from v5 to v6.4, and the documentation was difficult to understand. I started using the library with trial and error, copying errors to Stack Overflow and learning step by step what everything did. With some help from YouTube, I managed to get the necessary private route working. It was clumsy and stupid at best, but it worked and that's progress.
            </p>
          </div>
        </div>
      </article>
      <article className='pathmodule'>
        <div className="route">
          <FaWrench className='icon' />
          <div className="verticalline"></div>
        </div>
        <div className="content">
          <h3>The dawn of problems</h3>
          <div className='text'>
            <p>The first problem I faced was the ambitious nature of the project. I always try to think a few steps ahead and start working on what I think would be the best way to step forward. This means that I often try to optimize the code before making it work, or try to modularize something that I think will be needed in the future, only to not use it more than once. I find myself often working on something only to scrap it after a few hours of work. I eventually learned to break down the project into smaller tasks and to focus on one task at a time. This helped me to stay on track and to make progress.
            </p>
            <p>The second problem was an aesthetic problem: I didn't know the first thing about designing a website to be "pretty". My designs were simple and focused on what was easier to make. I eventually learned to design more aesthetically pleasing websites by studying the work of other designers and by practicing regularly.
            </p>
          </div>
        </div>
      </article>
      <article className="pathmodule end">
        <div className="route">
          <div className="verticalline"></div>
          <AiFillRocket className='icon reverse' />
        </div>
      </article>
    </section>
  )
}

export default Article