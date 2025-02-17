'use client'

import { Measurement } from '@/domains/ecowitt'

import RealTimeMediumCard from '../real-time-card/medium-card'

import * as styles from './styles.css'

interface Section2Props {
  temperature: {
    last: Measurement
    maxmin?: {
      max: { value: number; timestamp: number }
      min: { value: number; timestamp: number }
    }
  }
  humidity: {
    last: Measurement
    maxmin?: {
      max: { value: number; timestamp: number }
      min: { value: number; timestamp: number }
    }
  }
}

export default function Section2({ temperature, humidity }: Section2Props) {
  return (
    <div className={styles.Section2}>
      <RealTimeMediumCard
        title="Temperature"
        value={temperature.last.value}
        unit={temperature.last.unit}
        maxmin={temperature.maxmin}
      />

      <RealTimeMediumCard
        title="Humidity"
        value={humidity.last.value}
        unit={humidity.last.unit}
        maxmin={humidity.maxmin}
      />
    </div>
  )
}
