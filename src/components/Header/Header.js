import styles from './Header.module.css'
import Heading from './Heading'
import Navbar from './Navbar'
const Header = () => (
    <div className={styles.topSection}>
        <Navbar />
        <Heading />
        
    </div>
)


export default Header