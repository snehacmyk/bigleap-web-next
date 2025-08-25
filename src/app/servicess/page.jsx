import TitleBanner from "../components/title-banner/title.jsx";
import styles from "./services.module.scss";
import Image from "next/image";
import ServiceImage from "../components/services-sect/ser.jsx";
import Industries from "../components/industries/industries.jsx";
import EnquirySect from "../components/enquiry/enquiry.jsx"
export default function ServicesPage() {
  return (
    <>
      <TitleBanner title="Our creativity begins where reality ends" />

      {/* SERVICE MAIN AREA START */}
      <section className={styles["service-main-area"]}>
        <div className="container">
          <div className={`row ${styles.serviceBox}`}>
            <div className="col-xl-3">
              <div className={styles.image}>
                <Image
                  src="/services/comic-book.png"
                  alt=""
                  width={237}
                  height={365}
                  className={styles.comicImg}
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className={styles.content}>
                <h4>
                  A creative studio specializing in the production of
                  captivating animation videos that bring ideas to life.
                </h4>
                <p>
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim.Adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim.Adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim.Adipiscing elit, <br />
                  sed do eiusmod tempor incididunt Ut labore et dolore magna
                  aliqua. Adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim.Adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim.Adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim.Adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceImage />

      <section className={styles.animatedDes}>
        <div className="container">
          <div className={styles.allDes}>
            <h2>
              Do You Want to
              <span className={styles.colordText}>Create </span>
              an <span className={styles.colordText}>Impact</span> with a
              Professional & Effective
              <span className={styles.colordText}>Animated Video </span> ?
            </h2>
            <div className={styles.aniContent}>
              <p>
                Brand Bugs ensure the top-notch level video production services
                in Dubai with a perfect focus on empowering your brand with
                animated videos and motion graphics in a highly experienced
                manner. Our professionals at the leading video production
                company in UAE go over and above the standard criteria to
                convince your target audience with a spellbinding and resounding
                animated video.
              </p>
              <p>
                Our animation services in Dubai understand the importance of
                animated videos because they are an integral tool for effective
                marketing communication. The consumers of today are not
                interested in reading the lengthy content pieces, be it on a
                website or elsewhere. And this is where we offer our clients the
                most robust solutions with a short, crispy, and astounding
                animated video that will certainly engage your potential
                customers while acquainting them with your services and products
                in a matter of a few minutes.
              </p>
              <p>
                Our certified, expert, and knowledgeable specialists are highly
                experienced in corporate video production services, commercial
                video production services, animation services, and motion
                graphics in Dubai. Adding more to this, our services don’t limit
                here, we expand our horizons with long-duration story-based
                videos in Dubai to earn a massive revenue for businesses on
                popular video streaming websites such as YouTube.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Industries />
      <EnquirySect />
    </>
  );
}
