import React from 'react'
import Logo from '../components/Logo.jsx';
import { useForm } from 'react-hook-form';
import accounts from '../accounts.json';
import { useNavigate } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';

function Auth() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    //const dispatch = useDispatch();

    const Navigate = useNavigate();

    const onSubmit = (data) => {
        // Check if inputs 
        const index = accounts.findIndex(e => e.email === data.email.toLowerCase())
        if (accounts[index].email === data.email.toLowerCase() && accounts[index].password === data.password) {
            let path = accounts[index]._id;
            Navigate(`/${path}/dashboard`, {
                replace: true,
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