import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import accounts from '../../accounts.json';
import Logo from '../../components/Logo';

interface values {
  email: string
  password: string
}

function Auth(): React.ReactElement {

  const { register, handleSubmit, formState: { errors } } = useForm<values>();

  const Navigate = useNavigate();

  const onSubmit: SubmitHandler<values> = async (data: values) => {

    const index = accounts.findIndex(e => e.email === data.email.toLowerCase());
    if (accounts[index].email === data.email.toLowerCase() && accounts[index].password === data.password) {
      const path: string = "" + accounts[index]._id;
      Navigate(`/${path}/dashboard`, {
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
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/** Email **/}
        <div className='email'>
          <label htmlFor="email">email</label>
          <div className='notify-container input'>
            <input placeholder='youremail@here.com' id="email" {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i })}></input>
            {/** error handler **/}
            {errors.email && <span className='notify-bubble'>!</span>}
          </div>
        </div>
        {/** Password **/}
        <div className='password'>
          <label htmlFor="password">password</label>
          <div className='notify-container input'>
            <input placeholder='Password' id="password" {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,32}$/ })}></input>
            {/** error handler **/}
            {errors.password && <span className='notify-bubble'>!</span>}
          </div>
        </div>
        <a href="/#" className='passRecovery'>Forgot your password?</a>
        <input type="submit" value="Submit" className='submit' />

      </form>
    </main>
  )
}

export default Auth