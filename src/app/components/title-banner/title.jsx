
import styles from './title.module.scss';
export default function TitleBanner({ title, sub }) {
    return (
        <section className={styles['title-banner']}>
            <h1>{title}</h1>
            <p>{sub}</p>
        </section>
    );
}
