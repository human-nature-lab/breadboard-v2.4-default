export function percentage (value, places = 0) {
  return (value * 100).toFixed(places) + '%'
}