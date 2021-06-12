import styles from './Blog.module.css'
import Heading from './Heading'
import Cards from './Cards'
function Blog() {
    return (
        <div className={styles.blogContainer}>
            <Heading />
            <Cards />
        </div>
    )
}

export default Blog
