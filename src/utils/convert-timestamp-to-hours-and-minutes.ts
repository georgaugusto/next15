export function convertTimestampToHoursAndMinutes(timestamp: string | number) {
  const date = new Date(Number(timestamp) * 1000)

  const hoursF = String(date.getHours()).padStart(2, '0')
  const minutesF = String(date.getMinutes()).padStart(2, '0')

  // Return the result as a string in "HH:MM" format
  return `${hoursF}:${minutesF}`
}
