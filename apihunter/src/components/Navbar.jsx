import React, { useState } from 'react'

export default function Navbar({ onNavigate, current }) {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="nav-brand" onClick={() => onNavigate('home')} role="button" tabIndex="0">
          <span className="brand-icon">🏨</span>
          <span className="brand-text">Luxestay</span>
        </div>

        {/* Center Navigation */}
        <div className="nav-links">
          <button 
            className={`nav-item ${current === 'home' ? 'active' : ''}`} 
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className={`nav-item ${current === 'hotels' ? 'active' : ''}`} 
            onClick={() => onNavigate('hotels')}
          >
            Explore Hotels
          </button>
          <button className="nav-item">Experiences</button>
          <button className="nav-item">Deals</button>
        </div>

        {/* Right Section - Search & User Menu */}
        <div className="nav-right">
          <div className={`search-box ${searchOpen ? 'active' : ''}`}>
            <input 
              type="text" 
              placeholder="Search hotels, cities..." 
              className="search-input"
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="nav-icons">
            <button className="icon-btn" title="Favorites">
              <span>❤️</span>
            </button>
            <button className="icon-btn" title="Notifications">
              <span>🔔</span>
            </button>
            <button className="icon-btn user-menu" title="Account">
              <span>👤</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
