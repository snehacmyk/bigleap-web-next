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
              <div className={styles.abtcnt}>
                <h4>Bigleap is a digital product design agency
                  thatturns complex technology into intuitive,
                  usable interfaces. We work with forward-thinking
                  teams to create market-ready digital products that
                  areeasy to use and hard to ignore.</h4>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SLIDER SECTION */}

      <section className={styles['slide-head']}>
        <div className="container">
          <div className={styles['special-head']}>
            <h2>WE ARE SPECIALIZED</h2>

            <p>We are a highly dynamic creative bunch who specializes in delivering 360 production services. Specialized company in photography, videography and film production in UAE</p>
          </div>
          <div className={styles.specialslide}>
            <Slider datas={[
              { img: "img2.jpg", caption: "2D motion graphics", readbtn: "Learn more" },
              { img: "img3.jpg", caption: "Whiteboard Animations", readbtn: "Learn more" },
              { img: "img4.jpg", caption: "Storytelling scripted animations", readbtn: "Learn more" },
              { img: "img1.jpg", caption: "3D product animation", readbtn: "Learn more" },
              { img: "img2.jpg", caption: "2D motion graphics", readbtn: "Learn more" }
            ]} /></div>
        </div>
      </section>

      {/* <Slider datas={[
        { img: "img2.jpg", caption: "rthertherh", readMoreButton: "Know this.." },
        { img: "img2.jpg", caption: "ehrtyejrtyj", readMoreButton: "Know this.." },
        { img: "img2.jpg", caption: "erthyetyjhte", readMoreButton: "Know this.." },
        { img: "img2.jpg", caption: "qtggbd", readMoreButton: "Know this.." },
        { img: "img2.jpg", caption: "wertgeht", readMoreButton: "Know this.." }
      ]}
        spaceBetween={0}
        slideImageStyle={{
          width: '90%',
        }}
      /> */}


     

    </>
  );
}
