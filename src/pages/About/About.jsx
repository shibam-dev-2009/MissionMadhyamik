import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import assets from "../../assets/assets";
function About() {
  return (
    <div className="about">
      <Header title="Our Story" subtitle="Students helping students: Building a stronger foundation for a brighter future." />

      <div className="team">
        <div className="member">
            <img src={assets.person1} alt="" />
          <h1>Group Admin</h1>
          <h2>Anik - Bengali </h2>
          <p>A student dedicated to Bengali literature, focused on sharing linguistic insights and helping peers achieve academic success.</p>
        </div>
        <div className="member">
            <img src={assets.person2} alt="" />
          <h1>Group Admin</h1>
          <h2>Angshuman- Physical Science</h2>
          <p>Science student with a passion for physics and chemistry, aiming to simplify complex theories for fellow learners.</p>
        </div>
        <div className="member">
            <img src={assets.person3} alt="" />
          <h1>Mentor</h1>
          <h2>Mayukh- math</h2>
          <p>Math enthusiast who enjoys solving complex problems and helping students build a strong logical foundation.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
