import {
  DeviceHistoryResponse,
  DeviceListResponse,
  DeviceRealTimeResponse,
} from '@/domains/ecowitt'
import { FARENHEIT, HPA, KM_H, MM, W_M2 } from '@/utils/constants'

const API_URL = 'https://api.ecowitt.net/api/v3'
const APPLICATION_KEY = process.env.APPLICATION_KEY || ''
const API_KEY = process.env.API_KEY || ''
const MAC = process.env.MAC || ''

const UNIT_IDS = {
  temp_unitid: FARENHEIT,
  pressure_unitid: HPA,
  wind_speed_unitid: KM_H,
  rainfall_unitid: MM,
  solar_irradiance_unitid: W_M2,
}

export async function getDeviceRealTime(
  mac: string,
): Promise<DeviceRealTimeResponse> {
  const queryString = new URLSearchParams({
    application_key: APPLICATION_KEY,
    api_key: API_KEY,
    mac: mac,
    call_back: 'all',
    ...UNIT_IDS,
  }).toString()

  const response = await fetch(`${API_URL}/device/real_time?${queryString}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const data = await response.json()

  return data
}

export async function getDeviceHistory(): Promise<DeviceHistoryResponse> {
  const queryString = new URLSearchParams({
    application_key: APPLICATION_KEY,
    api_key: API_KEY,
    mac: MAC,
    start_date: '2025-01-20 00:00:00',
    end_date: '2025-01-20 23:59:59',
    call_back:
      'outdoor,indoor,solar_and_uvi,rainfall_piezo,wind,pressure,battery',
    cycle_type: 'auto',
    ...UNIT_IDS,
  }).toString()

  const response = await fetch(`${API_URL}/device/history?${queryString}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const data = await response.json()

  return data
}

export async function getDeviceList(): Promise<DeviceListResponse> {
  const queryString = new URLSearchParams({
    application_key: APPLICATION_KEY,
    api_key: API_KEY,
  }).toString()

  const response = await fetch(`${API_URL}/device/list?${queryString}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const data = await response.json()

  return data
}
