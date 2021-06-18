import React from 'react'
import { Link } from 'react-router-dom'
import Branding from '../images/Branding.png'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* //! Home button */}
        <Link to="/" className="navbar-brand"><img src ={Branding} /></Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* //! Favourites Button */}
            <li className="nav-item active">
              <Link to="/favourites" className="nav-link" id="fav-btn"> Favourites <i className="fas fa-heart"></i> <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
