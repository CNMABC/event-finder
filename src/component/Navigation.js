import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">CA</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/favourites" className="nav-link"><i className="fas fa-heart"></i> <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
