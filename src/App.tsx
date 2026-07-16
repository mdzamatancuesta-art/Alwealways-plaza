import { useMemo, useState } from 'react'
import { CATEGORIES, STORES, type Category } from './data/stores'
import { isOpen } from './lib/hours'
import StoreCard from './components/StoreCard'

type Filter = Category | 'All'

export default function App() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('All')
  const [openOnly, setOpenOnly] = useState(false)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return STORES.filter((store) => {
      if (filter !== 'All' && store.category !== filter) return false
      if (openOnly && !isOpen(store)) return false
      if (!q) return true
      return (
        store.name.toLowerCase().includes(q) ||
        store.category.toLowerCase().includes(q) ||
        store.blurb.toLowerCase().includes(q)
      )
    })
  }, [query, filter, openOnly])

  const openCount = useMemo(() => STORES.filter((s) => isOpen(s)).length, [])

  return (
    <div className="app">
      <header className="hero">
        <div className="hero__inner">
          <p className="hero__eyebrow">🏬 Directory</p>
          <h1 className="hero__title">Alwealways Plaza</h1>
          <p className="hero__subtitle">
            Shops, dining, and services — all under one roof. Find a store, check
            the hours, and see what&rsquo;s open right now.
          </p>
          <div className="hero__stats">
            <span>
              <strong>{STORES.length}</strong> stores
            </span>
            <span>
              <strong>{CATEGORIES.length}</strong> categories
            </span>
            <span>
              <strong>{openCount}</strong> open now
            </span>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="controls" aria-label="Search and filter">
          <input
            type="search"
            className="search"
            placeholder="Search stores, categories…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search stores"
          />
          <label className="toggle">
            <input
              type="checkbox"
              checked={openOnly}
              onChange={(e) => setOpenOnly(e.target.checked)}
            />
            Open now only
          </label>
        </section>

        <div className="chips" role="tablist" aria-label="Filter by category">
          <button
            role="tab"
            aria-selected={filter === 'All'}
            className={`chip ${filter === 'All' ? 'chip--active' : ''}`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`chip ${filter === c ? 'chip--active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="results-count">
          {visible.length} {visible.length === 1 ? 'result' : 'results'}
        </p>

        {visible.length > 0 ? (
          <div className="grid">
            {visible.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>No stores match your search.</p>
            <button
              className="chip"
              onClick={() => {
                setQuery('')
                setFilter('All')
                setOpenOnly(false)
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <strong>Alwealways Plaza</strong>
            <p>123 Market Avenue · Open daily 7:00 AM – 11:30 PM</p>
          </div>
          <p className="footer__note">
            Store hours may vary on holidays. Call ahead to confirm.
          </p>
        </div>
      </footer>
    </div>
  )
}
