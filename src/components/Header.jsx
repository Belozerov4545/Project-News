import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/logout');
    if (response.ok) {
      setUser(null);
      navigate('/');
    }
  };
  return (
    <nav style={{ borderRadius: '0.375rem', borderColor: '#0a53be', borderStyle: 'solid' }} className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={{
                  color: 'black', margin: 'auto', fontSize: '30px', textDecoration: 'underline', fontFamily: 'Arial', fontWeight: 'bold', marginRight: '10px',
                }}
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Project News

              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user ? (
              <>
                <li className="nav-link"><Link className="nav-link" to="/tranding_news">Trending News</Link></li>
                <li className="nav-link"><Link className="nav-link" to="/crypto_news">Crypto News</Link></li>
                <li className="nav-link"><Link className="nav-link" to="/finance_news">Finance News</Link></li>
                <li className="nav-link"><Link className="nav-link" onClick={handleLogout} to="/logout">logout</Link></li>
                <li className="nav-link"><Link className="nav-link" to="/#">{user.username}</Link></li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/registration">Registration</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/authorization">Login</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
