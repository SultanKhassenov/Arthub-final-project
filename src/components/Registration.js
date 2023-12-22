import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = ({ onRegister, onLogin }) => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (username && email && name && city && phoneNumber) {
            const newUser = { username, email, name, city, phoneNumber };
            onRegister(newUser);

            await onLogin(newUser);

            navigate('/userProfile');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className='signIn'>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Full name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <select
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option value="">...</option>
                        <option value="city1">Almaty</option>
                        <option value="city2">Astana</option>
                        <option value="city3">Aktau</option>
                        <option value="city4">Atyrau</option>
                        <option value="city5">Aktobe</option>
                        <option value="city6">Karagandy</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Registration;
