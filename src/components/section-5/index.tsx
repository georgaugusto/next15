'use client'

import { Measurement } from '@/domains/ecowitt'

import RealTimeBigCard from '../real-time-card/big-card'

import * as styles from './styles.css'

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

interface Section5Props {
  rainfallPiezo: RainfallPiezoData
}

export default function Section5({ rainfallPiezo }: Section5Props) {
  return (
    <div className={styles.Section2}>
      <RealTimeBigCard rainfallPiezo={rainfallPiezo} />
    </div>
  )
}
