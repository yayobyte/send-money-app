import { extractCurrenciesAndCountriesFromExPair, getRateAmountFromValueAndExRate } from './CurrencyExchangeBlock.helper';

describe('extractCurrenciesAndCountriesFromExPair', () => {
  test('should extract currencies and countries correctly', () => {
    const exchangeRatePair = 'EURUSD'
    const result = extractCurrenciesAndCountriesFromExPair(exchangeRatePair)
    
    expect(result).toEqual({
      currencyFrom: 'EUR',
      countryFrom: 'EU',
      currencyTo: 'USD',
      countryTo: 'US',
    });
  });
  
  test('should handle invalid input by using default pair', () => {
    const invalidExchangeRatePair = 'ABCD'
    const result = extractCurrenciesAndCountriesFromExPair(invalidExchangeRatePair)
    
    expect(result).toEqual({
      currencyFrom: 'AED',
      countryFrom: 'AE',
      currencyTo: 'USD',
      countryTo: 'US',
    });
  });
});

describe('getRateAmountFromValueAndExRate', () => {
  test('should calculate rate amount correctly', () => {
    const valueFrom = '100'
    const exchangeRateValue = 1.25
    const result = getRateAmountFromValueAndExRate(valueFrom, exchangeRateValue)
    
    expect(result).toBe('125.00')
  });
  
  test('should handle invalid input by returning "0"', () => {
    const invalidValueFrom = 'invalid'
    const exchangeRateValue = 1.25
    const result = getRateAmountFromValueAndExRate(invalidValueFrom, exchangeRateValue)
    
    expect(result).toBe('0')
  });
});
