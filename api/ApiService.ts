import ApiClient from './ApiClient'
import { ConvertRequest, ConvertResult } from "./types/convert"
import { RatesResult } from "./types/rates"

const apiUrl = 'http://192.168.1.6'
const apiPort = 3001

const ApiService = {
  convert: (query: ConvertRequest) => {
    const apiClient = new ApiClient(`${apiUrl}:${apiPort}`)
    const urlParams = new URLSearchParams(query as unknown as URLSearchParams).toString() || null
    return apiClient.get<ConvertResult>('convert', urlParams)
  },
  rates: () => {
    const apiClient = new ApiClient(`${apiUrl}:${apiPort}`)
    return apiClient.get<RatesResult>('rates', null)
  }
}

export default ApiService
