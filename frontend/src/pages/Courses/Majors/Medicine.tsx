import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import './CoursePages.css';

function Medicine(): React.ReactElement {
  return (
    <main id='medicine'>
      <section className="type">
        <h1>Medicine</h1>
      </section>
      <section className="motto">
        <h2>Healing with compassion<br /><span>learning with humility</span></h2>
      </section>
      <section className="info">
        <h3>Our Programs</h3>
        <hr />
        <div className="parts">
          <div className="option">
            <FaUserGraduate />
            <h4>Nurse</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Anesthetist</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Pharmacy technician</h4>
          </div>
        </div>
        <div className="parts">
          <div className="option">
            <FaUserGraduate />
            <h4>Radiation therapist</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Respiratory therapist</h4>
          </div>
          <div className="option">
            <FaUserGraduate />
            <h4>Surgical technologist</h4>
          </div>
        </div>
      </section>
      <section className="pedagogic">
        <h3>pedagogical proposal</h3>
        <hr />
        <div className="textone">
          <p>
            The Claymore University medical education program is committed to providing a high-quality education that prepares students for the challenges and rewards of a career in medicine. Our pedagogical proposal is based on the principles of student-centered learning, active learning, and lifelong learning.
            <br />
            <br />
            Student-centered learning places the student at the center of the learning process. In our medical education program, students are encouraged to be active participants in their own learning. They are given opportunities to develop their critical thinking skills, problem-solving skills, and communication skills. Students are also encouraged to reflect on their learning and to set their own learning goals.
            <br />
            <br />
            Active learning is a process in which students learn by doing. In our medical education program, students are provided with opportunities to engage in a variety of active learning activities, such as hands-on laboratory exercises, clinical simulations, and patient care experiences. These activities allow students to apply what they have learned in the classroom to real-world situations.
            <br />
            <br />
            Lifelong learning is the process of continuous learning throughout one's life. In our medical education program, students are encouraged to develop the skills and attitudes they need to be lifelong learners. This includes the ability to self-direct their learning, to critically evaluate new information, and to adapt to change.
            <br />
            <br />
            The medical education curriculum at Claymore University is designed to provide students with a broad and deep understanding of the biomedical sciences, clinical medicine, and public health. The curriculum is also designed to prepare students for the challenges of the modern healthcare system.
          </p>
          <div className="img">
            <img src="https://img.freepik.com/free-photo/medium-shot-young-doctor-with-tablet_23-2148302115.jpg?w=740&t=st=1698516770~exp=1698517370~hmac=019fc215e4da51f2cdfe751357339c2bd163f698e5e137c3308a0491bf19e4fc" alt="University teacher FreePik" />
          </div>
        </div>
        <div className="texttwo">
          <p>
            In addition to the core curriculum, the medical education program at Claymore University offers a variety of elective courses and extracurricular activities. These courses and activities allow students to explore their interests and develop their skills in specific areas of medicine. The program is also committed to social justice and diversity, and students are encouraged to learn about the social determinants of health and work to improve the health of all people.
            <br />
            <br />
            One of the most distinctive features of the Claymore University medical education program is its focus on interprofessional education (IPE). IPE is a collaborative approach to learning that involves students from different health professions, such as medicine, nursing, pharmacy, and physical therapy. IPE courses and activities are designed to help students develop the skills and knowledge they need to work effectively as part of a healthcare team.
            <br />
            <br />
            Another unique feature of the Claymore University medical education program is its commitment to global health. The program offers students a number of opportunities to gain experience in global health settings, through electives, research projects, and medical missions. These experiences help students develop a global perspective on health and healthcare, and they prepare them to practice medicine in a world that is increasingly interconnected.
            <br />
            <br />
            In addition to its unique features, the Claymore University medical education program is also known for its strong emphasis on clinical skills development. Students in the program have access to a variety of clinical training opportunities, including simulation-based learning, standardized patient encounters, and early clinical experiences. These opportunities allow students to develop their clinical skills in a safe and supportive environment.
            <br />
            <br />
            The Claymore University medical education program also prepares students for the rigors of the residency match process. Students in the program receive comprehensive guidance on how to choose a residency program, write a personal statement, and prepare for interviews. The program also has a strong track record of success in placing its graduates in competitive residency programs.
          </p>
          <div className="img">
            <img src="https://img.freepik.com/free-photo/pharmacist-nurse-looking-tablet-computer-analyzing-sickness-expertise_482257-23013.jpg?w=740&t=st=1698516845~exp=1698517445~hmac=e1b09e2e6dc8ba0ffec8bed49e78687f1a34fdd5420a0b5d059fa4db2c25e8d1" alt="University students FreePik" />
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

export default Medicine