import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import accounts from '../accounts.json';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai';

interface values {
  email: string
  password: string
}

function Login(): React.ReactElement {

  const { register, handleSubmit, formState: { errors } } = useForm<values>();

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