import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import accounts from '../../accounts.json';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillInfoCircle, AiFillLock } from 'react-icons/ai';
import './Login.css';
interface values {
  email: string
  password: string
}

function Login(): React.ReactElement {

  const [active, setActive] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<values>();

  const SelectValue = (e: React.MouseEvent<HTMLElement>) => {
    setValue("email", e.currentTarget.getElementsByTagName("span")[0].textContent?.concat("@claymoreuni.com").toLowerCase() as string);
    setValue("password", "Abc123!")
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
          <h3>Predefined Logins</h3>
          <div className="table">
            <div className="head">
              <span>User</span>
              <span>Privileges</span>
            </div>
            <div className='body'>
              <button onClick={SelectValue}>
                <span>Student</span>
                <span>Student</span>
              </button>
              <button onClick={SelectValue}>
                <span>Teacher</span>
                <span>Teacher</span>
              </button>
              <button onClick={SelectValue}>
                <span>Advisor</span>
                <span>Advisor & Teacher</span>
              </button>
              <button onClick={SelectValue}>
                <span>Librarian</span>
                <span>Librarian & Teacher</span>
              </button>
              <button onClick={SelectValue}>
                <span>Treasurer</span>
                <span>Treasurer</span>
              </button>
              <button onClick={SelectValue}>
                <span>Admin</span>
                <span>Admin</span>
              </button>
            </div>
          </div>
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
              <input autoComplete="email" id="email" {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i })}></input>
              {/** error handler **/}
              {errors.email && <span className='notify-bubble'>!</span>}
            </div>
          </div>
          {/** Password **/}
          <div className='input-container password'>
            <label htmlFor="password"><AiFillLock /></label>
            <div className='notify-container input'>
              <input autoComplete='password' id="password" {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,32}$/ })}></input>
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