'use client'

import { Text } from '@setgoh-ui/react'
import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react'

import * as styles from './styles.css'

const RealTimeMaxMin = ({
  maxValue,
  maxUnit,
  minValue,
  minUnit,
}: {
  maxValue: string
  maxUnit: string
  minValue: string
  minUnit: string
}) => {
  if (!maxValue && !minValue) {
    return null
  }

  return (
    <div className={styles.Another}>
      <Text size="sm">Maxima</Text>
      <Text size="lg" className={styles.Max}>
        <IconCaretUpFilled stroke={1} size={16} />
        {maxValue}
        {maxUnit && (
          <Text as="span" size="sm">
            {maxUnit}
          </Text>
        )}
      </Text>

      <Text size="sm">Minima</Text>
      <Text size="lg" className={styles.Min}>
        <IconCaretDownFilled stroke={1} size={16} />
        {minValue}
        {minUnit && (
          <Text as="span" size="sm">
            {minUnit}
          </Text>
        )}
      </Text>
    </div>
  )
}

export default RealTimeMaxMin
