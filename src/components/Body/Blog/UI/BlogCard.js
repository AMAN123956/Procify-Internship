import styles from './BlogCard.module.css'

function BlogCard(props) {
    return (
        <div className={styles.blogCard}>
            <img src={props.imgurl} className={styles.blogCardImg} />
            <h2 className={styles.heading1}>
                {props.heading}
            </h2>
            <p className={styles.heading2}>
                {props.content}
            </p>
            <a href="#" className={styles.readMoreBtn}>
                Read More
            </a>
            
        </div>
    )
}

export default BlogCard
