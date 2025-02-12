import { EcowittApiResponse } from './ecowitt-api'

export type DeviceListResponse = EcowittApiResponse<DeviceData>

interface DeviceData {
  total: number
  totalPage: number
  pageNum: number
  list: Device[]
}

export interface Device {
  id: number
  name: string
  mac: string
  type: number
  date_zone_id: string
  createtime: number
  longitude: number
  latitude: number
  stationtype: string
  iotdevice_list: unknown[]
}
