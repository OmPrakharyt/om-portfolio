import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="mailto:prakharbro2006@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — prakharbro2006@gmail.com
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/omprakhar/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — omprakhar
              </a>
            </p>

            <h4>Education</h4>

            <p>
              B.Tech Computer Science & Engineering — KL University,
              Vijayawada (2024–Present)
            </p>

            <p>
              Focus Areas: Artificial Intelligence, Data Science,
              DSA & Software Development
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/OmPrakharyt"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/omprakhar/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/omprakhar_yt/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <a
              href="https://www.codechef.com/users/goofy_halo_29"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              CodeChef <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Om Prakhar</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;