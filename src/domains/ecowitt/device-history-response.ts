import { EcowittApiResponse } from './ecowitt-api'

export type DeviceHistoryResponse = EcowittApiResponse<DeviceHistoryData>

interface DeviceHistoryData {
  outdoor: WeatherMetrics
  indoor: WeatherMetrics
  solar_and_uvi: SolarAndUVI
  rainfall_piezo: RainfallPiezo
  wind: WindMetrics
  pressure: PressureMetrics
  battery: BatteryMetrics
}

interface WeatherMetrics {
  temperature: Measurement
  feels_like: Measurement
  app_temp: Measurement
  dew_point: Measurement
  humidity: Measurement
}

interface Measurement {
  unit: string
  list: Record<string, string>
}

interface SolarAndUVI {
  solar: Measurement
  uvi: Measurement
}

interface RainfallPiezo {
  rain_rate: Measurement
  daily: Measurement
  event: Measurement
  hourly: Measurement
  weekly: Measurement
  monthly: Measurement
  yearly: Measurement
}

interface WindMetrics {
  wind_speed: Measurement
  wind_gust: Measurement
  wind_direction: Measurement
}

interface PressureMetrics {
  relative: Measurement
  absolute: Measurement
}

interface BatteryMetrics {
  haptic_array_battery: Measurement
  haptic_array_capacitor: Measurement
}
