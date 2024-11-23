import React from "react";
import Image from "next/image";



const About = () => {
  return (
    <section className= "section">
      <h1>About</h1>
      <div className="text-container">
        <p>
          Hi! I am a frontend developer with a passion for crafting seamless and
          visually engaging user interfaces. With a strong foundation in HTML,
          CSS, TypeScript, and React, I build responsive, interactive
          applications that offer a smooth user experience. My goal is to create
          clean, efficient code that brings designs to life while prioritizin
          usability and performance.
        </p>
      </div>
      <p className="sub-heading">Finally some quick bits about me:</p>
      <ul className="list-container">
        <li className="list-item">Intermediate in Medical Science</li>
        <li className="list-item">Diploma in English</li>
        <li className="list-item">Aspiring in AI Technologies</li>
        <li className="list-item">Avid Learner</li>
      </ul>
      <h2>My Skills</h2>
      <p className="sub-heading">
        The skills, tools, and technologies I am really good at:
      </p>
      <div className="skills-grid">
        {[
          { src: "/html.png", label: "HTML" },
          { src: "/css.png", label: "CSS" },
          { src: "/tailwind.png", label: "Tailwind CSS" },
          { src: "/node.png", label: "Node.js" },
          { src: "/githup.png", label: "GitHub" },
        ].map((skill, index) => (
          <div key={index} className="skill-card">
            <Image src={skill.src} alt={skill.label} width={100} height={100} />
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
      <p className="sub-heading">
        The technologies I know but need to work on further:
      </p>
      <div className="skills-grid">
        {[
          { src: "/next.png", label: "Next.js" },
          { src: "/typescript.png", label: "TypeScript" },
          { src: "/javascript.png", label: "JavaScript" },
        ].map((tech, index) => (
          <div key={index} className="skill-card">
            <Image src={tech.src} alt={tech.label} width={100} height={100} />
            <p>{tech.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
