import "./styles/About.css";

const About = () => {
  return (
    <div
      className="about-section"
      id="about"
    >
      <div className="about-me">

        <h3 className="title">
          About Me
        </h3>

        <p className="para">
          I’m <span>Om Prakhar</span>, a
          B.Tech Computer Science &
          Engineering student at
          <span>
            {" "}
            KL University,
            Vijayawada
          </span>
          , passionate about
          <span>
            {" "}
            Artificial Intelligence,
            Machine Learning,
            Data Science
          </span>
          , and
          <span>
            {" "}
            Software Development
          </span>
          .

          <br />
          <br />

          I have a strong interest in
          building intelligent systems,
          solving real-world problems,
          and continuously improving my
          technical skills through
          hands-on projects and
          practical learning.

          <br />
          <br />

          My core programming language
          for
          <span>
            {" "}
            Data Structures &
            Algorithms
          </span>{" "}
          is
          <span> Java</span>, while I
          actively use
          <span> Python</span> for
          <span>
            {" "}
            AI, Machine Learning,
            and Data Science
          </span>
          .

          <br />
          <br />

          I’m a
          <span>
            {" "}
            4★ CodeChef Programmer
          </span>{" "}
          with
          <span>
            {" "}
            300+ DSA Problems Solved
          </span>
          , actively participating in
          competitive programming and
          strengthening my
          problem-solving abilities for
          global opportunities in tech.
        </p>

      </div>
    </div>
  );
};

export default About;