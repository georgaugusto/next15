export function getMaxMinHistoryData(list: Record<string, string>) {
  const values = Object.entries(list).map(([timestamp, value]) => ({
    timestamp: Number(timestamp),
    value: Number(value),
  }))

  const maxEntry = values.reduce((prev, current) =>
    prev.value > current.value ? prev : current,
  )
  const minEntry = values.reduce((prev, current) =>
    prev.value < current.value ? prev : current,
  )
  const lastEntry = values[values.length - 1]

  return {
    max: { value: maxEntry.value, timestamp: maxEntry.timestamp },
    min: { value: minEntry.value, timestamp: minEntry.timestamp },
    last: { value: lastEntry.value, timestamp: lastEntry.timestamp },
  }
}
