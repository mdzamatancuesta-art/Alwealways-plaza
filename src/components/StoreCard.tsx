import type { Store } from '../data/stores'
import { CATEGORY_ICON } from '../data/stores'
import { formatTime, isOpen } from '../lib/hours'

interface Props {
  store: Store
}

export default function StoreCard({ store }: Props) {
  const open = isOpen(store)

  return (
    <article className="store-card">
      <div className="store-card__icon" aria-hidden="true">
        {CATEGORY_ICON[store.category]}
      </div>
      <div className="store-card__body">
        <div className="store-card__head">
          <h3 className="store-card__name">{store.name}</h3>
          <span className={`badge ${open ? 'badge--open' : 'badge--closed'}`}>
            {open ? 'Open now' : 'Closed'}
          </span>
        </div>
        <p className="store-card__blurb">{store.blurb}</p>
        <dl className="store-card__meta">
          <div>
            <dt>Category</dt>
            <dd>{store.category}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>
              Floor {store.floor} · {store.unit}
            </dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>
              {formatTime(store.opens)} – {formatTime(store.closes)}
            </dd>
          </div>
          {store.phone && (
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${store.phone.replace(/[^\d]/g, '')}`}>{store.phone}</a>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  )
}
