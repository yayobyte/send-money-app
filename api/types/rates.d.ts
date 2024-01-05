export type RatesResult = {
  success: boolean,
  terms: string,
  privacy: string,
  timestamp: number,
  source: string,
  quotes: Record<string, number>
}
