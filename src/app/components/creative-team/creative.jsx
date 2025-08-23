import Profile from "./profile";
import styles from "./creative.module.scss";
export default function CreativeTeam() {
  const list = [
    {
      image: "/team/gokul.jpg",
      name: "Blog 1 Subtitle",
      status: "2023-10-01",
    },
    {
      image: "/team/basil.jpg",
      name: "Blog 2 Subtitle",
      status: "2023-10-02",
    },
    {
      image: "/team/iyas.jpg",
      name: "Blog 3 Subtitle",
      status: "2023-10-03",
    },
    {
      image: "/team/anu.jpg",
      name: "Blog 4 Subtitle",
      status: "2023-10-04",
    },
    {
      image: "/team/sreerag.jpg",
      name: "Blog 5 Subtitle",
      status: "2023-10-05",
    },
    {
      image: "/team/hadi.jpg",
      name: "Blog 6 Subtitle",
      status: "2023-10-06",
    },
  ];
  return (
    <section className={styles["creative-team"]}>
      <h2>Meet The Creative Team</h2>
      <div className="container">
        <div className="row">
              {list.map((item, index) => (
                <div key={index} className="col-xl-4">
                    <Profile
                      image={item.image}
                      name={item.name}
                      status={item.status}
                    />
                  </div>
              ))}
          <div >
            </div>
          </div>
        </div>
    </section>
  );
}
                
