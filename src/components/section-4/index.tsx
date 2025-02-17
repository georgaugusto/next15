'use client'

import { Measurement } from '@/domains/ecowitt'

import RealTimeMediumCard from '../real-time-card/medium-card'

import * as styles from './styles.css'

interface Section4Props {
  relative: {
    last: Measurement
    maxmin?: {
      max: { value: number; timestamp: number }
      min: { value: number; timestamp: number }
    }
  }
  absolute: {
    last: Measurement
    maxmin?: {
      max: { value: number; timestamp: number }
      min: { value: number; timestamp: number }
    }
  }
}

export default function Section4({ relative, absolute }: Section4Props) {
  return (
    <div className={styles.Section2}>
      <RealTimeMediumCard
        title="Pressure Relative"
        value={relative.last.value}
        unit={relative.last.unit}
        maxmin={relative.maxmin}
      />

      <RealTimeMediumCard
        title="Pressure Absolute"
        value={absolute.last.value}
        unit={absolute.last.unit}
        maxmin={absolute.maxmin}
      />
    </div>
  )
}
