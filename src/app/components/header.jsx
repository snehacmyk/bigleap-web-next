import styles from './header.module.scss';
import Link from 'next/link';

export default function MainHeader(){
    return(
        <>
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                <img src="logo.png" alt="logo" />

                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                           <Link href="/">HOME</Link>
                        </li>
                        <li>
                            <Link href="#">ABOUT US</Link>
                        </li>
                        <li>
                            <Link href="#">SERVICES</Link>
                        </li>
                        <li>
                            <Link href="#">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link href="#">BLOG</Link>
                        </li>
                        <li>
                            <Link href="#">CONTACT US</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}