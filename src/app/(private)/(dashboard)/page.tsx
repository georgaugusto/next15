import { use } from 'react'

import GetDeviceRealTimeUseCase from '@/useCase/ecowitt/device-real-time-use-case'
import GetDeviceHistoryUseCase from '@/useCase/ecowitt/device-history-use-case'

import Section1 from '@/components/section-1'
import Section2 from '@/components/section-2'
import Section3 from '@/components/section-3'
import Section4 from '@/components/section-4'
import Section5 from '@/components/section-5'

import * as styles from './styles.css'
import { extractWeatherHistoryData } from '@/utils/extract-weather-history-data'

export default function Dashboard() {
  const deviceRealTime = use(GetDeviceRealTimeUseCase(process.env.MAC ?? ''))
  const deviceHistory = use(
    GetDeviceHistoryUseCase(
      `${new Date().toJSON().slice(0, 10)} 00:00:00`,
      `${new Date().toJSON().slice(0, 10)} 23:59:59`,
    ),
  )

  const weatherHistoryData = extractWeatherHistoryData(deviceHistory)

  return (
    <div className={styles.Container}>
      <Section1 />
      <Section2
        temperature={{
          last: deviceRealTime.outdoor.temperature,
          maxmin: weatherHistoryData.outdoor.temperature,
        }}
        humidity={{
          last: deviceRealTime.outdoor.humidity,
          maxmin: weatherHistoryData.outdoor.humidity,
        }}
      />
      <Section3
        feelsLike={deviceRealTime.outdoor.feels_like}
        soilHumidity={deviceRealTime.outdoor.humidity}
        solar={deviceRealTime.solar_and_uvi.solar}
        uvi={deviceRealTime.solar_and_uvi.uvi}
        windGust={deviceRealTime.wind.wind_gust}
        windSpeed={deviceRealTime.wind.wind_speed}
      />
      <Section4
        relative={{
          last: deviceRealTime.pressure.relative,
          maxmin: weatherHistoryData.pressure.relative,
        }}
        absolute={{
          last: deviceRealTime.pressure.absolute,
          maxmin: weatherHistoryData.pressure.absolute,
        }}
      />
      <Section5 rainfallPiezo={deviceRealTime.rainfall_piezo} />
    </div>
  )
}
