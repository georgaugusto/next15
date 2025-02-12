'use client'

import { Text } from '@setgoh-ui/react'

import * as styles from './styles.css'

const RealTimeRainText = ({
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
    <div className={styles.Another}>
      <Text size="sm">{name}</Text>
      <Text size="lg">
        {value}
        {unit && (
          <Text as="span" size="sm">
            {unit}
          </Text>
        )}
      </Text>
    </div>
  )
}

export default RealTimeRainText
