import { getDeviceList } from '@/service/ecowitt'

export default async function execute() {
  const deviceList = await getDeviceList()

  if (!deviceList || deviceList.code !== 0) {
    // console.warn(`Error`)
    console.warn('Error - deviceList', deviceList)
  }

  return deviceList.data.list

  // return deviceList.data.list.map((device) => ({
  //   id: device.id,
  //   name: device.name,
  // }))
}
