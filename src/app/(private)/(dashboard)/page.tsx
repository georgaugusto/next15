import { use } from 'react'

import GetDeviceRealTimeUseCase from '@/useCase/ecowitt/device-real-time-use-case'

import Section1 from '@/components/section-1'
import Section2 from '@/components/section-2'
import Section3 from '@/components/section-3'
import Section4 from '@/components/section-4'
import Section5 from '@/components/section-5'

import * as styles from './styles.css'

export default function Dashboard() {
  const deviceRealTime = use(GetDeviceRealTimeUseCase(process.env.MAC ?? ''))

  return (
    <div className={styles.Container}>
      <Section1 />
      <Section2
        temperature={deviceRealTime.outdoor.temperature}
        humidity={deviceRealTime.outdoor.humidity}
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
        relative={deviceRealTime.pressure.relative}
        absolute={deviceRealTime.pressure.absolute}
      />
      <Section5 rainfallPiezo={deviceRealTime.rainfall_piezo} />
    </div>
  )
}
