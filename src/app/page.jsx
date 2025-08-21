import Image from "next/image";
// import styles from "./page.module.css";
import styles from "./index.module.scss";
import Slider from "./components/slider/page.jsx";
import BusinessArea from "./components/business-area";
import Difference from "./components/different";
import CTAButton from "./components/ctaButton/page.jsx";
import FAQSection from "./components/faq/page.jsx";
import BlogSection from "./components/blogs/page.jsx";
import EnquirySect from "./components/enquiry/page.jsx";
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
          <Image id="yeeha-img" src="/Yeeha.png" alt="yeeha" width={1711} height={655} className={styles.yeehaimage} />
          {/* <img id="img360" src="360.png" alt="360image" /> */}
          <Image id="character-img" src="/character.png" alt="Character Image" width={1200} height={1666} className={styles.characterimage} />
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
                <CTAButton title="ABOUT US" link="/about" />

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
              { img: "/img2.jpg", imgWH: 774, caption: "2D motion graphics", readbtn: "Know More", idname: "folio1" },
              { img: "/img3.jpg", imgWH: 774, caption: "Whiteboard Animations", readbtn: "Know More", idname: "folio" },
              { img: "/img4.jpg", imgWH: 744, caption: "Storytelling scripted animations", readbtn: "Know More", idname: "folio" },
              { img: "/img1.jpg", imgWH: 774, caption: "3D product animation", readbtn: "Know More", idname: "folio" },
              { img: "/img2.jpg", imgWH: 774, caption: "2D motion graphics", readbtn: "Know More", idname: "folio" },
            ]}
              spaceBetween={5}
              slidesPerView={4}
              loop={true}
              slideImageStyle={{
                width: '60%',
                height: '60%',
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 120 },
                1366: { slidesPerView: 4, spaceBetween: 20 },
              }}
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
                    <CTAButton title="WATCH MORE" link="#" />

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
      {/* <CounterHead /> */}

      {/* VIDEO SLIDER AREA START */}

      <section className={styles["video-slider"]}>
        <div className="container">
          <div className="vdo">
            <Slider datas={[
              { caption: "Lorem ipsum dolor sit amet.", paragraph: "hghgbh vggxhgsdgsugggh hgsdgsudgyug,", iframe: "https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo", idname: "VDOSlider" },
              { caption: "Lorem ipsum dolor sit amet.", paragraph: "hbugdu gh gssusgschc.", iframe: "https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo", idname: "VDOSlider" },
              { caption: "Lorem ipsum dolor sit amet.", paragraph: "hgsbhgs shgygvsg hgds.", iframe: "https://www.youtube.com/embed/xiW4HMDR1eo?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playlist=xiW4HMDR1eo", idname: "VDOSlider" },

            ]}
              spaceBetween={0}
              slidesPerView={1}
              slideImageStyle={{
                width: '100%',
                height: '100%',

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
            { img: "/gr-1.gif", imgWH: 774, date: "01-02-2025", caption: "2D motion graphics", idname: "MoGraph" },
            { img: "/gr-2.gif", imgWH: 774, date: "01-02-2025", caption: "Whiteboard Animations", idname: "MoGraph" },
            { img: "/gr-3.gif", imgWH: 774, date: "01-02-2025", caption: "Storytelling scripted ", idname: "MoGraph" },
            { img: "/gr-1.gif", imgWH: 774, date: "01-02-2025", caption: "3D product animation", idname: "MoGraph" },
          ]}
            spaceBetween={50}
            slidesPerView={3}
            slideImageStyle={{
              width: '100%',

            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 120 },
              1366: { slidesPerView: 3, spaceBetween: 50 },
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

 <section className={styles["client-section"]}>
        <div className={styles["client-content"]}>
          <h5>Our Clients</h5>
          <h2>Trusted Clients</h2>
        </div>
        {/* <div className={styles.specialslide}> */}
        <Slider datas={[
          { img: "/image (1).jpg", imgWH: 774, idname: "clientSlide1" },
          { img: "/image (2).jpg", imgWH: 774, idname: "clientSlide2" },
          { img: "/image (3).jpg", imgWH: 774, idname: "clientSlide3" },
          { img: "/image (5).jpg", imgWH: 774, idname: "clientSlide4" },
          { img: "/image (6).jpg", imgWH: 774, idname: "clientSlide1" },
          { img: "/image (7).jpg", imgWH: 774, idname: "clientSlide2" },
          { img: "/image (8).jpg", imgWH: 774, idname: "clientSlide3" },
          { img: "/image (9).jpg", imgWH: 774, idname: "clientSlide1" },
          { img: "/image (10).jpg", imgWH: 774, idname: "clientSlide4" },
          { img: "/image (3).jpg", imgWH: 774, idname: "clientSlide2" },
          { img: "/image (7).jpg", imgWH: 774, idname: "clientSlide3" },
          { img: "/image (5).jpg", imgWH: 774, idname: "clientSlide4" },
        ]}
          spaceBetween={5}
          slidesPerView={11}
          slideImageStyle={{
            width: '100%',

          }}
          navButtons={false}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 120 },
            1366: { slidesPerView: 10, spaceBetween: 0 },
          }}
        />
        {/* </div> */}
      </section>



      {/* DIFFERENCE AREA START */}
      <Difference></Difference>

      <FAQSection />

      <BlogSection />

     <EnquirySect/>

    </>


  );
}

