import React from 'react';
import { NavLink } from 'react-router-dom';
import './Lesson.css';
function Lessons(): React.ReactElement {
  return (
    <div className='horizontal-container'>
      <article className="why box home">
        <div className='minibox'>
          <h3>Why to choose our course</h3>
        </div>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores neque dolor labore alias, iure ipsam ipsum doloremque voluptates consequatur repellendus</p>
        <NavLink to="aboutus" className="button">Learn More about us</NavLink>
      </article>
      <article className="box home">
        <div className="minibox">
          <img src="https://img.freepik.com/foto-gratis/chica-jeans-zapatillas-negras-escribiendo-conferencia-gran-libro-texto-sentada-suelo-amigos-universidad-joven-escribiendo-mensaje-telefono-mientras-otros-estudiantes-trabajan-computadoras-portatiles_197531-3875.jpg?w=1380&t=st=1691976917~exp=1691977517~hmac=82dc845757d6c290ed2a4506fca22abd716ca75dcfb8ecde64ef97b35758e18f" alt="Image from Freepik" />
          <h3>Unlimited course</h3>
        </div>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores neque dolor labore alias</p>
      </article>
      <article className="box home">
        <div className="minibox">
          <img src="https://img.freepik.com/psd-gratis/gente-negocios-trabajando-computadora-portatil_53876-12025.jpg?w=1380&t=st=1691980084~exp=1691980684~hmac=08f986ab756354eaf3fced3e6aa0b1bdb6ccbdf68ab52c4e961bdc56f7fa25d2" alt="Image from Freepik" />
          <h3>Global Majors</h3>
        </div>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores neque dolor labore alias</p>
      </article>
      <article className="box home">
        <div className="minibox">
          <img src="https://img.freepik.com/foto-gratis/todos-sonrien-escuchan-grupo-personas-conferencia-negocios-aula-moderna-dia_146671-16288.jpg?w=1380&t=st=1691980125~exp=1691980725~hmac=6bbbe719621d468af055afa709d93244612e15762dc64be2652ebcdab452aa0d" alt="Image from Freepik" />
          <h3>Comprehensive Lesson</h3>
        </div>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores neque dolor labore alias</p>
      </article>
    </div>
  )
}

export default Lessons