'use client'

import { Text } from '@setgoh-ui/react'

import RealTimeAverage from '../calc'

import * as styles from './styles.css'

const RealTimeCurrent = ({
  value,
  unit,
  calc,
}: {
  value: string
  unit: string
  calc?: string
  icon?: string
}) => {
  if (!value) {
    return null
  }

  return (
    <div className={styles.Value}>
      <Text size="4xl">
        {value}
        {unit && (
          <Text as="span" size="sm">
            {unit}
          </Text>
        )}
      </Text>

      {calc && <RealTimeAverage calcValue={value} calcUnit={unit} />}
    </div>
  )
}

export default RealTimeCurrent
