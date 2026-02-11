import React from 'react'

export default function Navbar({ onNavigate, current }) {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <div className="nav-brand" onClick={() => onNavigate('home')}>API Hunter</div>
      </div>

      <div className="nav-right">
        <button className={`nav-link ${current === 'home' ? 'active' : ''}`} onClick={() => onNavigate('home')}>Home</button>
        <button className={`nav-link ${current === 'hotels' ? 'active' : ''}`} onClick={() => onNavigate('hotels')}>Hotels</button>
      </div>
    </nav>
  )
}
