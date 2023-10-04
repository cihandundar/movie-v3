import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <Link to="#">
            <h2>Cinemarine</h2>
          </Link>
        </div>
        <ul>
          {user ? (
            <ul>
              <li className="link">
                <AiOutlineHome /> <Link to="/">Home</Link>
              </li>
              <li className="link">
                <PiTelevisionSimpleBold /> <Link to="movie">Movies</Link>
              </li>
              <li className="link">
                <button onClick={onLogout} className="btn">
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="link">
                <Link to="/login">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li className="link">
                <Link to="/register">
                  <FaUser /> Register
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
