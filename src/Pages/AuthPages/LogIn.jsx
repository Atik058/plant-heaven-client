import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Components/Contexts/AuthContext';
import { Link } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';

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

    const { logIn, setUser, googleLogIn } = useContext(AuthContext);

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log("user:",user)
                console.log("token:",token)
            }).catch((error) => {
                // // Handle Errors here.
                // const errorCode = error.code;
                // // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                const errorMessage = error.message;
                
                console.log(errorMessage)
                // ...
            });
    }
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
                    {/* Google */}
                    <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
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