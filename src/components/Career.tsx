import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE Student</h4>
                <h5>KL University, Vijayawada</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science and Engineering with a strong
              focus on Artificial Intelligence, Data Science, Software Development,
              and Data Structures & Algorithms.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Programming</h4>
                <h5>CodeChef & DSA</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Achieved 4★ on CodeChef and solved 300+ DSA problems across
              competitive programming platforms, strengthening problem-solving,
              algorithms, and coding efficiency.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Learning</h4>
                <h5>Cloud, AI & Machine Learning</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Earned certifications including AWS Certified Cloud Practitioner,
              Oracle Cloud Infrastructure Data Science Professional, Oracle AI
              Foundations Associate, GitHub Copilot Certification, NPTEL Machine
              Learning (IIT Madras), and Fundamental Algorithms: Design &
              Analysis (Elite).
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Full Stack Projects</h4>
                <h5>Real-World Development</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Built impactful projects including MediCurex (Virtual Healthcare
              System), SkyCast Weather Dashboard, Blood & Organ Donation Platform,
              Solar Smart Bench, and AI-inspired intelligent systems with modern,
              interactive user experiences.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Portfolio Experience</h4>
                <h5>Navo AI Inspired Interface</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Designed and developed an AI-inspired interactive portfolio with
              smart navigation, premium UI, dynamic project showcase, coding
              achievements, certifications, and recruiter-friendly experience
              inspired by modern AI systems.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;