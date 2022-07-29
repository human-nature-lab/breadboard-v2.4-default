export function currency (value) {
  const res = Math.abs(value).toFixed(2)
  if (Math.abs(value) < 0.001) {
    value = 0
  }
  if (value < 0) {
    return '-$' + res
  } else {
    return '$' + res
  }
}