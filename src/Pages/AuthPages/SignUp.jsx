import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Components/Contexts/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { signup, setUser } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restInfo } = Object.fromEntries(formData.entries());
        
        setError('');

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters and include both uppercase and lowercase letters');
            return;
        }

        signup(email, password)
            .then((userCredential) => {

                // Signed up 
                const user = userCredential.user;
                
                // setUser(user);
                // ...
                const userinfo = {
                    email,
                    ...restInfo
                }
                // save profile data in mdb
                fetch(`https://plant-heaven-server-production.up.railway.app/adduser`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userinfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.insertedId) {
                            setUser({...user, ...restInfo});
                            Swal.fire({
                                title: "User Created!",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setError(errorMessage)
                // ..
            });
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>

                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input name="name" type="text" className="input" placeholder="Name" required />
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" required />
                                    <label className="label">Image URL</label>
                                    <input name="imgurl" type="text" className="input" placeholder="Image URL" required />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" required />
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                    <p>Already have an account?
                                        <Link className='font-bold' to="/auth/log-in">Login</Link>
                                    </p>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;