import { getDeviceRealTime } from '@/service/ecowitt'

export default async function execute(mac: string) {
  const DeviceRealTime = await getDeviceRealTime(mac)

  if (!DeviceRealTime || DeviceRealTime.code !== 0) {
    // console.warn(`Error`)
    console.warn('Error - DeviceRealTime', DeviceRealTime)
  }

  return DeviceRealTime.data
}
