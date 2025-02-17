import { getDeviceHistory } from '@/service/ecowitt'

export default async function execute(startDate: string, endDate: string) {
  const deviceHistory = await getDeviceHistory(startDate, endDate)

  if (!deviceHistory || deviceHistory.code !== 0) {
    // console.warn(`Error`)
    console.warn('Error - deviceHistory', deviceHistory)
  }

  return deviceHistory.data
}
