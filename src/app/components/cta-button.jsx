import Link from 'next/link';
import styles from './cta-button.module.scss';

export default function CTAButton({title = "Default Title", link = "#"}) {
    return(
        <div className={styles.btn}>
            <Link href={link}>{title}</Link>
        </div>
    )
}