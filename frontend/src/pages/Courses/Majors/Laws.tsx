import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import './CoursePages.css';

function Laws(): React.ReactElement {
  return (
    <main id='laws'>
      <section className="type">
        <h1>Law</h1>
      </section>
      <section className="motto">
        <h2>Iustitia Veritas Aequitas<br /><span>Justice, Truth, Equality.</span></h2>
      </section>
      <section className="info">
        <h3>Our Programs</h3>
        <hr />
        <div className="parts">
          <div className="option">
            <FaUserGraduate />
            <h4>Doctor of Juridical Science</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Master of Dispute Resolution</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Master of Laws</h4>
          </div>
        </div>
        <div className="parts">
          <div className="option">
            <FaUserGraduate />
            <h4>Paralegal Certification</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Legal Certificate</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Master of Legal Studies</h4>
          </div>
        </div>
      </section>
      <section className="pedagogic">
        <h3>pedagogical proposal</h3>
        <hr />
        <div className="textone">
          <p>
            The Claymore University School of Law is committed to providing its students with a rigorous and comprehensive legal education that will prepare them for success in the practice of law. We believe that the best way to achieve this goal is through a pedagogical approach that emphasizes critical thinking, problem-solving, and effective communication.
            <br />
            <br />
            At Claymore University School of Law, we believe that critical thinking, problem-solving, and effective communication are essential skills for success in the practice of law. Our pedagogical approach is designed to teach our students these skills through a variety of teaching methods, including:
            <ul>
              <li>Case analysis: We use case analysis to teach our students how to read and understand case law, identify the relevant issues, and apply the law to new factual situations.</li>
              <li>Hypothetical fact patterns: We use hypothetical fact patterns to test our students' understanding of the law and their ability to apply the law to new and challenging situations.</li>
              <li>Simulations: We offer a variety of simulations, such as mock trials, negotiations, and client interviews, to give our students the opportunity to practice their legal skills in a real-world setting.</li>
              <li>Legal writing and briefing: We teach our students how to write clear, concise, and persuasive legal memoranda and briefs.</li>
              <li>Moot court: Our moot court program gives our students the opportunity to argue cases before a panel of judges.</li>
              <li>Negotiation: We teach our students how to negotiate effectively, both in and out of the courtroom.</li>
            </ul>
          </p>
          <div className="img">
            <img src="https://img.freepik.com/free-photo/woman-library_144627-30882.jpg?w=740&t=st=1698516896~exp=1698517496~hmac=04bce32bd6ec43b72e13780a02c7ffbffcc23698e07d80822744dd4ebd34fa96" alt="University student FreePik" />
          </div>
        </div>
        <div className="texttwo">
          <p>
            In addition to these specific teaching methods, we also emphasize critical thinking, problem-solving, and effective communication throughout our curriculum. For example, in our first-year Constitutional Law course, students learn about the basic principles of constitutional law through a combination of case analysis, hypothetical fact patterns, and simulations. In our second-year Evidence course, students learn about the rules of evidence through a combination of case analysis, hypothetical fact patterns, and moot court. And in our third-year Civil Procedure course, students learn about the rules of civil procedure through a combination of case analysis, hypothetical fact patterns, and negotiation exercises.
            <br />
            <br />
            We believe that the best way to learn the law is by doing. That's why our pedagogical approach is so focused on experiential learning opportunities. By participating in case analysis, hypothetical fact patterns, simulations, moot court, and negotiation exercises, our students develop the critical thinking, problem-solving, and effective communication skills they need to be successful lawyers.
            <br />
            <br />
            In addition to our focus on experiential learning, we also believe that it is important for our students to have a strong foundation in the core areas of law. That's why all of our students are required to take courses in constitutional law, civil procedure, criminal law, evidence, and contracts. In addition to these core courses, we also offer a variety of elective courses that allow our students to explore their interests and develop specialized knowledge.
            <br />
            <br />
            Finally, we believe that it is important for our students to have access to clinical experience. That's why we offer a variety of clinical opportunities, such as internships with judges and law firms, and externships with government agencies and non-profit organizations. Clinical experience gives our students the opportunity to gain practical experience in the law and to develop the skills they need to be successful lawyers.
            <br />
            <br />
            We are committed to providing our students with a law school education that will prepare them for success in the practice of law and in life. Our pedagogical approach is designed to teach our students the critical thinking, problem-solving, and effective communication skills they need to be successful in any legal career.
          </p>
          <div className="img">
            <img src="https://img.freepik.com/free-photo/portrait-elegant-old-man_23-2148831081.jpg?w=740&t=st=1698516875~exp=1698517475~hmac=76d53ab7f371848b83f7a03b8d3ee0654991b283bc414721283bd08f0a72d09b" alt="University teacher FreePik" />
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

export default Laws