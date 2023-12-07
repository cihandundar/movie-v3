import React from "react";
import { Link } from "react-router-dom";

const NotFoundError = () => {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__container__title">
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
        <div className="error__container__btn">
          <button>
            <Link to="/">Return Home Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundError;
