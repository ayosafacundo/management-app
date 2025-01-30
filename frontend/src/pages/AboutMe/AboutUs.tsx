import React from 'react';
import Logo from '../../components/Logo';
import Article from '../../components/website/AboutUs/Article';
import { ProfilePicture } from '../../resources/images';
import './AboutUs.css';
function AboutUs(): React.ReactElement {
  return (
    <>
      <main id='aboutus'>
        <section className='wallpaper'>
          <Logo />
          <q cite='https://www.rootsofaction.com/quotes-about-curiosity/#:~:text=ALL%20KNOWLEDGE%20IS,Arthur%20Aufderheide'>ALL KNOWLEDGE IS CONNECTED TO ALL OTHER KNOWLEDGE. THE FUN IS IN MAKING THE CONNECTIONS.</q>
          <p>Arthur Aufderheide</p>
          <a href="#me" className="button">Learn More</a>
        </section>
        <section className='me'>
          <div className="mysection">
            <img src={ProfilePicture} alt="Ayosa Facundo's pretty face" className="img" />
            <div className="content">
              <div>
                <h3>Creator & Designer</h3>
                <h4>Ayosa, Facundo Ezequiel, Front End Developer</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odit, quod unde ab earum necessitatibus esse laborum amet assumenda debitis fugiat nisi ad harum ex? Autem consequuntur eveniet ipsam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odit, quod unde ab earum necessitatibus esse laborum amet assumenda debitis fugiat nisi ad harum ex? Autem consequuntur eveniet ipsam nesciunt?</p>
              </div>
              <a href="https://ayosafacundo.github.io/portfolio/" className="button">Portfolio</a>
            </div>
          </div>
        </section>
        <Article />
      </main>
    </>
  )
}

export default AboutUs