import React, { useState } from 'react'
import '../App.css'

export default function HotelCard({ hotel, onClick }) {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)

  async function handleCopy(e) {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(hotel.image)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch (err) {
      console.error('Clipboard error', err)
    }
  }

  return (
    <article 
      className="hotel-card" 
      onClick={() => onClick && onClick(hotel)} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={hotel.name}
    >
      <div className="hotel-image-container">
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
        <div className={`hotel-overlay ${hovered ? 'visible' : ''}`}>
          <button className="overlay-btn primary-btn" onClick={(e) => { e.stopPropagation(); onClick && onClick(hotel) }}>
            View Details
          </button>
        </div>
        <div className="badge-container">
          <span className="badge badge-popular">⭐ Popular</span>
          <span className="badge badge-rating">4.8★</span>
        </div>
      </div>

      <div className="hotel-content">
        <h3 className="hotel-title">{hotel.name}</h3>
        
        <p className="hotel-location">📍 City Center • 0.5 km from station</p>
        
        <div className="hotel-features">
          <span className="feature">🛏️ Luxury Suite</span>
          <span className="feature">📶 Free WiFi</span>
          <span className="feature">🍽️ Breakfast</span>
        </div>
        
        <div className="hotel-footer">
          <div className="price-section">
            <span className="price-label">From</span>
            <span className="price-value">${hotel.price}</span>
            <span className="price-unit">/night</span>
          </div>
          <button 
            className="copy-icon-btn" 
            onClick={handleCopy}
            title="Copy image link"
          >
            {copied ? '✓' : '📋'}
          </button>
        </div>
      </div>
    </article>
  )
}
