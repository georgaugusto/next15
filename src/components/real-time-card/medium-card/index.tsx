'use client'

import { Box, Text } from '@setgoh-ui/react'

import RealTimeMaxMin from '../max-min'
import RealTimeCurrent from '../current'

import { renderRealTimeCardIcons } from '@/utils/render-real-time-card-icons'

import * as styles from './styles.css'

const RealTimeMediumCard = ({
  title,
  value,
  unit,
  calc,
  maxmin,
}: {
  title: string
  value: string
  unit: string
  calc?: string
  maxmin?: {
    max: { value: number; timestamp: number }
    min: { value: number; timestamp: number }
  }
}) => {
  if (!value) {
    return null
  }

  return (
    <Box className={styles.Box}>
      <Text className={styles.Title} size="md">
        {renderRealTimeCardIcons(title)}
        {title}
      </Text>

      <div className={styles.Container}>
        <RealTimeCurrent value={value} unit={unit} calc={calc} />

        {maxmin && (
          <RealTimeMaxMin
            maxValue={maxmin.max.value}
            maxUnit={unit}
            minValue={maxmin.min.value}
            minUnit={unit}
          />
        )}
      </div>
    </Box>
  )
}

export default RealTimeMediumCard
