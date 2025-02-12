'use client'

import { Measurement } from '@/domains/ecowitt'

import RealTimeMediumCard from '../real-time-card/medium-card'

import * as styles from './styles.css'

interface Section2Props {
  temperature: Measurement
  humidity: Measurement
}

export default function Section2({ temperature, humidity }: Section2Props) {
  return (
    <div className={styles.Section2}>
      <RealTimeMediumCard
        title="Temperature"
        value={temperature.value}
        unit={temperature.unit}
      />

      <RealTimeMediumCard
        title="Humidity"
        value={humidity.value}
        unit={humidity.unit}
      />
    </div>
  )
}
