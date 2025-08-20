import styles from './blog.module.scss';

export default function BlogSection() {
    
    return(
        <>
        <section className={styles.blogsection}>
            <div className={styles.blogcontent}>
                <div className={styles.bloghead}>
                    <h5>Blogs</h5>
                    <h2>Our Latest Blogs</h2>
                </div>

            </div>


        </section>
        </>
    )
}