import Items from "../item";
import styles from "./ser.module.scss";
import Image from "next/image";
export default function ServicesImage({ image, caption}) {
  const list = [
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",    
    },
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",
    },
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",
    },
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",
    },
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",
    },
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",
    },
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",
    },
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",
    },
    {
      sub1: "Lorem ipsum dolor sit",
      sub2: "Lorem ipsum dolor sit",
      sub3: "Lorem ipsum dolor sit",
    },
    
];
  return (
    <>
      <section className={styles.servicepage}>
        <div className={styles.serviceimageCover}>
          <div className={styles.image}>
            <Image src={image} width={387} height={396} alt="image" />
            {
                list.map((item, index) => (
                    <div className={styles.list} key={index}>
                        <div className={styles.listItem}>
                            <h5>{item.sub1}</h5>
                        </div>
                        <div className={styles.listItem}>
                            <h5>{item.sub2}</h5>
                        </div>
                        <div className={styles.listItem}>
                            <h5>{item.sub3}</h5>
                        </div>
                    </div>
                ))
            }
          
          </div>
        </div>
        <div className={styles.content}>
          <h6>{caption}</h6>
        </div>
      </section>
    </>
  );
}
