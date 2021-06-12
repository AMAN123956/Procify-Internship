import styles from './Navbar'
import logoImg from '../../assets/img/logo.png'
function Navbar() {
    return (
        <Navbar className={styles.mainNavbar}>
            <div className={styles.leftSection}>
                <img src={logoImg} className={styles.logoImg} alt="logo_img"/>
            </div>
            <div className={styles.rightSection}>
                <li>Home</li>
                <li>Product</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </div>
        </Navbar>
    )
}

export default Navbar
