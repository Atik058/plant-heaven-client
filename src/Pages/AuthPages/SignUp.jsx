import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Contexts/AuthContext';

const SignUp = () => {

    const { signup } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restInfo } = Object.fromEntries(formData.entries());
        console.log(email, password, restInfo)

        signup(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("firebase:", user)
                // ...
                const userinfo = {
                    email,
                    "last Sign In Time": user.metadata.lastSignInTime,
                    "creation Time": user.metadata.creationTime,
                    ...restInfo
                }
                // save profile data in mdb
                // fetch(`https://coffee-store-server-auth-production.up.railway.app/users`, {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(userinfo)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log("After adding to mdb:", data)
                //         if (data.insertedId) {
                //             Swal.fire({
                //                 title: "User Created!",
                //                 icon: "success",
                //                 draggable: true
                //             });
                //         }
                //     })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
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
                                    {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                    <p>Already have an account?
                                        {/* <Link className='font-bold' to="/auth/login">Login</Link> */}
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