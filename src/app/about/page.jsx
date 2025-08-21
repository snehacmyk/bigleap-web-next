import styles from './about.module.scss';
export default function AboutPage() {
    return (
        <>
            {/* TITLE BANNER AREA */}

            <section className={styles['title-banner']}>
                <h1> Our creativity begins where reality ends </h1>

            </section>


            {/* ABOUT CONTENT AREA */}

            <section className={styles['about-main-section']}>
                <div className='container'>
                    <div className={styles['about-sect']}>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-6 col-md-12 col-12'>
                                <div className={styles['abt-img']}>
                                    <img src="comic.png" alt="" />
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-6 col-md-12 col-12'>
                                <div className={styles['abt-cnt']}>
                                    <h4>A creative studio specializing in the production of captivating animation videos that bring
                                        ideas to life.</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis beatae voluptatem
                                        libero
                                        impedit iusto maiores quaerat magnam expedita odit natus fugit quasi accusamus veritatis,
                                        nemo
                                        delectus cupiditate perferendis eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sunt debitis beatae voluptatem libero
                                        impedit iusto maiores quaerat magnam expedita odit natus fugit quasi accusamus veritatis,
                                        nemo
                                        delectus cupiditate perferendis eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sunt debitis beatae voluptatem libero
                                        impedit iusto maiores quaerat magnam expedita odit natus fugit quasi accusamus veritatis,
                                        nemo
                                        delectus cupiditate perferendis eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sunt debitis beatae voluptatem libero
                                        impedit iusto maiores quaerat magnam expedita odit natus fugit quasi accusamus veritatis,
                                        nemo
                                        delectus cupiditate perferendis eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sunt debitis beatae voluptatem libero
                                        impedit iusto maiores quaerat magnam expedita odit natus fugit quasi accusamus veritatis,
                                        nemo
                                        delectus cupiditate perferendis eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sunt debitis beatae voluptatem libero
                                        impedit iusto maiores quaerat magnam expedita odit natus fugit quasi accusamus veritatis,
                                        nemo
                                        delectus cupiditate perferendis eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sunt debitis beatae voluptatem libero
                                        impedit iusto maiores quaerat magnam expedita odit natus fugit quasi accusamus veritatis,
                                        nemo
                                        delectus cupiditate perferendis eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sunt debitis beatae voluptatem libero
                                        impedit iusto maiores quaerat magnam expedita odit natus fugit quasi accusamus veritatis,
                                        nemo
                                        delectus cupiditate perferendis eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sunt debitis beatae voluptatem libero
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* HISTORY AREA START */}

            <section className={styles['history-area']}>
                <div className='container'>
                    <div className={styles['history-head']}>
                        <h2>HISTORY</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint dolorem sed nihil atque tempora
                            commodi eligendi, exercitationem, dicta totam sequi ab culpa repellendus nesciunt fugiat</p>
                    </div>
                </div>
            </section>

        </>
    );
}