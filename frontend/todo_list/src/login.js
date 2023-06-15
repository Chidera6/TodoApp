import React from 'react'

function Login(){
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white -3 rounded w-25'>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email or Username' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Password</label>
                        <input type="password" placeholder='Enter Password'className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
                    <button className='btn btn-default border w-100 bg-light'>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login 