'use client'

// import { IconMenu2, IconSettings } from '@tabler/icons-react'

import { Box, Text } from '@setgoh-ui/react'

import { ThemeToggler } from '@/components/theme-toggler'

import * as styles from './styles.css'

export default function Section1() {
  return (
    <Box className={styles.Box}>
      <div className={styles.LeftBoxDiv}>
        {/* <IconMenu2 stroke={1} size="32" /> */}
        {/* <h6 className={styles.Name}>SolouChuva</h6> */}
      </div>

      <Text>Wheather Station</Text>

      <div className={styles.RightBoxDiv}>
        <ThemeToggler />
        {/* <IconSettings stroke={1} size="32" /> */}
      </div>
    </Box>
  )
}
