'use client'

import { Box, Text } from '@setgoh-ui/react'

import { renderRealTimeCardIcons } from '@/utils/render-real-time-card-icons'

import * as styles from './styles.css'

const RealTimeSmallCard = ({
  name,
  value,
  unit,
}: {
  name: string
  value: string
  unit: string
}) => {
  if (!value) {
    return null
  }

  return (
    <Box className={styles.Box}>
      {renderRealTimeCardIcons(name)}

      <div className={styles.Value}>
        <Text size="md">{name}</Text>
        <Text size="4xl">
          {value}
          {unit && (
            <Text as="span" size="sm">
              {unit}
            </Text>
          )}
        </Text>
      </div>
    </Box>
  )
}

export default RealTimeSmallCard
