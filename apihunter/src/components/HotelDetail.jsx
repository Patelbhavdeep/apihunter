import React from 'react'
import '../App.css'

export default function HotelDetail({ hotel, onBack }) {
  if (!hotel) return null

  return (
    <div className="hotel-detail">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="hotel-detail-card">
        <div className="hotel-detail-image-wrap">
          <img src={hotel.image} alt={hotel.name} className="hotel-detail-image" />
        </div>
        <div className="hotel-detail-body">
          <h2>{hotel.name}</h2>
          <p className="hotel-price-large">${hotel.price}</p>
          <p className="hotel-desc">A comfortable stay with modern amenities and great location.</p>
        </div>
      </div>
    </div>
  )
}
