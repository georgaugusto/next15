'use client'

import { Measurement } from '@/domains/ecowitt'

import RealTimeSmallCard from '../real-time-card/small-card'

import * as styles from './styles.css'

interface Section3Props {
  feelsLike: Measurement
  windSpeed: Measurement
  soilHumidity: Measurement
  windGust: Measurement
  solar: Measurement
  uvi: Measurement
}

export default function Section3({
  feelsLike,
  windSpeed,
  soilHumidity,
  windGust,
  solar,
  uvi,
}: Section3Props) {
  return (
    <div className={styles.Section2}>
      <div className={styles.Parent}>
        <div className={styles.Div1}>
          <RealTimeSmallCard
            name="Feels Like"
            value={feelsLike.value}
            unit={feelsLike.unit}
          />
        </div>
        <div className={styles.Div2}>
          <RealTimeSmallCard
            name="Wind Speed"
            value={windSpeed.value}
            unit={windSpeed.unit}
          />
        </div>
        <div className={styles.Div3}>
          <RealTimeSmallCard
            name="Wind Gust"
            value={windGust.value}
            unit={windGust.unit}
          />
        </div>
        <div className={styles.Div4}>
          <RealTimeSmallCard
            name="Soil Humidity"
            value={soilHumidity.value}
            unit={soilHumidity.unit}
          />
        </div>

        <div className={styles.Div5}>
          <RealTimeSmallCard
            name="Solar"
            value={solar.value}
            unit={solar.unit}
          />
        </div>

        <div className={styles.Div6}>
          <RealTimeSmallCard name="Uvi" value={uvi.value} unit={uvi.unit} />
        </div>
      </div>
    </div>
  )
}
