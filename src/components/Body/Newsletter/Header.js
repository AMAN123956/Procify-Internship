import styles from './Header.module.css'

function Header() {
    return (
        <div>
            <h2 className={styles.heading1}>
                Subscribe to Our Newsletter
            </h2>
            <p className={styles.heading2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}

export default Header
