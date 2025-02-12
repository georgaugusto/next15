'use client'

import { Measurement } from '@/domains/ecowitt'

import RealTimeMediumCard from '../real-time-card/medium-card'

import * as styles from './styles.css'

interface Section4Props {
  relative: Measurement
  absolute: Measurement
}

export default function Section4({ relative, absolute }: Section4Props) {
  return (
    <div className={styles.Section2}>
      <RealTimeMediumCard
        title="Pressure Relative"
        value={relative.value}
        unit={relative.unit}
      />

      <RealTimeMediumCard
        title="Pressure Absolute"
        value={absolute.value}
        unit={absolute.unit}
      />
    </div>
  )
}
