import Items from "../item";
import styles from "./ser.module.scss";
import Image from "next/image";
export default function ServicesImage({ image, caption }) {
  return (
    <>
      <section className={styles.servicepage}>
        <div className={styles.serviceimageCover}>
          <div className={styles.image}>
            <Image src={image} width={387} height={396} alt="image" />
            <div className={styles.list}>
              <div className={styles.listItem}>
                <h5>Lorem ipsum dolor sit</h5>
              </div>
              <div className={styles.listItem}>
                <h5>Lorem ipsum dolor sit</h5>
              </div>
              <div className={styles.listItem}>
                <h5>Lorem ipsum dolor sit</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h6>{caption}</h6>
        </div>
      </section>
    </>
  );
}
