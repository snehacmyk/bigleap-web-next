
import styles from './title.module.scss';
export default function TitleBanner({ title }) {
    return (
        <section className={styles['title-banner']}>
            <h1>{title}</h1>
        </section>
    );
}
