import React from 'react';
import '../styles/UserProfile.css';

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile-container">
            <img
                className="user-profile-image"
                src="data:image/png;base64,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"
                alt="Profile"
            />
            <div className="user-data-frame">
                <div className="user-name">
                    <p>
                        {user.username}
                    </p>
                </div>
                <p  className="user-data">
                    <strong>Email:</strong> {user.email}
                </p>
                <p  className="user-data">
                    <strong>Full name:</strong> {user.name}
                </p>
                <p  className="user-data">
                    <strong>City:</strong> {user.city}
                </p>
                <p  className="user-data">
                    <strong>Phone Number:</strong> {user.phoneNumber}
                </p>
            </div>
        </div>
    );
};

export default UserProfile;

