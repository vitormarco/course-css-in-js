
import { MARKET_DATA, SPORTS_STORIES } from '@/__MOCK__';
import SectionTitle from '../SectionTitle';
import styles from './SpecialtyStoryGrid.module.css'
import MarketCard from '../MarketCard';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.marketsSection}>
        <SectionTitle 
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »'
          }}
        >
          Markets
        </SectionTitle>
        <div className={styles.marketCards}>
          {MARKET_DATA.map(data => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </div>
      </section>
      <section className={styles.sportsSection}>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »'
          }}
        >
          Sports
        </SectionTitle>
        <div className={styles.sportsStories}>
          {SPORTS_STORIES.map(data => (
            <div key={data.id} className={styles.sportsSotryWrapper}>
              <MiniStory {...data} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SpecialtyStoryGrid;