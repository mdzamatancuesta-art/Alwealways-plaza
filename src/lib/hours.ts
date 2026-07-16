import type { Store } from '../data/stores'

/** Convert "HH:MM" to minutes since midnight. */
function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

/** Format "HH:MM" (24h) as a friendly 12h label, e.g. "9:00 PM". */
export function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h < 12 ? 'AM' : 'PM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`
}

/**
 * Decide whether a store is open at the given moment.
 * Handles closing times past midnight (e.g. opens 12:00, closes 23:30 is same-day,
 * but a hypothetical close of "00:30" would wrap).
 */
export function isOpen(store: Store, now: Date = new Date()): boolean {
  const minutes = now.getHours() * 60 + now.getMinutes()
  const open = toMinutes(store.opens)
  const close = toMinutes(store.closes)
  if (close > open) {
    return minutes >= open && minutes < close
  }
  // Wraps past midnight.
  return minutes >= open || minutes < close
}
