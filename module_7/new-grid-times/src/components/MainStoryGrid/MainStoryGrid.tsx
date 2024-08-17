import { MAIN_STORY, SECONDARY_STORIES } from "@/__MOCK__"
import Advertisement from "../Advertisement"
import MainStory from "../MainStory"

import styles from './MainStoryGrid.module.css'
import SecondaryStory from "../SecondaryStory/SecondaryStory"

const MainStoryGrid = () => {

    return (
        <div className={styles.wrapper}>
            <section className={styles.mainStorySection}>
                <MainStory {...MAIN_STORY} />
            </section>
            <section className={styles.secondaryStorySection}>
                <div className={styles.storyList}>
                    {SECONDARY_STORIES.map(story => (
                        <SecondaryStory key={story.id} {...story} />
                    ))}
                </div>
            </section>
            <section>
                {/* TODO: OpinionStory  */}
            </section>
            <section>
                <Advertisement />
            </section>
        </div>
    )
}

export default MainStoryGrid