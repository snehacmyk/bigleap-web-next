import styles from './footer.module.scss';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <section className={styles.footerArea}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-3 col-12">
                            <div className={styles.bigleap}>
                                <Image src="/footer.png" alt="footer" width={216} height={172} className={styles.footerImage} />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-9 col-12">
                            <div className={styles.content}>
                                <div className={styles.bigleapCnt}>
                                    <h2>Let's Starts from a 'Hi'</h2>
                                </div>

                                <div className={styles.footerList}>
                                    <div className="row">
                                        <div className="col-xl-3">
                                            <div className={styles.subcol}>
                                                <h5>Socials</h5>
                                                <ul>
                                                    <li><a href="">facebook</a></li>
                                                    <li><a href="">LinkedIn</a></li>
                                                    <li><a href="">instagram</a></li>
                                                    <li><a href="">twitter</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className={styles.subcol}>
                                                <h5>Menu</h5>
                                                <ul>
                                                    <li><a href="">Home</a></li>
                                                    <li><a href="">About</a></li>
                                                    <li><a href="">Services</a></li>
                                                    <li><a href="">Blogs</a></li>
                                                    <li><a href="">Portfolio</a></li>
                                                    <li><a href="">Contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className={styles.subcol}>
                                                <h5>Say Hello</h5>
                                                <ul>
                                                    <li><a href="">info@giraf.in</a></li>
                                                    <li><a href="">+971 50 123 4567</a></li>
                                                    <li><a href="">Dubai, UAE</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className={styles['footer-bottom']}>
                                <ul className={styles.footerCopyRight}>
                                    <li> Bigleap © 2025. All Rights Reserved. <a href=""> bigleap.ae </a>
                                    </li>
                                    <li> <a href="#"> Privacy Policy </a> </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section >


        </>
    );
}
