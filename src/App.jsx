import { useState } from 'react'
import jewelry, { TAGS } from './jewelry'
import './App.css'

const NO_JEWELRY = { id: 'no-jewelry', name: 'No jewelry today', special: true }
const SEASONAL_TAGS = TAGS.filter((tag) => tag.seasonal).map((tag) => tag.key)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function App() {
  const [selectedTags, setSelectedTags] = useState(() => new Set())
  const [result, setResult] = useState(null)

  const toggleTag = (key) => {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  const handlePick = () => {
    const matches = jewelry.filter((piece) => {
      const matchesChecked = [...selectedTags].every((tag) =>
        piece.tags.includes(tag),
      )
      if (!matchesChecked) return false

      return !piece.tags.some(
        (tag) => SEASONAL_TAGS.includes(tag) && !selectedTags.has(tag),
      )
    })
    setResult(pickRandom([...matches, NO_JEWELRY]))
  }

  return (
    <div className="app">
      <h1>Jewelry Randomizer</h1>

      <div className="tag-filters">
        {TAGS.map((tag) => (
          <label className="toggle" key={tag.key}>
            <input
              type="checkbox"
              checked={selectedTags.has(tag.key)}
              onChange={() => toggleTag(tag.key)}
            />
            <span className="toggle-track">
              <span className="toggle-thumb" />
            </span>
            {tag.label}
          </label>
        ))}
      </div>

      <button className="pick-button" onClick={handlePick}>
        Pick a piece
      </button>

      <div className="result">
        {result && (
          <p className={result.special ? 'piece-name special' : 'piece-name'}>
            {result.name}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
