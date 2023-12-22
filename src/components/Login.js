import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignIn.css"

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (username && email) {
            const user = { username, email };
            await onLogin(user);

            navigate('/userProfile');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className='signIn'>
            <h2>Login</h2>
            <form>
                <div>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>

    );
}

export default Login;
