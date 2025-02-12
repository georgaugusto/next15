import { EcowittApiResponse } from './ecowitt-api'

export type DeviceRealTimeResponse = EcowittApiResponse<DeviceRealTimeData>

export interface DeviceRealTimeData {
  outdoor: OutdoorData
  indoor: IndoorData
  solar_and_uvi: SolarAndUVIData
  rainfall_piezo: RainfallPiezoData
  wind: WindData
  pressure: PressureData
  battery: BatteryData
}

interface OutdoorData {
  temperature: Measurement
  feels_like: Measurement
  app_temp: Measurement
  dew_point: Measurement
  humidity: Measurement
}

interface IndoorData {
  temperature: Measurement
  humidity: Measurement
}

interface SolarAndUVIData {
  solar: Measurement
  uvi: Measurement
}

interface RainfallPiezoData {
  rain_rate: Measurement
  daily: Measurement
  state: Measurement
  event: Measurement
  hourly: Measurement
  weekly: Measurement
  monthly: Measurement
  yearly: Measurement
}

interface WindData {
  wind_speed: Measurement
  wind_gust: Measurement
  wind_direction: Measurement
}

interface PressureData {
  relative: Measurement
  absolute: Measurement
}

interface BatteryData {
  haptic_array_battery: Measurement
  haptic_array_capacitor: Measurement
}

interface Measurement {
  time: string
  unit: string
  value: string
}
