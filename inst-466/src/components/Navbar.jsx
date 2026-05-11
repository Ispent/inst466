import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-accent">Decoded</span>
        <span className="brand-sub"> | AI Hiring Bias</span>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/research">Research</NavLink></li>
        <li><NavLink to="/resources">Resources</NavLink></li>
        <li><NavLink to="/videos">Videos</NavLink></li>
      </ul>
    </nav>
  )
}
