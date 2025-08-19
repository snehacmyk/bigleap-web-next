import Image from "next/image";
// import styles from "./page.module.css";
import styles from "./index.module.scss";
import Slider from "./components/slider";
import BusinessArea from "./components/business-area";
import Difference from "./components/different";
import CTAButton from "./components/cta-button";
const list = [
  {
    title: 'Strengthening brand identity',
    sub: 'Custom animated videos make all the difference by anchoring your unique brand identity, that will leave your mark in the competitive edge.'
  },
  {
    title: 'Simplifying complex ideas',
    sub: 'Complex concepts can be simplified with the help of engaging animation, that will effectively communicate your idea..'
  },
  {
    title: 'Strengthening brand identity',
    sub: 'Utilize the innovations of animation and create enthralling content that will lead to customer engagement, resulting in more leads and increase in sales.'
  },

];
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
              <CTAButton title="ABOUT US" link="/about" />
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
              { img: "img2.jpg", caption: "2D motion graphics", readbtn: "Know More", idname:"folio1" },
              { img: "img3.jpg", caption: "Whiteboard Animations", readbtn: "Know More", idname:"folio" },
              { img: "img4.jpg", caption: "Storytelling scripted animations", readbtn: "Know More", idname:"folio" },
              { img: "img1.jpg", caption: "3D product animation", readbtn: "Know More", idname:"folio" },
              { img: "img2.jpg", caption: "2D motion graphics", readbtn: "Know More", idname:"folio" },
            ]}
            />

              <CTAButton title="VIEW ALL" link="#" />

          </div>
        </div>
      </section>


      {/* WATCH VIDEO AREA */}
      <section className={styles["watch-area"]}>
        <div className="container">
          <div className={styles.watch}>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className={styles["first-video"]}>
                  <div className={styles.video1}>

                    <iframe
                      src="https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo"
                      title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media"
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>

                  </div>
                  <div className={styles.video2}>
                    <iframe
                      src="https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo"
                      title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media"
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>

                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 odr">
                <div className={styles["second-video"]}>
                  <div className={styles.content}>
                    <h6> Our Portfolio</h6>
                    <h2>Lorem ipsum </h2>

                  </div>


                  <div className={styles.video3}>
                    <iframe
                      src="https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo"
                      title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media"
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SLIDER AREA START */}

      <section className={styles["video-slider"]}>
        <div className="container">
          <div className="vdo">
            <Slider datas={[
              { caption: "Lorem ipsum dolor sit amet.", paragraph: "hghgbh vggxhgsdgsugggh hgsdgsudgyug,", iframe: "https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo", idname:"VDOSlider" },
              { caption: "Lorem ipsum dolor sit amet.", paragraph: "hbugdu gh gssusgschc.", iframe: "https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo", idname:"VDOSlider" },
              { caption: "Lorem ipsum dolor sit amet.", paragraph: "hgsbhgs shgygvsg hgds.", iframe: "https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo", idname:"VDOSlider" },

            ]}
              spaceBetween={0}
              slidesPerView={1}
              slideImageStyle={{
                width: '100%',

              }}
            />
          </div>
        </div>
      </section>



      {/* MOTION GRAPHICS AREA START */}

      <section className={styles["motion-graphics"]}>
        <div className="container">
          <div className={styles["motion-graphics-content"]}>
            <h5>Motion Graphics</h5>
            <h2>Living. Breathing. Digital Experiences</h2>
          </div>
          {/* <div className={styles.specialslide}> */}
          <Slider datas={[
            { img: "gr-1.gif", date: "01-02-2025", caption: "2D motion graphics", idname: "MoGraph" },
            { img: "gr-2.gif", date: "01-02-2025", caption: "Whiteboard Animations", idname: "MoGraph" },
            { img: "gr-3.gif", date: "01-02-2025", caption: "Storytelling scripted ", idname: "MoGraph" },
            { img: "gr-1.gif", date: "01-02-2025", caption: "3D product animation", idname: "MoGraph" },
          ]}
            spaceBetween={50}
            slidesPerView={3}
            slideImageStyle={{
              width: '100%',

            }}
          />
        </div>
        {/* </div> */}
      </section>


      {/* BUSINESS AREA START */}

      <section className={styles.businessArea}>
        <div className="container">
          <div className={styles["business-list"]}>
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div className={styles.heading}>
                  <h2>Let animation lead your business</h2>
                  <p className={styles.listp}>Where words fail, visuals take over. In this tech-driven world, animation is the major edge that provides a creative nudge to communication.</p>
                </div>
              </div>
              <div className="col-xl-7">
                <div className={styles.lists}>
                  {
                    list.map((item, idx) => (
                      <BusinessArea key={idx} title={item.title} sub={item.sub}></BusinessArea>

                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* CLIENTS AREA START */}

      {/* <Slider/> */}



{/* DIFFERENCE AREA START */}
      {/* <section className={styles.test}>
        <h1 className={styles.h1}>The Difference We Bring</h1>
        <div className="row">
          <div className={styles.all}>
            {
              list.map((item, idx) => (
                <Items key={idx} title={item.title} sub={item.sub}></Items>

              ))
            }
          </div>
        </div>
      </section> */}


      <Difference></Difference>


      
      <section className={styles["motion-graphics"]}>
        <div className="container">
          <div className={styles["motion-graphics-content"]}>
            <h5>CLIENTS</h5>
            <h2>Living. Breathing. Digital Experiences</h2>
          </div>
          {/* <div className={styles.specialslide}> */}
          <Slider datas={[
            { img: "gr-1.gif" , idname: "clientSlide1"},
            { img: "gr-2.gif" , idname: "clientSlide2"},
            { img: "gr-3.gif" , idname: "clientSlide3"},
            { img: "gr-1.gif" , idname: "clientSlide4"},
          ]}
            spaceBetween={1}
            slidesPerView={11}
            slideImageStyle={{
              width: '100%',

            }}
            navButtons={false}
          />
        </div>
        {/* </div> */}
      </section>

    </>


  );
}

