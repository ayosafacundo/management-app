import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'

function Socials(): React.ReactElement {
  return (
    <main id='socials'>
      <section className="type">
        <h1>Socials</h1>
      </section>
      <section className="motto">
        <h2>Explore the mind and<br /><span>understand human behavior</span></h2>
      </section>
      <section className="info">
        <h3>Our Programs</h3>
        <hr />
        <div className="parts">
          <div className="option">
            <FaUserGraduate />
            <h4>Clinical psychology</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Educational psychology</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Forensic psychology</h4>
          </div>
        </div>
        <div className="parts">
          <div className="option">
            <FaUserGraduate />
            <h4>Neuropsychology</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Physiological psychology</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>School psychology</h4>
          </div>
        </div>
      </section>
      <section className="pedagogic">
        <h3>pedagogical proposal</h3>
        <hr />
        <div className="textone">
          <p>
            Claymore University is committed to providing students with a world-class education in psychology. Our pedagogical proposal is designed to prepare students for success in their careers and make a positive contribution to the world. We focus on developing students' critical thinking skills, their ability to conduct research, and their ability to communicate effectively. We also emphasize the importance of ethics and social responsibility in psychology practice.
            <br />
            <br />
            We envision our graduates to be critical thinkers who are able to analyze complex psychological problems and develop evidence-based solutions. They will also be researchers who are able to conduct rigorous and ethical research to advance the field of psychology. Additionally, they will be communicators who are able to convey their ideas clearly and concisely to both technical and non-technical audiences. Finally, they will be ethical and socially responsible psychologists who are aware of the impact of their work on individuals and society.
            <br />
            <br />
            Our mission is to provide students with a rigorous and challenging psychology education that will prepare them for success in their careers and make a positive contribution to the world. We believe that psychology is a vital discipline that helps us to understand ourselves and others. Psychology is the study of the mind and behavior, and it has a wide range of applications in our lives, from education and healthcare to business and law.
            <br />
            <br />
            Our pedagogy is based on the principles of active learning, collaborative learning, research-based learning, and ethics and social responsibility. We believe that students learn best by doing, collaborating with others, conducting research, and considering the ethical and social implications of their work.
          </p>
          <div className="img">
            <img src="https://img.freepik.com/free-photo/portrait-female-professor-teaching-school_23-2150911621.jpg?t=st=1698507643~exp=1698511243~hmac=47e98af0c4c83842907bdb2d18d0a51d6e888ea7ecfff31fdd3284c4ee72e521&w=740" alt="University teacher FreePik" />
          </div>
        </div>
        <div className="texttwo">
          <p>
            Our psychology curriculum is designed to provide students with a broad understanding of the field, as well as the opportunity to specialize in a particular area of psychology. Our courses cover a wide range of topics, including general psychology, developmental psychology, social psychology, cognitive psychology, clinical psychology, personality psychology, abnormal psychology, research methods, and statistics. We also offer a variety of elective courses that allow students to explore their interests in more depth.
            <br />
            <br />
            We use a variety of assessment methods to measure student learning, including exams, quizzes, homework assignments, papers, presentations, and research projects. We also use formative assessments, such as peer feedback and instructor feedback, to help students learn and improve throughout the semester.
            <br />
            <br />
            We use a variety of assessment methods to measure student learning, including exams, quizzes, homework assignments, projects, and presentations. We also use formative assessments, such as peer feedback and instructor feedback, to help students learn and improve throughout the semester.
            <br />
            <br />
            Our psychology faculty are experts in their fields and have a strong commitment to teaching. They are actively involved in research and have a wealth of experience to share with their students.
            <br />
            <br />
            We offer a variety of student support services to help students succeed in their psychology studies. These services include academic advising, tutoring, a writing center, and a career center. We also have a number of student organizations and clubs that provide students with opportunities to network with their peers and learn about different aspects of psychology.
            <br />
            <br />
            We are confident that our pedagogical proposal for teaching psychology will provide our students with the knowledge, skills, and values they need to succeed in their careers and make a positive contribution to the world.
          </p>
          <div className="img">
            <img src="https://img.freepik.com/premium-photo/chilling-after-school_236854-18768.jpg?w=740" alt="University students FreePik" />
          </div>
        </div>
      </section>
      <section className="end">
        <hr className='short' />
        <hr className='long' />
      </section>
    </main>
  )
}

export default Socials