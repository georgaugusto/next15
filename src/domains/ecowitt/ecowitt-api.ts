export interface EcowittApiResponse<T> {
  code: number
  msg: string
  time: string
  data: T
}

export interface Measurement {
  unit: string
  value: string
}
