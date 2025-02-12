export * from './device-history-response'
export * from './device-list-response'
export * from './device-real-time-response'

export interface Measurement {
  time: string
  unit: string
  value: string
}
