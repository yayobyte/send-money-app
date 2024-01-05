export type ConvertResult = {
  success: boolean,
  terms?: string,
  privacy?: string,
  query: {
    from: string,
    to: string,
    amount: number
  },
  info: {
    timestamp: number,
    quote: number
  },
  historical?: boolean,
  date: string,
  result: number
}

export type ConvertRequest = {
  from: string,
  to: string,
  amount: number
}
