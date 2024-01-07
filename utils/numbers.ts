export const REGEXP_ONLY_TWO_DECIMALS = /^(\d+)(\.(\d{0,2}))?$/
export const REGEXP_ZEROS_AT_THE_BEGINNING = /^0+|[^0-9.,]/g

export const validateTwoDecimalNumber = (value: string) => {
  const sanitizedValue = value.replace(REGEXP_ZEROS_AT_THE_BEGINNING, '')
  
  if (!sanitizedValue) {
    return ''
  }
  
  if (sanitizedValue === '' || (sanitizedValue.length === 1 && sanitizedValue[0] === '0')) {
    return ''
  }
  
  const numericValue = parseFloat(sanitizedValue)
  if (isNaN(numericValue)) {
    return ''
  }
  
  if (numericValue < 0) {
    return ''
  }
  
  return sanitizedValue
}
