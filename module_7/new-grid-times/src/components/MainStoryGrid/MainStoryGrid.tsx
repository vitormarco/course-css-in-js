import { MAIN_STORY } from "@/__MOCK__"
import Advertisement from "../Advertisement"
import MainStory from "../MainStory"

import styles from './MainStoryGrid.module.css'

const MainStoryGrid = () => {

    return (
        <div className={styles.wrapper}>
            <section>
                <MainStory {...MAIN_STORY} />
            </section>
            <section>
                <div>
                    {/* TODO: SECONDARY STORIES  */}
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