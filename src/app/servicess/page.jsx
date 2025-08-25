import TitleBanner from "../components/title-banner/title.jsx";
import styles from "./services.module.scss";
import Image from "next/image";
import ServiceImage from "../components/services-sect/ser.jsx";

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
                  minim.Adipiscing elit, <br />sed do eiusmod tempor incididunt Ut
                  labore et dolore magna aliqua. Adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim.Adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim.Adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim.Adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ServiceImage />
    </>
  );
}
