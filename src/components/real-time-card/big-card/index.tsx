'use client'

import { Box, Text } from '@setgoh-ui/react'

import RealTimeCurrent from '../current'

import { Measurement } from '@/domains/ecowitt'
import { renderRealTimeCardIcons } from '@/utils/render-real-time-card-icons'

import * as styles from './styles.css'
import RealTimeRainText from '../rain-text'

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

interface RealTimeBigCardProps {
  rainfallPiezo: RainfallPiezoData
}

const RealTimeBigCard = ({ rainfallPiezo }: RealTimeBigCardProps) => {
  const { rain_rate, daily, state, event, hourly, weekly, monthly, yearly } =
    rainfallPiezo

  return (
    <Box className={styles.Box}>
      <Text className={styles.Title} size="md">
        {renderRealTimeCardIcons('Rainfall Piezo')}
        Rainfall Piezo
      </Text>

      <div className={styles.Container}>
        <Text size="sm">Rain Rate /hr</Text>
        <RealTimeCurrent value={rain_rate.value} unit={rain_rate.unit} />
        <Text size="sm">Daily</Text>
        <RealTimeCurrent value={daily.value} unit={daily.unit} />

        <Text size="sm">State</Text>
        <Text size="4xl">{state.value ? 'No Rain' : 'Raining'}</Text>

        <RealTimeRainText name="Event" value={event.value} unit={event.unit} />
        <RealTimeRainText
          name="Hourly"
          value={hourly.value}
          unit={hourly.unit}
        />
        <RealTimeRainText
          name="Weekly"
          value={weekly.value}
          unit={weekly.unit}
        />
        <RealTimeRainText
          name="Monthly"
          value={monthly.value}
          unit={monthly.unit}
        />
        <RealTimeRainText
          name="Yearly"
          value={yearly.value}
          unit={yearly.unit}
        />
      </div>
    </Box>
  )
}

export default RealTimeBigCard
