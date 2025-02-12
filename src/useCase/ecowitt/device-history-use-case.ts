import { getDeviceHistory } from '@/service/ecowitt'

export default async function execute() {
  const deviceHistory = await getDeviceHistory()

  if (!deviceHistory || deviceHistory.code !== 0) {
    // console.warn(`Error`)
    console.warn('Error - deviceHistory', deviceHistory)
  }

  return deviceHistory.data
}
