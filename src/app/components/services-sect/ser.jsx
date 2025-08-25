import styles from "./ser.module.scss";
import ServicesImage from "./animation";
import CTAButton from "../ctaButton/ctabtn";
export default function ServiceImage() {
  const list = [
    {
      image: "/services/2danimation.png",
      caption: "2D Animation",
    },
    {
      image: "/services/3danimation.png",
      caption: "3D Animation",
    },
    {
      image: "/services/Whiteboard Animation.png",
      caption: "Whiteboard Animation",
    },
    {
      image: "/services/character.png",
      caption: "Character Design",
    },
    {
      image: "/services/comic-book.png",
      caption: "Comic Book",
    },
    {
      image: "/services/red-machine.png",
      caption: "red machine",
    },
    {
      image: "/services/VFX & Post Production.png",
      caption: "VFX & Post Production",
    },
    {
      image: "/services/Video Editing & Post Production.png",
      caption: "Video Editing & Post Production",
    },
    {
      image: "/services/Whiteboard Animation.png",
      caption: "white board",
    },
  ];
  return (
    <>
      <section className={styles.ServiceImage}>
        <h2> Services We Provide</h2>
        <div className="container">
          <div className="row">
            {list.map((item, index) => (
              <div key={index} className="col-xl-4">
                <div className={styles.serMain}>
                  <ServicesImage image={item.image} caption={item.caption} />
                  <CTAButton title="LEARN MORE" link="#" />
                </div>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
