import React, { useState } from 'react'
import '../App.css'

export default function HotelDetail({ hotel, onBack }) {
  const [copied, setCopied] = useState(false)

  if (!hotel) return null

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(hotel.image)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch (err) {
      console.error('Clipboard error', err)
    }
  }

  return (
    <div className="hotel-detail-page">
      <button className="back-btn" onClick={onBack}>← Back to Hotels</button>
      
      <div className="detail-container">
        <div className="detail-image-section">
          <img src={hotel.image} alt={hotel.name} className="detail-image" />
          <div className="detail-image-overlay">
            <button className="copy-detail-btn" onClick={handleCopy}>
              📋 {copied ? 'Copied!' : 'Copy Image Link'}
            </button>
          </div>
        </div>

        <div className="detail-content">
          <div className="detail-header">
            <div>
              <h1 className="detail-title">{hotel.name}</h1>
              <div className="detail-rating">⭐ 4.8 (2,450 reviews) • 📍 City Center</div>
            </div>
            <button className="detail-favorite-btn">❤️</button>
          </div>

          <div className="detail-price-section">
            <div className="price-info">
              <span className="detail-price-label">Price per night</span>
              <div className="detail-price-display">
                <span className="currency">$</span>
                <span className="amount">{hotel.price}</span>
              </div>
            </div>
            <button className="btn-large primary">Book Now</button>
          </div>

          <div className="detail-features">
            <h3>Amenities & Features</h3>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🛏️</span>
                <span>Luxury Suite</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📶</span>
                <span>Free WiFi</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🍽️</span>
                <span>Breakfast Included</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏊</span>
                <span>Swimming Pool</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏋️</span>
                <span>Fitness Center</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🍷</span>
                <span>Restaurant</span>
              </div>
            </div>
          </div>

          <div className="detail-description">
            <h3>About This Hotel</h3>
            <p>
              Experience luxury and comfort at its finest. This premium hotel offers world-class amenities, 
              exceptional service, and a prime location in the heart of the city. Perfect for both business 
              and leisure travelers seeking an unforgettable stay.
            </p>
          </div>

          <div className="detail-policies">
            <h3>Important Info</h3>
            <ul>
              <li>✓ Free cancellation until 24 hours before arrival</li>
              <li>✓ No prepayment needed</li>
              <li>✓ Complimentary breakfast daily</li>
              <li>✓ Free airport transfer available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
