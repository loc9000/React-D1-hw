import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Reactbook</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/users/profile">Profile</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/explore">Explore</Link>
                  </li>
              </ul>
          </div>
      </nav>
  )
}
