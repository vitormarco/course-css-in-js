import styles from './MarketCard.module.css'
import { STOCK_GRAPHS_BY_TICKER_SYMBOL } from '@/__MOCK__/market'
import React from 'react'

interface IMarketCardProps {
  tickerSymbol: string,
  exchangeName: string
  percentChange: number
}

const MarketCard = ({
  tickerSymbol,
  exchangeName,
  percentChange
}: IMarketCardProps) => {
  const graphSrc = STOCK_GRAPHS_BY_TICKER_SYMBOL[tickerSymbol as keyof typeof STOCK_GRAPHS_BY_TICKER_SYMBOL]
  const percentageSymbol = percentChange >= 0 ? '+' : ''
  const percentageColor = 
    percentChange >= 0
      ? 'var(--color-secondary)'
      : 'var(--color-urgent)'

  return (
    <span className={styles.wrapper}>
      <div className={styles.row}>
        <p className={styles.tickerSymbol}></p>
        <div className={styles.graphWrapper}>
          <picture>
            <img alt="" src={graphSrc} className={styles.graph} />
          </picture>
        </div>
      </div>
      <div className={styles.row}>
        <span className={styles.exchange}>{exchangeName}</span>
        <span 
          className={styles.percentage} 
          style={{ '--color': percentageColor } as React.CSSProperties}
        >
          {percentageSymbol}
          {percentChange}%
        </span>
      </div>
    </span>
  )
}

export default MarketCard;