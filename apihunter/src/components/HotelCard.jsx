import React, { useState } from 'react'
import '../App.css'

export default function HotelCard({ hotel, onClick }) {
  const [copied, setCopied] = useState(false)

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
    <article className="hotel-card" onClick={() => onClick && onClick(hotel)} aria-label={hotel.name}>
      <div className="hotel-media">
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
        <div className="hotel-media-overlay">
          <span className="hotel-badge">Top pick</span>
          <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
        </div>
      </div>

      <div className="hotel-body">
        <div className="hotel-row">
          <h3 className="hotel-name">{hotel.name}</h3>
          <div className="hotel-price">${hotel.price}</div>
        </div>
        <p className="hotel-meta">Free wifi • Breakfast available • 4.5 rating</p>
        <div className="hotel-actions">
          <button className="btn-small" onClick={(e) => { e.stopPropagation(); onClick && onClick(hotel) }}>View</button>
          <button className="btn-outline" onClick={(e) => { e.stopPropagation(); handleCopy(e) }}>{copied ? 'Copied' : 'Copy Image'}</button>
        </div>
      </div>
    </article>
  )
}
