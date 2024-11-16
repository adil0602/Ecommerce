import React from 'react'

const Register = () => {
    return (
        <div className='bg-grey d-flex' style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <div className='container d-flex ' style={{ justifyContent: 'center', alignItems: 'centers' }}>

                <div style={{ width: '400px', marginRight: '100px' }}>
                    <h1 className='text-info'>Lamao</h1>
                    <h4>Connect With friends and the world around with you on Lamao.</h4>
                </div>

                <div>
                    <div className='d-flex bg-white' style={{ flexFlow: 'column', justifyContent: 'space-between', height: '350px', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '400px', boxShadow: `0px 0px 10px rgba(0,0,0,0.1)` }}>
                        <input type="email" placeholder='Username' style={{ marginBottom:'10px',height: '50px', borderRadius: '10px', border: '1px solid grey', fontSize: '18px' }} />
                        <input type="email" placeholder='Email' style={{ marginBottom:'10px',height: '50px', borderRadius: '10px', border: '1px solid grey', fontSize: '18px' }} />
                        <input type="password" name="" id="" placeholder='Password' style={{ marginBottom:'10px',height: '50px', borderRadius: '10px', border: '1px solid grey', fontSize: '18px' }} />
                        <input type="password" name="" id="" placeholder='Password Again' style={{ marginBottom:'10px',height: '50px', borderRadius: '10px', border: '1px solid grey', fontSize: '18px' }} />

                        <button className='btn btn-primary mb-2'>Sign up</button>
                        <button className='btn btn-success'>Login into Account</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Register
