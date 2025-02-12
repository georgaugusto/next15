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

export const renderRealTimeCardIcons = (icon: string) => {
  switch (icon) {
    case 'Temperature':
      return <IconTemperature stroke={1} size={26} />
    case 'Feels Like':
      return <IconTemperature stroke={1} size={26} />
    case 'Soil Humidity':
      return <IconBrandSolidjs stroke={1} size={26} />
    case 'Humidity':
      return <IconDroplets stroke={1} size={26} />
    case 'Wind Speed':
      return <IconWindsock stroke={1} size={26} />
    case 'Wind Gust':
      return <IconWind stroke={1} size={26} />
    case 'Solar':
      return <IconSolarPanel2 stroke={1} size={26} />
    case 'Uvi':
      return <IconUvIndex stroke={1} size={26} />
    case 'Pressure Relative':
      return <IconSwipeDown stroke={1} size={26} />
    case 'Pressure Absolute':
      return <IconSwipeDown stroke={1} size={26} />
    case 'Rainfall Piezo':
      return <IconCloudRain stroke={1} size={26} />
    default:
      return null
  }
}
