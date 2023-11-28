import React, { useEffect, useState } from 'react';
import j from '../img/k.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const Headers = () => {
  const [loginUser, setLoginUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('user'));
    if (users) {
      setLoginUser(users);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="bg-white text-black py-3 px-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img alt="Logo" className="mr-3 h-8 sm:h-9" src={j} />
          <span className="text-xl font-semibold">BHARAT PARIWAHAN</span>
        </div>
        {loginUser && <div className="hidden md:block">Welcome {loginUser.name}</div>}
        {/* Regular Menu (hidden on smaller screens) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/vehicles" className="nav-link">
            Vehicles
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          {loginUser ? (
            <>
              {loginUser.usertype === 'admin' ? (
                <Link to="/form" className="nav-link">
                  Form
                </Link>
              ) : (
                <Link to="/booking-history" className="nav-link">
                  Dashboard
                </Link>
              )}
              <div>
                <a onClick={logoutHandler} className="nav-link cursor-pointer">
                  Logout
                </a>
              </div>
            </>
            ) : (
              <>
                <div>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </div>
                <div>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </div>
              </>
          )}
        </div>

        {/* Hamburger Menu (visible on smaller screens) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-3 space-y-3">
          {loginUser && <div className="text-black">Welcome {loginUser.name}</div>}
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/vehicles" className="nav-link">
            Vehicles
          </Link>
          {loginUser ? (
            <>
              {loginUser.usertype === 'admin' ? (
                <Link to="/form" className="nav-link">
                 Form
                </Link>
              ) : (
                <Link to="/booking-history" className="nav-link">
                  Dashboard
                </Link>
              )}
              <div>
                <a onClick={logoutHandler} className="nav-link cursor-pointer">
                  Logout
                </a>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Headers;