import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          <div className="landing-intro">
            <h2>Hello, I'm</h2>

            <h1>
              OM
              <br />
              <span>PRAKHAR</span>
            </h1>
          </div>

          <div className="landing-info">
            <h3>Building AI-Powered</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software</div>
              <div className="landing-h2-2">Experiences</div>
            </h2>

            <h2>
              <div className="landing-h2-info">
                AI • Data Science • Full Stack
              </div>

              <div className="landing-h2-info-1">
                4★ CodeChef • 300+ DSA Problems
              </div>
            </h2>

          </div>

        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;