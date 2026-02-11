import React, { useEffect, useState } from 'react'
import './App.css'
import HotelCard from './components/HotelCard'
import Navbar from './components/Navbar'
import HotelDetail from './components/HotelDetail'

function App() {
  const [view, setView] = useState('home') // 'home' | 'hotels' | 'detail'
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)

  async function loadAllHotels() {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch('/hotels_all.json')
      if (!res.ok) throw new Error('Failed to fetch hotels')
      const data = await res.json()
      setHotels(data)
    } catch (err) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  function navigate(to) {
    setError(null)
    if (to === 'hotels') {
      loadAllHotels()
      setView('hotels')
    } else if (to === 'home') {
      setView('home')
    }
  }

  function openHotel(hotel) {
    setSelected(hotel)
    setView('detail')
  }

  return (
    <div className="app-root">
      <Navbar onNavigate={navigate} current={view} />

      {view === 'home' && (
        <header className="hero">
          <div className="container-card">
            <div className="hero-content">
              <h1 className="hero-title">Find your perfect stay</h1>
              <p className="hero-sub">Browse curated hotels with high-quality photos and clear pricing. Click any card for details or copy the image link.</p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => navigate('hotels')}>Browse Hotels</button>
                <button className="btn-ghost" onClick={() => navigate('hotels')}>See 20 hotels</button>
              </div>
            </div>

            <div className="hero-image" aria-hidden>
              <img src="https://picsum.photos/id/1015/1200/800" alt="hero" />
            </div>
          </div>
        </header>
      )}

      {view === 'hotels' && (
        <>
          {loading && <div className="status">Loading hotels…</div>}
          {error && <div className="status error">Error: {error}</div>}
          {!loading && !error && (
            <div className="list-card">
              <div className="list-card-header">
                <h2>Available Hotels</h2>
                <div className="list-sub">Showing {hotels.length} results</div>
              </div>
              <section className="hotel-grid large-cards">
                {hotels.map((h) => (
                  <HotelCard key={h.id} hotel={h} onClick={openHotel} />
                ))}
              </section>
            </div>
          )}
        </>
      )}

      {view === 'detail' && (
        <HotelDetail hotel={selected} onBack={() => setView('hotels')} />
      )}

      <footer className="app-footer">
        <div className="footer-inner">
        </div>
      </footer>
    </div>
  )
}

export default App
