import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "MedicureX",
    category: "Healthcare Management Platform",
    tools:
      "Patient Management, Healthcare Dashboard, Secure System",
    image: "/images/medicurex.png",
    link: "https://chipper-tanuki-702dce.netlify.app/",
  },

  {
    title: "Student Management System",
    category: "Academic Management Platform",
    tools:
      "Java, DSA with Java, Student Records, Database Management",
    image: "/images/studentmanagement.png",
    link: "https://monumental-faun-9203ca.netlify.app/",
  },

  {
    title: "SkyCast",
    category: "Weather Forecast Platform",
    tools:
      "React, Weather API, Live Forecast, Responsive UI",
    image: "/images/skycast.png",
    link: "https://skycaastt.netlify.app/",
  },

  {
    title: "Rakat Setu",
    category: "Blood & Organ Donation Platform",
    tools:
      "Blood Donation, Organ Registry, Real-Time Availability",
    image: "/images/raktsetu.png",
    link: "#",
  },

  {
    title: "Suryajal",
    category:
      "Published Smart Product & Innovation Project",
    tools:
      "Solar Technology, Smart Purification, UV Filtration, Product Innovation, Research & Prototype Development",
    image: "/images/suryajal.png",
    link: "#",
  },

  {
    title: "Nova AI",
    category:
      "AI Assistant Platform • In Development",
    tools:
      "AI Chat, NLP, Smart Assistant, LLM Integration",
    image: "/images/novaai.png",
    link: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [isAnimating, setIsAnimating] =
    useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0
        ? projects.length - 1
        : currentIndex - 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex ===
      projects.length - 1
        ? 0
        : currentIndex + 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div
      className="work-section"
      id="work"
    >
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">

          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous Project"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next Project"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${
                  currentIndex * 100
                }%)`,
              }}
            >
              {projects.map(
                (project, index) => (
                  <div
                    className="carousel-slide"
                    key={index}
                  >
                    <div className="carousel-content">

                      <div className="carousel-info">

                        <div className="carousel-number">
                          <h3>
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </h3>
                        </div>

                        <div className="carousel-details">

                          <h4>
                            {project.title}
                          </h4>

                          <p className="carousel-category">
                            {
                              project.category
                            }
                          </p>

                          <div className="carousel-tools">
                            <span className="tools-label">
                              Tools &
                              Features
                            </span>

                            <p>
                              {
                                project.tools
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-image-wrapper">
                        <WorkImage
                          image={
                            project.image
                          }
                          alt={
                            project.title
                          }
                          link={
                            project.link
                          }
                        />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map(
              (_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    index ===
                    currentIndex
                      ? "carousel-dot-active"
                      : ""
                  }`}
                  onClick={() =>
                    goToSlide(index)
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;