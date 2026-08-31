import { useState } from 'react'
import jewelry from './jewelry'
import './App.css'

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function App() {
  const [professionalOnly, setProfessionalOnly] = useState(false)
  const [result, setResult] = useState(null)
  const [isEmpty, setIsEmpty] = useState(false)

  const handlePick = () => {
    const pool = professionalOnly
      ? jewelry.filter((piece) => piece.professional)
      : jewelry

    if (pool.length === 0) {
      setResult(null)
      setIsEmpty(true)
      return
    }

    setIsEmpty(false)
    setResult(pickRandom(pool))
  }

  return (
    <div className="app">
      <h1>Jewelry Randomizer</h1>

      <label className="toggle">
        <input
          type="checkbox"
          checked={professionalOnly}
          onChange={(e) => setProfessionalOnly(e.target.checked)}
        />
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        Professional only
      </label>

      <button className="pick-button" onClick={handlePick}>
        Pick a piece
      </button>

      <div className="result">
        {isEmpty && (
          <p className="empty">No professional pieces are tagged yet.</p>
        )}
        {result && <p className="piece-name">{result.name}</p>}
      </div>
    </div>
  )
}

export default App
