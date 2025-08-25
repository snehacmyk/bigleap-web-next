import styles from "./ser.module.scss";
import ServicesImage from "./animation";
import CTAButton from "../ctaButton/ctabtn";
export default function ServiceImage() {
  const list = [
    {
      image: "/servicess/2danimation.png",
      caption: "2D Animation",
    },
    {
      image: "/servicess/3danimation.png",
      caption: "3D Animation",
    },
    {
      image: "/servicess/Whiteboard Animation.png",
      caption: "Whiteboard Animation",
    },
    {
      image: "/servicess/character.png",
      caption: "Character Design",
    },
    {
      image: "/servicess/comic-book.png",
      caption: "Comic Book",
    },
    {
      image: "/servicess/red-machine.png",
      caption: "red machine",
    },
    {
      image: "/servicess/VFX & Post Production.png",
      caption: "VFX & Post Production",
    },
    {
      image: "/servicess/video.png",
      caption: "Video Editing & Post Production",
    },
    {
      image: "/servicess/Whiteboard Animation.png",
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
