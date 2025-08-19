import styles from '../components/footer.module.scss';

export default function Footer() {
    return (
        <>
            <section className={styles.footerArea}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-3 col-12">
                            <div className="bigleap">
                                <img src="/img/footer/logo-footer 1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-9 col-12">
                            <div className={styles.content}>
                                <div className={styles.bigleapCnt}>
                                    <h2>Let's Starts from a 'Hi'</h2>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                                        <div className="sub-col">
                                            <h5>Socials</h5>
                                            <ul>
                                                <li><a href="">facebook</a></li>
                                                <li><a href="">instagram</a></li>
                                                <li><a href="">linkedin</a></li>
                                                <li><a href="">youtube</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                                        <div className="sub-col">
                                            <h5>Menu</h5>
                                            <ul>
                                                <li><a href="">Service</a></li>
                                                <li><a href="">Portfolio</a></li>
                                                <li><a href="">About Us</a></li>
                                                <li><a href="">Blogs</a></li>
                                                <li><a href="">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-4 col-6">
                                        <div class="sub-col">
                                            <h5>Say Hello</h5>
                                            <ul>
                                                <li><a href="">info@giraf.in</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="col-xl-12">
                        <div class="footer-bottom">
                            <ul class="footer-copy-right">
                                <li> Bigleap © 2025. All Rights Reserved. <a href="https://www.bigleap.ae/"> bigleap.ae </a>
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
