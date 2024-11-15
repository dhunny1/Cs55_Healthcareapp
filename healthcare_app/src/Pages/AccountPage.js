import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Log the user out
    navigate("/login"); // Redirect to login page after logout
  };

  const handleDeleteAccount = () => {
    setShowPopup(true); // Show popup message
    setTimeout(() => {
      setShowPopup(false); // Hide popup after 2 seconds
      setIsLoggedIn(false); // Log out the user after account deletion
      navigate("/register"); // Redirect to register page after deletion
    }, 2000); // Display the popup for 2 seconds
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div>
            <p>UserName: DAVE</p>
            <button onClick={handleLogout}>LogOut</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
          </div>
          {showPopup && (
            <div className="popup">
              <p>Account deleted</p>
            </div>
          )}
        </>
      ) : (
        <p>You are logged out</p>
      )}
    </div>
  );
}

export default AccountPage;
