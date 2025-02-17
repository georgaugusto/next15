import { DeviceHistoryData } from '@/domains/ecowitt'
import { getMaxMinHistoryData } from './get-max-min-history-data'

interface ValueWithTimestamp {
  value: number
  timestamp: number
}

interface Measurement {
  max: ValueWithTimestamp
  min: ValueWithTimestamp
  last: ValueWithTimestamp
}

interface ExtractWeatherData {
  outdoor: {
    temperature: Measurement
    feelsLike: Measurement
    appTemp: Measurement
    dewPoint: Measurement
    humidity: Measurement
  }
  indoor: {
    temperature: Measurement
    humidity: Measurement
  }
  solarAndUvi: {
    solar: Measurement
    uvi: Measurement
  }
  rainfall: {
    rainRate: Measurement
    daily: Measurement
    event: Measurement
    hourly: Measurement
    weekly: Measurement
    monthly: Measurement
    yearly: Measurement
  }
  wind: {
    speed: Measurement
    gust: Measurement
    direction: Measurement
  }
  pressure: {
    relative: Measurement
    absolute: Measurement
  }
  battery: {
    hapticArrayBattery: Measurement
    hapticArrayCapacitor: Measurement
  }
}

export const extractWeatherHistoryData = (data: DeviceHistoryData) => {
  const result: ExtractWeatherData = {
    outdoor: {
      temperature: getMaxMinHistoryData(data.outdoor.temperature.list),
      feelsLike: getMaxMinHistoryData(data.outdoor.feels_like.list),
      appTemp: getMaxMinHistoryData(data.outdoor.app_temp.list),
      dewPoint: getMaxMinHistoryData(data.outdoor.dew_point.list),
      humidity: getMaxMinHistoryData(data.outdoor.humidity.list),
    },
    indoor: {
      temperature: getMaxMinHistoryData(data.indoor.temperature.list),
      humidity: getMaxMinHistoryData(data.indoor.humidity.list),
    },
    solarAndUvi: {
      solar: getMaxMinHistoryData(data.solar_and_uvi.solar.list),
      uvi: getMaxMinHistoryData(data.solar_and_uvi.uvi.list),
    },
    rainfall: {
      rainRate: getMaxMinHistoryData(data.rainfall_piezo.rain_rate.list),
      daily: getMaxMinHistoryData(data.rainfall_piezo.daily.list),
      event: getMaxMinHistoryData(data.rainfall_piezo.event.list),
      hourly: getMaxMinHistoryData(data.rainfall_piezo.hourly.list),
      weekly: getMaxMinHistoryData(data.rainfall_piezo.weekly.list),
      monthly: getMaxMinHistoryData(data.rainfall_piezo.monthly.list),
      yearly: getMaxMinHistoryData(data.rainfall_piezo.yearly.list),
    },
    wind: {
      speed: getMaxMinHistoryData(data.wind.wind_speed.list),
      gust: getMaxMinHistoryData(data.wind.wind_gust.list),
      direction: getMaxMinHistoryData(data.wind.wind_direction.list),
    },
    pressure: {
      relative: getMaxMinHistoryData(data.pressure.relative.list),
      absolute: getMaxMinHistoryData(data.pressure.absolute.list),
    },
    battery: {
      hapticArrayBattery: getMaxMinHistoryData(
        data.battery.haptic_array_battery.list,
      ),
      hapticArrayCapacitor: getMaxMinHistoryData(
        data.battery.haptic_array_capacitor.list,
      ),
    },
  }

  return result
}
