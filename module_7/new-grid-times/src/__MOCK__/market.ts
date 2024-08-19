const MARKET_DATA = [
  {
    tickerSymbol: 'AAPL',
    exchangeName: 'NASDAQ',
    percentChange: 4.5,
  },
  {
    tickerSymbol: 'AMC',
    exchangeName: 'NYSE',
    percentChange: 7.9,
  },
  {
    tickerSymbol: 'ENB',
    exchangeName: 'TSE',
    percentChange: -12.4,
  },
  {
    tickerSymbol: 'GOOG',
    exchangeName: 'NASDAQ',
    percentChange: 8.1,
  },
  {
    tickerSymbol: 'AMZN',
    exchangeName: 'NASDAQ',
    percentChange: -6.6,
  },
  {
    tickerSymbol: 'MSFT',
    exchangeName: 'NASDAQ',
    percentChange: -1.2,
  },
];

export const STOCK_GRAPHS_BY_TICKER_SYMBOL = {
  AAPL: '/images/stock-graph-up-1.svg',
  AMC: '/images/stock-graph-up-2.svg',
  ENB: '/images/stock-graph-down-1.svg',
  GOOG: '/images/stock-graph-up-3.svg',
  AMZN: '/images/stock-graph-down-2.svg',
  MSFT: '/images/stock-graph-down-3.svg',  
}

export default MARKET_DATA;