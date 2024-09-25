import "./Works.css";
const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="workDesc">
        As part of my role, I contributed to the development of the
        <span style={{ fontWeight: "bold" }}> Enjoy-Life app </span>, which
        served as an after-sales service platform for Mika Corporation. This
        innovative application facilitated various tasks, including event
        reservations, accessing building-related news, and seamless bill
        payments. I collaborated closely with the team to ensure the app met
        user needs and delivered a seamless experience.
      </span>
      <span className="workDesc">
        In another project, I was involved in developing a
        <span style={{ fontWeight: "bold" }}>
          {" "}
          quality assurance application{" "}
        </span>
        quality assurance application tailored for Mika Corporation employees.
        This app was designed to ensure the safety and compliance of the
        buildings constructed by the corporation. My responsibilities included
        implementing robust features to perform safety checks effectively,
        enhancing the overall reliability and functionality of the application.
        Through meticulous testing and collaboration with stakeholders, we
        successfully delivered a solution that met the stringent quality
        standards of the organization.
      </span>
      <div className="worksImgs">
        <img src="/enjoyLife.jpg" alt="enjoy-life" className="worksImg" />
        <img
          src="mikapartners.jpg"
          alt="Mika-QualityAssurance"
          className="worksImg"
        />
      </div>

      <span className="workDesc">
        As part of my Bachelor's degree, I worked on{" "}
        <span style={{ fontWeight: "bold" }}> Sandcat </span>, a web-based
        platform designed to help children learn through interactive quizzes and
        games. The platform allows teachers to create engaging quizzes,
        fostering an environment where children can play and learn
        simultaneously. I was responsible for generating well-structured quiz
        forms and creating an intuitive user interface that enabled teachers to
        easily design quizzes tailored for children. My work primarily involved
        ensuring that the platform provided a seamless and enjoyable experience
        for both teachers and students.
      </span>
      <img src="Sandcat.png" alt="Mika-QualityAssurance" className="worksImg" />
      {/* <button className="workBtn">see more</button> */}
    </section>
  );
};

export default Works;
