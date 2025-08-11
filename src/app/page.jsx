import Image from "next/image";
// import styles from "./page.module.css";
import styles from "./index.module.scss";
import Slider from "./components/slider";

export default function Home() {



  return (
    <>

      {/* HERO SECTION START */}

      <section className={styles.hero}>
        <div className={styles.hanging}>
          <img id="yeeha-img" src="Yeeha.png" alt="yeeha" />
          {/* <img id="img360" src="360.png" alt="360image" /> */}
          <img id="character-img" src="character.png" alt="Character Image" />
        </div>
      </section>
      {/* HERO SECTION END */}

      <section className={styles.about}>
        <div className="row align-items-center">
          <div className={styles.rowss}>
            <div className="col-xl-4">
              <img src="Scate.png" alt="" className={styles.image} />
            </div>
            <div className="col-xl-8">
              <h4 className={styles.abtcnt}>
                Bigleap is a digital product design agency
                thatturns complex technology into intuitive,
                usable interfaces. We work with forward-thinking
                teams to create market-ready digital products that
                areeasy to use and hard to ignore.
              </h4>
            </div>
          </div>
        </div>
      </section>


      {/* SLIDER SECTION */}

      <section className={styles["special-head"]}>
        <h2 className=""></h2>
        <p className=""></p>

      <Slider></Slider>
      </section>
    </>
  );
}
