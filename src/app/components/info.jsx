import styles from '../components/info.module.scss';
import Link from 'next/link';

export default function InfoArea() {
    return (
        <>
            <section className={styles.infosec}>
                <div className="row">
                    <div className="col-xl-7"></div>
                    <div className="col-xl-5">
                        <div className={styles.contacts}>
                            <ul>
                                <li> <a href="mailto:info@bigleap.ae"> <i className="fa fa-envelope"></i> info@bigleap.ae</a>
                                </li>
                                <li> <a href="tel:+123456789"> <i className="fa fa-phone"></i> +971 05 6646 464 </a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}