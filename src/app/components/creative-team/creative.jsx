export default function CreativeTeam() {
  const list = [
    {
      image: "/public/team/gokul.jpg",
      name: "Blog 1 Subtitle",
      status: "2023-10-01",
    },
    {
      image: "/public/team/basil.jpg",
      name: "Blog 2 Subtitle",
      status: "2023-10-02",
    },
    {
      image: "/public/team/iyas.jpg",
      name: "Blog 3 Subtitle",
      status: "2023-10-03",
    },
    {
      image: "/public/team/anu.jpg",
      name: "Blog 4 Subtitle",
      status: "2023-10-04",
    },
    {
      image: "/public/team/sreerag.jpg",
      name: "Blog 5 Subtitle",
      status: "2023-10-05",
    },
    {
      image: "/public/team/hadi.jpg",
      name: "Blog 6 Subtitle",
      status: "2023-10-06",
    }
  ];
  return (
    <section className="creative-team">
      <h2>Meet The Creative Team</h2>
      <div className="container">
        <div className="row">
          <div className="col-xl-4"></div>
        </div>
      </div>
    </section>
  );
}
