'use client'

import { Text } from '@setgoh-ui/react'

import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'

import * as styles from './styles.css'

const RealTimeCalc = ({
  calcValue,
  calcUnit,
}: {
  calcValue: string
  calcUnit: string
}) => {
  if (!calcValue) {
    return null
  }

  const iconTrending = true

  return (
    <div className={styles.Container}>
      <Text size="md" className={styles.Value}>
        {iconTrending ? (
          <IconTrendingDown size={16} stroke={1} className={styles.Icon} />
        ) : (
          <IconTrendingUp size={16} stroke={1} className={styles.Icon} />
        )}

        {calcValue}
      </Text>

      {calcUnit && (
        <Text as="span" size="xs" className={styles.Unit}>
          {calcUnit}
        </Text>
      )}
    </div>
  )
}

export default RealTimeCalc
