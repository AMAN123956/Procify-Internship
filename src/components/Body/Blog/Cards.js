import styles from './Cards.module.css'
import BlogCard from './UI/BlogCard'
import data from './Content/BlogContent'

function Cards() {
    return (
        <div className={styles.cardBox}>
            {data.map(item => <BlogCard
                heading={item.heading}
                content={item.content}
                imgurl={item.imgurl}
                />)
            }
        </div>
    )
}

export default Cards
