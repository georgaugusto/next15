import { JSX } from 'react'

import {
  IconBrandSolidjs,
  IconCloudRain,
  IconDroplets,
  IconSolarPanel2,
  IconSwipeDown,
  IconTemperature,
  IconUvIndex,
  IconWind,
  IconWindsock,
} from '@tabler/icons-react'

const iconMap: { [key: string]: JSX.Element } = {
  Temperature: <IconTemperature stroke={1} size={26} />,
  'Feels Like': <IconTemperature stroke={1} size={26} />,
  'Soil Humidity': <IconBrandSolidjs stroke={1} size={26} />,
  Humidity: <IconDroplets stroke={1} size={26} />,
  'Wind Speed': <IconWindsock stroke={1} size={26} />,
  'Wind Gust': <IconWind stroke={1} size={26} />,
  Solar: <IconSolarPanel2 stroke={1} size={26} />,
  Uvi: <IconUvIndex stroke={1} size={26} />,
  'Pressure Relative': <IconSwipeDown stroke={1} size={26} />,
  'Pressure Absolute': <IconSwipeDown stroke={1} size={26} />,
  'Rainfall Piezo': <IconCloudRain stroke={1} size={26} />,
}

export const renderRealTimeCardIcons = (icon: string) => {
  return iconMap[icon] ?? null
}
