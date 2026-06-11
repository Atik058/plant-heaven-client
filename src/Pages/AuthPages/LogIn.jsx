import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Components/Contexts/AuthContext';
import { Link } from 'react-router';

const LogIn = () => {

    const [error, setError] = useState('');
    // const location = useLocation();
    // const navigate = useNavigate();
    const getErrorMessage = (code) => {
        switch (code) {
            case 'auth/user-not-found':
                return 'No account found with this email';
            case 'auth/invalid-credential':
                return 'Incorrect password or email';
            case 'auth/too-many-requests':
                return 'Too many attempts. Try again later';
            default:
                return 'Login failed. Please try again';
        }
    };

    const { logIn, setUser } = useContext(AuthContext);
    const handleLogin = (e) => {
        setError('');
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                // navigate(`${location.state ? location.state : "/"}`);
                // ...
            })
            .catch((error) => {
                const message = getErrorMessage(error.code);
                console.log(error.code)
                setError(message);
            });
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>

                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" />
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button type="submit" className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                        <p>Dont have an account?
                            <Link to="/auth/sign-up">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;