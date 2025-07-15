import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css"; // CSS file

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>💔 404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The route you tried doesn't exist or may have been moved.</p>
        <button onClick={handleBackHome}>🔙 Back to Home</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
