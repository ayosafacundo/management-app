import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import './CoursePages.css';

function Engineering(): React.ReactElement {
  return (
    <main id='engineering'>
      <section className="type">
        <h1>Engineering</h1>
      </section>
      <section className="motto">
        <h2>Developing creativity and ingenuity<br /><span>through hands-on training</span></h2>
      </section>
      <section className="info">
        <h3>Our Programs</h3>
        <hr />
        <div className="parts">
          <div className="option">
            <FaUserGraduate />
            <h4>Software Engineering</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Biomedical Engineering</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Mechanical Engineering</h4>
          </div>
        </div>
        <div className="parts">
          <div className="option">
            <FaUserGraduate />
            <h4>Nanotechnology Engineering</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Biomechanics</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Mechatronics</h4>
          </div>
        </div>
      </section>
      <section className="pedagogic">
        <h3>pedagogical proposal</h3>
        <hr />
        <div className="textone">
          <p>
            Claymore University is committed to providing students with a high-quality engineering education that will prepare them for success in their careers and make a positive contribution to the world. Our pedagogical proposal for teaching engineering is based on the principles of active learning, collaborative learning, problem-based learning, and diversity and inclusion. We believe that this approach will provide our students with the knowledge, skills, and values they need to succeed in the 21st century.
            <br />
            <br />
            We envision our graduates to be technically competent and able to apply their knowledge and skills to solve real-world problems. They will also be critical thinkers who are able to analyze complex problems and develop innovative solutions. Additionally, they will be effective communicators who are able to convey their ideas clearly and concisely to both technical and non-technical audiences. Finally, they will be ethical and socially responsible engineers who are aware of the impact of their work on society and the environment.
            <br />
            <br />
            Our mission is to provide students with a rigorous and challenging engineering education that will prepare them for success in their careers and make a positive contribution to the world. We believe that engineering is a vital discipline that plays a crucial role in our society. Engineers design, build, and maintain the infrastructure that we rely on every day, from our roads and bridges to our energy systems and communication networks. They also develop new technologies that improve our lives and help us to solve global challenges such as climate change and disease.
            <br />
            <br />
            Our pedagogy is based on the belief that students learn best by doing. Our courses are designed to engage students in active learning experiences such as hands-on projects, problem-solving exercises, and design challenges. We also believe that students learn well from each other. Our courses encourage students to collaborate on projects and assignments. We also provide opportunities for students to learn from experienced engineers through internships and mentorship programs.
          </p>
          <div className="img">
            <img src="https://img.freepik.com/free-photo/soccer-players-huddling-celebrating-victory-together_23-2150821452.jpg?t=st=1698429445~exp=1698433045~hmac=4bc42aef08f869407206245746e5fae88228b46ba91a84bbea802cbe1e707a53&w=740" alt="University Students FreePik" />
          </div>
        </div>
        <div className="texttwo">
          <p>
            In addition, we believe that the best way to learn engineering is by solving real-world problems. Our courses incorporate problem-based learning activities that give students the opportunity to apply their knowledge and skills to solve complex engineering challenges. Finally, we believe that diversity and inclusion are essential for engineering innovation. We are committed to creating a welcoming and inclusive environment for all students, regardless of their background or identity.
            <br />
            <br />
            Our engineering curriculum is designed to provide students with a broad understanding of the fundamentals of engineering, as well as the opportunity to specialize in a particular area of engineering. Our courses cover a wide range of topics, including mathematics and science, engineering design, engineering analysis, and engineering ethics and social responsibility. We also offer a variety of elective courses that allow students to explore their interests in more depth.
            <br />
            <br />
            We use a variety of assessment methods to measure student learning, including exams, quizzes, homework assignments, projects, and presentations. We also use formative assessments, such as peer feedback and instructor feedback, to help students learn and improve throughout the semester.
            <br />
            <br />
            Our engineering faculty are experts in their fields and have a strong commitment to teaching. They are actively involved in research and have a wealth of experience to share with their students.
            <br />
            <br />
            We offer a variety of student support services to help students succeed in their engineering studies. These services include academic advising, tutoring, a writing center, and a career center. We also have a number of student organizations and clubs that provide students with opportunities to network with their peers and learn about different aspects of engineering.
            <br />
            <br />
            We are committed to providing our students with a world-class engineering education. We believe that our pedagogical proposal is one of the most innovative and effective in the country. We are confident that our graduates will be well-prepared for success in their careers and in life.
          </p>
          <div className="img">
            <img src="https://img.freepik.com/free-photo/portrait-male-professor-teaching-school_23-2150911407.jpg?t=st=1698467919~exp=1698471519~hmac=a129d8ff7e66c3b552f37dc316cac04424afb067402520bd223f458d78adf62d&w=740" alt="University Teacher FreePik" />
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

export default Engineering