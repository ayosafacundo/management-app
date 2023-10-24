import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import accounts from '../accounts.json';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillInfoCircle, AiFillLock } from 'react-icons/ai';

interface values {
  email: string
  password: string
}

function Login(): React.ReactElement {

  const [active, setActive] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<values>();

  const SelectValue = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.textContent === "Abc123!") {
      setValue("password", "Abc123!")
    } else {
      setValue("email", e.currentTarget.textContent as string);
    }
  }


  const Navigate = useNavigate();

  const onSubmit: SubmitHandler<values> = async (data: values) => {

    const index = accounts.findIndex(e => e.email === data.email.toLowerCase());
    if (accounts[index].email === data.email.toLowerCase() && accounts[index].password === data.password) {
      Navigate(`/user/dashboard`, {
        replace: false,
        state: {
          logged: true,
          id: accounts[index]._id,
          user: accounts[index].username,
          type: accounts[index].type,
          privileges: accounts[index].privileges
        }
      })
    }
  }

  return (
    <main id="login">
      <div className="credentials">
        <input type="checkbox" name="moreinfo" id="moreinfo" onClick={() => setActive(!active)} />
        <label htmlFor='moreinfo'><AiFillInfoCircle /></label>
        <div className={active ? "content active" : "content inactive"}>
          <h3>Valid credentials</h3>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Password</th>
                <th>Privileges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><button onClick={SelectValue}>Student@placeholder.com</button></td>
                <td><button onClick={SelectValue}>Abc123!</button></td>
                <td>Student</td>
              </tr>
              <tr>
                <td><button onClick={SelectValue}>Teacher@placeholder.com</button></td>
                <td><button onClick={SelectValue}>Abc123!</button></td>
                <td>Teacher</td>
              </tr>
              <tr>
                <td><button onClick={SelectValue}>Advisor@placeholder.com</button></td>
                <td><button onClick={SelectValue}>Abc123!</button></td>
                <td>Advisor & Teacher</td>
              </tr>
              <tr>
                <td><button onClick={SelectValue}>Librarian@placeholder.com</button></td>
                <td><button onClick={SelectValue}>Abc123!</button></td>
                <td>Librarian & Teacher</td>
              </tr>
              <tr>
                <td><button onClick={SelectValue}>treasurer@placeholder.com</button></td>
                <td><button onClick={SelectValue}>Abc123!</button></td>
                <td>Treasurer</td>
              </tr>
              <tr>
                <td><button onClick={SelectValue}>admin@placeholder.com</button></td>
                <td><button onClick={SelectValue}>Abc123!</button></td>
                <td>Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="welcome">
        <h1>Welcome to Claymore University</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos! Magni maiores fugiat tenetur et suscipit voluptates dolores deserunt dicta ipsa quidem vitae ut quis quas aliquid repudiandae, assumenda quos?</p>
      </div>
      <div className="form">
        <h2 className="person">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/** Email **/}
          <div className='input-container email'>
            <label htmlFor="email"><BsPersonFill /></label>
            <div className='notify-container input'>
              <input id="email" {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i })}></input>
              {/** error handler **/}
              {errors.email && <span className='notify-bubble'>!</span>}
            </div>
          </div>
          {/** Password **/}
          <div className='input-container password'>
            <label htmlFor="password"><AiFillLock /></label>
            <div className='notify-container input'>
              <input id="password" {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,32}$/ })}></input>
              {/** error handler **/}
              {errors.password && <span className='notify-bubble'>!</span>}
            </div>
          </div>
          <div className="line">
            <div className="remember">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor='remember'>Remember me</label>
            </div>
            <a href="/#" className='passRecovery'>Forgot your password?</a>
          </div>
          <input type="submit" value="Log In" className='submit' />
        </form>
      </div>
    </main>
  )
}

export default Login