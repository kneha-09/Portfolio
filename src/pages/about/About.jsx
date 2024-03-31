import React from "react";
import "./about.css";
// import Info from "../../components/info";
import Stats from "../../components/stats";
import { FaDownload, FaRegMoneyBillAlt } from "react-icons/fa";
import CV from "../../assets/Neha_Kumavat_9373657448.pdf";
import Frontendskills from "../../components/Frontendskills";
import Backendskills from "../../components/Backendskills";
import Other from "../../components/Other";
import Database from "../../components/Database";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          

          <div className="about__info">
            <div className="about__img">
              <img src="https://i.ibb.co/j6LfHr6/about.jpg" alt=""/>
            </div>

            <div className="aboutright"><a href={CV} download="" className="button about__button">
              Download CV{" "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a></div>
           
            
          </div>

          <div className="stats grid">
            <Stats />
          </div>

          
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__title ">
          My <span>Skills</span>
        </h3>

        <div className="skills__container grid">
          <div className="skills__info ">
            <h3 className="section__subtitle section__subtitle__frontend ">
              Frontend
            </h3>

            <Frontendskills />
          </div>

          <div className="skills__info ">
            <h3 className="section__subtitle section__subtitle__frontend ">
              Backend
            </h3>

            <Backendskills />
          </div>
          <div className="skills__info ">
            <h3 className="section__subtitle section__subtitle__frontend ">
              Languages
            </h3>
            <Other />
          </div>
          <div className="skills__info ">
            <h3 className="section__subtitle section__subtitle__frontend ">
              Database & Others
            </h3>

            <Database />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__title subtitle__center">
          {" "}
          Experience &<span> Education</span>
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
