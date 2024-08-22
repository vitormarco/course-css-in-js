import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "@/__MOCK__"
import Advertisement from "../Advertisement"
import MainStory from "../MainStory"

import styles from './MainStoryGrid.module.css'
import SecondaryStory from "../SecondaryStory/SecondaryStory"
import SectionTitle from "../SectionTitle"
import OpinionStory from "../OpinionStory"

const MainStoryGrid = () => {

    return (
        <div className={styles.wrapper}>
            <section className={styles.mainStorySection}>
                <MainStory {...MAIN_STORY} />
            </section>
            <section className={styles.secondaryStorySection}>
                <div className={styles.storyList}>
                    {SECONDARY_STORIES.map(story => (
                        <div  key={story.id} className={styles.verticalStoryWrapper}>
                            <SecondaryStory {...story} />
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.opinionSection}>
                <SectionTitle>Opinion</SectionTitle>
                <div className={styles.storyList}>
                    {OPINION_STORIES.map(story => (
                        <div  key={story.id} className={styles.verticalStoryWrapper}>
                            <OpinionStory {...story} />
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.advertisementSection}>
                <Advertisement />
            </section>
        </div>
    )
}

export default MainStoryGrid;