'use client';
import styles from './header.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function MainHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <Link href="#" className={styles.logo}>
                <img src="logo.png" alt="logo" />
            </Link>

            <button
                className={styles['nav-toggle']}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={handleToggle}
                type="button"
            >
                {/* Hamburger icon */}
                <span style={{ display: 'block', width: 24, height: 2, background: '#ddd6cb', margin: '5px 0', borderRadius: 2 }}></span>
                <span style={{ display: 'block', width: 24, height: 2, background: '#ddd6cb', margin: '5px 0', borderRadius: 2 }}></span>
                <span style={{ display: 'block', width: 24, height: 2, background: '#ddd6cb', margin: '5px 0', borderRadius: 2 }}></span>
            </button>

            <nav className={menuOpen ? `${styles.nav} ${styles.open}` : styles.nav}>
                <ul onClick={closeMenu}>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT US</Link>
                    </li>
                    <li>
                        <Link href="/servicess">SERVICES</Link>
                    </li>
                    <li>
                        <Link href="#">PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link href="/blog">BLOG</Link>
                    </li>
                    <li>
                        <Link href="#">CONTACT US</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}